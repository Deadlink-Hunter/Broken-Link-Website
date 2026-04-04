<a id="top-btn"></a>

# Deadlink-Hunter-Website🕵️
[![GitHub Stars](https://img.shields.io/github/stars/Deadlink-Hunter/Broken-Link-Website?style=social)](https://github.com/Deadlink-Hunter/Broken-Link-Website/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Prefere um idioma diferente?

Este README está disponível em múltiplos idiomas.
Clique abaixo para alternar:

  - 🇺🇸 [English (Inglês)](https://github.com/Deadlink-Hunter/Broken-Link-Website/blob/main/README.md)
  - 🇨🇳 [简体中文 (Chinês Simplificado)](README-ZH-CN.md)

Deadlink-Hunter é um projeto open-source projetado para encontrar links quebrados em repositórios do GitHub (com suporte futuro para outras plataformas).
O objetivo é ajudar mantenedores a manter sua documentação limpa, confiável e livre de frustrações para os leitores.

Deadlink Hunter Website é o frontend do site.

Você também pode conferir o [Broken-Link-Checker](https://github.com/Deadlink-Hunter/Broken-Link-Checker), que é o backend do projeto responsável por verificar se um link está quebrado ou não.
Além disso, confira o [Deadlink-Crawler](https://github.com/Deadlink-Hunter/Deadlink-crawler), um novo repositório para rastrear (crawl) e analisar links de forma eficiente.

O projeto foi inspirado como uma forma de retribuir à comunidade open source, e todos são bem-vindos.

Este é o design geral desejado para o site, gerado pelo Lovable, apenas para servir de inspiração.

<img style="object-fit: contain;" width="1600" height="650" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

Você pode conferir a [interface mais elaborada](https://link-guard-191fc128.base44.app) que foi criada com base44 como inspiração inicial.

<img width="434" height="667" alt="image" src="https://github.com/user-attachments/assets/6ae53712-a40a-4e33-bbb5-fd6445c3aec2" />

Para ver a interface, faça login.

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

-----

## ⚠️ Pré-requisitos Importantes

**Atenção:** Este repositório contém o **Frontend** (Interface de Usuário) do projeto Deadlink-Hunter.

Para utilizar totalmente as funcionalidades de scanner, você **DEVE** rodar o servidor Backend localmente (ou conectar-se a uma instância implantada). O frontend se comunica com o backend para realizar a verificação real dos links.

**Obtenha o Backend aqui:** [Repositório Broken-Link-Checker](https://github.com/Deadlink-Hunter/Broken-Link-Checker)

-----

## Índice

  - [O Porquê](#o-porquê)
  - [Contribuindo](#contribuindo)
  - [Contribuidores](#contribuidores)
  - [Configuração Docker](#configuração-docker)
  - [Template Mantine Vite](#template-mantine-vite)
  - [Funcionalidades](#funcionalidades)
  - [Scripts pnpm](#scripts-pnpm)
  - [Scripts de Build e Dev](#scripts-de-build-e-dev)
      - [Scripts de Teste](#scripts-de-teste)
      - [Outros Scripts](#outros-scripts)

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## O Porquê

A documentação é o primeiro ponto de entrada para a maioria dos desenvolvedores que exploram um projeto.
No entanto, arquivos README e documentações frequentemente contêm links desatualizados ou quebrados – mesmo em repositórios grandes e bem mantidos.

Mas já não existem verificadores de links quebrados?
Existem — mas a maioria deles não tem uma boa aparência, suas interfaces (UIs) não são amigáveis ao usuário, e a detecção de links quebrados não cobre todos os casos (por exemplo, localhost:4000 não é realmente quebrado).

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Contribuindo

Contribuições são bem-vindas e muito apreciadas!

Para contribuir:

1.  Faça um **Fork** deste repositório para sua própria conta GitHub.

2.  Faça um **Clone** do seu fork localmente:

    ```bash
    git clone https://github.com/<seu-usuario>/Broken-Link-Website.git
    cd Broken-Link-Website
    ```

3.  (Opcional) Instale o gerenciador de pacotes pnpm através deste [link](https://pnpm.io/installation).

4.  Instale as dependências usando **pnpm** (por favor, não use npm ou yarn):

    ```bash
    pnpm install
    ```

5.  Rode este projeto:

    ```bash
    pnpm run dev
    ```

6.  Crie uma nova branch para sua feature ou correção:

    ```bash
    git checkout -b minha-feature
    ```

7.  Faça suas alterações e realize o commit com mensagens claras.

8.  Faça o Push da sua branch para o seu fork:

    ```bash
    git push origin minha-feature
    ```

9.  Crie um **Pull Request** da branch do seu repositório para a branch `main` do repositório original.

⚠️ Atenção: PRs que sejam totalmente gerados por IA e não verificados por um humano não serão aceitos.

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Environment Variables

Este projeto inclui um arquivo `.env.example` no repositório que lista as variáveis de ambiente (environment variables) necessárias para rodar o app.

**Antes de rodar o projeto**, crie um arquivo local `.env` baseado no exemplo.
Você pode copiá-lo rapidamente usando o comando abaixo:

```bash
# macOS / Linux
cp .env.example .env

# PowerShell
Copy-Item .env.example .env
```

### Configurar Conexão com Backend

O arquivo `.env` inclui a variável:

  - **VITE\_API\_BASE\_URL** — a URL base para a API backend.  
    **Padrão:** `http://localhost:3000`

Certifique-se de que seu servidor backend esteja rodando nesta porta, ou atualize o valor para corresponder à sua configuração de backend.

## Configuração Docker

Este projeto inclui suporte a Docker para facilitar o deployment e desenvolvimento. Você pode rodar a aplicação usando Docker de duas maneiras:

### Opção 1: Usando Docker Compose (Recomendado)

A maneira mais fácil de rodar a aplicação é usando Docker Compose:

```bash
# Buildar e iniciar a aplicação
docker-compose up --build

# Ou rodar em modo detached (segundo plano)
docker-compose up --build -d
```

A aplicação estará disponível em `http://localhost`

Para parar a aplicação:

```bash
docker-compose down
```

### Opção 2: Usando Docker diretamente

Você também pode buildar e rodar o container Docker diretamente:

```bash
# Buildar a imagem Docker
docker build -t deadlink-hunter .

# Rodar o container
docker run -p 80:6006 deadlink-hunter
```

A aplicação estará disponível em `http://localhost`

### Configuração Docker

  - **Porta**: A aplicação roda na porta `6006` dentro do container e é mapeada para a porta `80` na sua máquina host
  - **Servidor Web**: Usa nginx para servir a aplicação buildada
  - **Processo de Build**: Build multi-stage que instala dependências, builda o app, e o serve com nginx
  - **Imagem Base**: Construída sobre `node:20-alpine` para o estágio de build e `nginx:1.27-alpine` para o runtime

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## API & Postman Collection

O backend expõe uma API REST para verificação de links quebrados.

Geramos uma coleção Postman baseada na documentação interna Swagger para ajudar você a testar a API localmente.

### 🔗 Como Usar a Postman Collection

1.  Abra o [Postman](https://www.postman.com/)

2.  Clique em **Import**

3.  Selecione **File** e faça o upload de:

    `./postman/broken-link-checker.postman_collection.json`

> [Clique aqui para baixar o arquivo diretamente](./postman/brokenlink-checker.postman_collection.json)

Certifique-se de que seu servidor backend esteja rodando em `http://localhost:3000` (ou ajuste a URL base no Postman se necessário).

## Template Mantine Vite

Este projeto é baseado no template Mantine Vite.

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Funcionalidades

Este template vem com as seguintes funcionalidades:

  - [PostCSS](https://postcss.org/) com [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Storybook](https://storybook.js.org/)
  - [Vitest](https://vitest.dev/) configurado com [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - ESLint Configurado com [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Scripts pnpm

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Scripts de Build e Dev

  - `dev` – inicia servidor de desenvolvimento
  - `build` – builda a versão de produção do app
  - `preview` – pré-visualiza localmente o build de produção

### Scripts de Teste

  - `typecheck` – verifica tipos TypeScript
  - `lint` – roda ESLint
  - `prettier:check` – verifica arquivos com Prettier
  - `vitest` – roda testes vitest
  - `vitest:watch` – inicia watch do vitest
  - `test` – roda os scripts `vitest`, `prettier:check`, `lint` e `typecheck`

### Outros Scripts

  - `storybook` – inicia servidor de desenvolvimento storybook
  - `storybook:build` – builda bundle de produção do storybook para `storybook-static`
  - `prettier:write` – formata todos os arquivos com Prettier

<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>

## Contribuidores

Obrigado a todos os incríveis contribuidores que ajudaram a tornar este projeto melhor! 🎉

<a href="https://github.com/Deadlink-Hunter/Broken-Link-Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Deadlink-Hunter/Broken-Link-Website" alt="Contributors" />
</a>
<p align="left"><a href="#top-btn">Voltar ao topo da página</a></p>
