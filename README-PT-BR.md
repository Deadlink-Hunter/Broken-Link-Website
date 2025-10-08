# Deadlink-Hunter🕵️

Deadlink-Hunter é um projeto de código aberto criado para encontrar links quebrados em repositórios do GitHub (com suporte futuro para outras plataformas).
O objetivo é ajudar mantenedores a manter sua documentação limpa, confiável e sem frustrações para leitores.

Este é o design geral desejado para o site, gerado pelo Lovable, apenas para servir de inspiração.

<img width="1884" height="895" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

Você pode conferir a [interface mais elaborada](https://link-guard-191fc128.base44.app) que foi criada com o base44 como inspiração inicial neste link:

## O porquê

A documentação é o primeiro ponto de contato para a maioria dos desenvolvedores que estão explorando um projeto.
Ainda assim, READMEs e docs frequentemente contêm links desatualizados ou quebrados — mesmo em repositórios grandes e bem mantidos.

Mas já não existem verificadores de links quebrados?
Existem — mas a maioria deles não é muito bonita, suas interfaces não são amigáveis e a detecção de links quebrados não cobre todos os casos (por exemplo, localhost:4000 não está realmente quebrado).

---

## Contribuindo

Contribuições são bem-vindas e muito apreciadas!

Para contribuir:

1. **Faça um fork** deste repositório para sua própria conta do GitHub.
2. **Clone** o fork localmente:
   ```bash
   git clone https://github.com/<seu-usuario>/Deadlink-Hunter.git
   cd Deadlink-Hunter
   ```
3. Instale as dependências usando **pnpm** (por favor, não use npm ou yarn):
   ```bash
   pnpm install
   ```
4. Crie uma nova branch para sua funcionalidade ou correção:
   ```bash
   git checkout -b minha-funcionalidade
   ```
5. Faça suas alterações e faça commits com mensagens claras.
6. Faça push da sua branch para o fork:
   ```bash
   git push origin minha-funcionalidade
   ```
7. Crie um **Pull Request** da branch do seu repositório para a branch `main` do repositório original.

---

Instale as dependências usando pnpm (por favor, não use npm ou yarn):

`pnpm install`

Crie uma nova branch para sua funcionalidade ou correção:

`git checkout -b minha-funcionalidade`

Faça suas alterações e faça commits com mensagens claras.

Envie sua branch para o fork e crie pull requests do seu repositório para a branch main dentro do repositório original.

## Template Mantine Vite

## Funcionalidades

Este template vem com as seguintes funcionalidades:

- [PostCSS](https://postcss.org/) com [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) configurado com [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint configurado com [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## Scripts pnpm

## Scripts de build e desenvolvimento

- `dev` – inicia o servidor de desenvolvimento
- `build` – cria a versão de produção do app
- `preview` – faz o preview local do build de produção

### Scripts de testes

- `typecheck` – verifica os tipos TypeScript
- `lint` – executa o ESLint
- `prettier:check` – verifica os arquivos com o Prettier
- `vitest` – executa os testes do vitest
- `vitest:watch` – inicia o vitest em modo watch
- `test` – executa os scripts `vitest`, `prettier:check`, `lint` e `typecheck`

### Outros scripts

- `storybook` – inicia o servidor de desenvolvimento do Storybook
- `storybook:build` – cria o bundle de produção do Storybook em `storybook-static`
- `prettier:write` – formata todos os arquivos com o Prettier
