FROM node:20-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY pnpm-lock.yaml package.json ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm fetch

FROM base AS build
COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:1.27-alpine AS runtime
RUN rm -f /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
    'server {' \
    '  listen       6006;' \                 
    '  server_name  _;' \
    '  root   /usr/share/nginx/html;' \
    '  index  index.html;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \  
    '  }' \
    '  location ~* \.(?:js|css|svg|png|jpg|jpeg|gif|ico|woff2?)$ {' \
    '    expires 30d;' \                        
    '    access_log off;' \
    '  }' \
    '}' \
    > /etc/nginx/conf.d/app.conf
    
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 6006
CMD ["nginx", "-g", "daemon off;"]

