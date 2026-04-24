# Deadlink-Hunter-Website🕵️
[![GitHub Stars](https://img.shields.io/github/stars/Deadlink-Hunter/Broken-Link-Website?style=social&label=星标)](https://github.com/Deadlink-Hunter/Broken-Link-Website/stargazers)
[![许可证: MIT](https://img.shields.io/badge/许可证-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployment](https://github.com/Deadlink-Hunter/Broken-Link-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Deadlink-Hunter/Broken-Link-Website/actions/workflows/deploy.yml)
Deadlink-Hunter 是一个开源项目，旨在查找 GitHub 仓库中的失效链接（未来将支持其他平台）。
本项目的目标是帮助维护者保持文档的整洁、可靠，为读者提供无挫折的阅读体验。

Deadlink Hunter Website 是该网站的前端部分。

您还可以查看 [Broken-Link-Checker](https://github.com/Deadlink-Hunter/Broken-Link-Checker)，这是项目的后端部分，用于检查链接是否失效。
此外，请查看 [Deadlink-Crawler](https://github.com/Deadlink-Hunter/Deadlink-crawler)，这是一个用于高效爬取和分析链接的新仓库。

该项目的创建灵感源于回馈开源社区的愿望，欢迎所有人参与。

这是网站期望的总体设计，由 Lovable 生成，仅供参考灵感。

<img width="1600" height="650" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

您可以查看使用 base44 创建的[更精细的界面](https://link-guard-191fc128.base44.app)作为初始灵感来源。

## 目录
- [为什么做这个项目](#为什么做这个项目)
- [如何贡献](#如何贡献)
- [贡献者](#贡献者)
- [Docker 配置](#docker-配置)
- [Mantine Vite 模板](#mantine-vite-模板)
- [功能特性](#功能特性)
- [pnpm 脚本](#pnpm-脚本)
- [构建和开发脚本](#构建和开发脚本)
  - [测试脚本](#测试脚本)
  - [其他脚本](#其他脚本)
---

## 为什么做这个项目

文档是大多数开发者探索项目时的第一个入口。
然而，README 文件和文档中经常包含过时或失效的链接 —— 即使在大型、维护良好的仓库中也是如此。

但不是已经有失效链接检查器了吗？
确实有 —— 但它们大多数看起来不够美观，用户界面不友好，而且失效链接检测并未涵盖所有情况（例如，localhost:4000 实际上并未失效）。

---

## 如何贡献

我们欢迎并非常感谢您的贡献！

贡献步骤：

1.  **Fork** 此仓库到您自己的 GitHub 账户。
2.  在本地**克隆**您的 fork：
    ```bash
    git clone https://github.com/<your-username>/Deadlink-Hunter.git
    cd Deadlink-Hunter
    ```
3. （可选）从此[链接](https://pnpm.io/installation)安装 pnpm 包管理器。
4.  使用 **pnpm** 安装依赖（请勿使用 npm 或 yarn）：
    ```bash
    pnpm install
    ```
5. 运行此项目：
    ```bash
    pnpm run dev
    ```
6.  为您的功能或修复创建新分支：
    ```bash
    git checkout -b my-feature
    ```
7.  进行更改并使用清晰的信息提交。
8.  将您的分支推送到您的 fork：
    ```bash
    git push origin my-feature
    ```
9.  从您仓库的分支向原始仓库的 `main` 分支创建 **Pull Request**。

⚠️ 注意：完全由 AI 生成且未经人工审核的 PR 将不被接受。

---


## Docker 配置

本项目包含 Docker 支持，便于部署和开发。您可以通过两种方式使用 Docker 运行应用程序：

### 方式 1：使用 Docker Compose（推荐）

运行应用程序最简单的方式是使用 Docker Compose：

```bash
# 构建并启动应用程序
docker-compose up --build

# 或在后台模式下运行
docker-compose up --build -d
```

应用程序将在 `http://localhost` 上运行

停止应用程序：
```bash
docker-compose down
```

### 方式 2：直接使用 Docker

您也可以直接构建和运行 Docker 容器：

```bash
# 构建 Docker 镜像
docker build -t deadlink-hunter .

# 运行容器
docker run -p 80:6006 deadlink-hunter
```

应用程序将在 `http://localhost` 上运行

### Docker 配置说明

- **端口**：应用程序在容器内的 `6006` 端口运行，并映射到主机的 `80` 端口
- **Web 服务器**：使用 nginx 为构建的应用程序提供服务
- **构建流程**：多阶段构建，安装依赖、构建应用并使用 nginx 提供服务
- **基础镜像**：构建阶段基于 `node:20-alpine`，运行时基于 `nginx:1.27-alpine`

---

## Mantine Vite 模板

本项目基于 Mantine Vite 模板。

## 功能特性

此模板包含以下功能：

- [PostCSS](https://postcss.org/) 配合 [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) 配置配合 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint 配置配合 [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

---

## pnpm 脚本

## 构建和开发脚本

- `dev` – 启动开发服务器
- `build` – 构建应用程序的生产版本
- `preview` – 本地预览生产构建

### 测试脚本

- `typecheck` – 检查 TypeScript 类型
- `lint` – 运行 ESLint
- `prettier:check` – 使用 Prettier 检查文件
- `vitest` – 运行 vitest 测试
- `vitest:watch` – 启动 vitest 监视模式
- `test` – 运行 `vitest`、`prettier:check`、`lint` 和 `typecheck` 脚本

### 其他脚本

- `storybook` – 启动 storybook 开发服务器
- `storybook:build` – 将生产版 storybook 构建到 `storybook-static`
- `prettier:write` – 使用 Prettier 格式化所有文件


## 贡献者

感谢所有帮助改进本项目的优秀贡献者！🎉

<a href="https://github.com/Deadlink-Hunter/Broken-Link-Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Deadlink-Hunter/Broken-Link-Website" alt="Contributors" />
</a>

---
