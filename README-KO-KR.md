<a id="top-btn"></a>
# Deadlink-Hunter-Website🕵️
[![GitHub Stars](https://img.shields.io/github/stars/Deadlink-Hunter/Broken-Link-Website?style=social)](https://github.com/Deadlink-Hunter/Broken-Link-Website/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 다른 언어를 선호하시나요?

현재 README는 다양한 언어를 지원하고 있습니다. 
아래를 클릭해서 지원 언어를 바꾸세요:

- 🇨🇳 [简体中文](README-ZH-CN.md)
- 🇧🇷 [Português Brasileiro](README-PT-BR.md)
- en [English](README.md)

Deadlink-Hunter는  깃허브 리포지토리(타 플랫폼도 지원할 예정)에서 깨진 링크를 찾도록 설계된 오픈소스 프로젝트입니다.
관리자들이 문서를 깔끔하고, 신뢰할 만하며, 불편함 없이 유지할 수 있도록 돕는 것이 목표입니다.

Deadlink Hunter Website 는 웹사이트의 프론트엔드입니다.

참고용 [Broken-Link-Checker](https://github.com/Deadlink-Hunter/Broken-Link-Checker), 링크가 깨졌는지 아닌지 확인하는 프로젝트의 백엔드.

여기도 [Deadlink-Crawler](https://github.com/Deadlink-Hunter/Deadlink-crawler), 링크의 효과적인 분석과 크롤링을 위한 새 리포지토리.

해당 프로젝트는 오픈 소스 커뮤니티에 기여하기 위해 시작되었으며, 누구든 환영합니다.

아래의 이미지는 웹사이트가 원하는 스타일의 초안으로, 참고 자료로 사용되기 위해 Lovable에 의해 생성되었습니다.

<img width="1600" height="650" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />


You can check the [more elaborated ui](https://link-guard-191fc128.base44.app) that was created with base44 as initial inspiration.

<img width="434" height="667" alt="image" src="https://github.com/user-attachments/assets/6ae53712-a40a-4e33-bbb5-fd6445c3aec2" />

In order to see the ui log in.

<p align="left"><a href="#top-btn">Back to the top of page</a></p>

## Table of Contents
- [The why](#the-why)
- [기여](#contributing)
- [기여자들](#contributors)
- [Docker 셋업](#docker-setup)
- [Mantine Vite 템플릿](#mantine-vite-template)
- [기능](#features)
- [pnpm 스크립트](#pnpm-scripts)
- [빌드와 dev 스크립트](#build-and-dev-scripts)
  - [테스트 스크립트](#testing-scripts)
  - [기타 스크립트](#other-scripts)


<p align="left"><a href="#top-btn">Go back to the top of page</a></p>


## The Why

Documentation is the first entry point for most developers exploring a project.
Yet, README files and docs often contain outdated or broken links – even in large, well-maintained repositories.

But aren’t there already broken link checkers?
There are — but most of them don’t look very good, their UIs are not user-friendly, and their broken link detection doesn’t cover all cases (for example, localhost:4000 is not actually broken).

<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>


## Contributing

Contributions are welcome and greatly appreciated!

To contribute:

1.  **Fork** this repository to your own GitHub account.
2.  **Clone** your fork locally:
    ```bash
    git clone https://github.com/<your-username>/Broken-Link-Website.git
    cd Broken-Link-Website

    ```
3. (Optional) Install pnpm package manager from this [link](https://pnpm.io/installation).
4.  Install dependencies using **pnpm** (please do not use npm or yarn):
    ```bash
    pnpm install
    ```
5. Run this project:
    ```bash
    pnpm run dev
    ```
6.  Create a new branch for your feature or fix:
    ```bash
    git checkout -b my-feature
    ```
7.  Make your changes and commit them with clear messages.
8.  Push your branch to your fork:
    ```bash
    git push origin my-feature
    ```
9.  Create a **Pull Request** from your repository’s branch to the `main` branch of the original repository.

⚠️ Heads up: PRs that are fully AI generated and not checked by a human won’t be accepted.

<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>

## Environment Variables

This project includes a `.env.example` file in the repository that lists the environment variables required to run the app.

**Before running the project**, create a local `.env` file based on the example.
You can copy it quickly using the command below:

```bash
# macOS / Linux
cp .env.example .env

# PowerShell
Copy-Item .env.example .env
```

## Docker Setup

This project includes Docker support for easy deployment and development. You can run the application using Docker in two ways:

### Option 1: Using Docker Compose (Recommended)

The easiest way to run the application is using Docker Compose:

```bash
# Build and start the application
docker-compose up --build

# Or run in detached mode (background)
docker-compose up --build -d
```

The application will be available at `http://localhost`

To stop the application:
```bash
docker-compose down
```

### Option 2: Using Docker directly

You can also build and run the Docker container directly:

```bash
# Build the Docker image
docker build -t deadlink-hunter .

# Run the container
docker run -p 80:6006 deadlink-hunter
```

The application will be available at `http://localhost`


### Docker Configuration

- **Port**: The application runs on port `6006` inside the container and is mapped to port `80` on your host machine
- **Web Server**: Uses nginx to serve the built application
- **Build Process**: Multi-stage build that installs dependencies, builds the app, and serves it with nginx
- **Base Image**: Built on `node:20-alpine` for the build stage and `nginx:1.27-alpine` for the runtime

<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>


## Mantine Vite template

This project is based on the Mantine Vite template.
<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>
## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>


## pnpm scripts
<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>
## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>

## Contributors

Thanks to all the amazing contributors who have helped make this project better! 🎉


<a href="https://github.com/Deadlink-Hunter/Broken-Link-Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Deadlink-Hunter/Broken-Link-Website" alt="Contributors" />
</a>
<p align="left"><a href="#top-btn">Go back to the top of the page</a></p>
