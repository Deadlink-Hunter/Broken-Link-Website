<a id="top-btn"></a>

# Deadlink-Hunter-Website🕵️

[![GitHub Stars](https://img.shields.io/github/stars/Deadlink-Hunter/Broken-Link-Website?style=social)](https://github.com/Deadlink-Hunter/Broken-Link-Website/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployment](https://github.com/Deadlink-Hunter/Broken-Link-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/Deadlink-Hunter/Broken-Link-Website/actions/workflows/deploy.yml)

## Prefer a different language?

This README is available in multiple languages.
Click below to switch:

- 🇨🇳 [简体中文 (Simplified Chinese)](README-ZH-CN.md)
- 🇧🇷 [Português Brasileiro](README-PT-BR.md)
- 🇬🇧 [English](../README.md)

Deadlink-Hunter Github repolarındaki bozulmuş linkleri bulması için tasarlanmış açık kaynak bir projedir ( diğer platformlar için gelecekte destek gelecektir ).
Amaç bakımı yapanların dokümantasyonu temiz, güvenilir ve bıktırmayan bir şekilde okurlara sunmasında yardımcı olmaktır.

Deadlink Hunter Website websitenin frontendidir.

Ayrıca bakabilirsiniz [Broken-Link-Checker](https://github.com/Deadlink-Hunter/Broken-Link-Checker), Bu linklerin kırık olup olmadığına bakan projenin backendidir.
Üstüne buna da bakabilirsiniz [Deadlink-Crawler](https://github.com/Deadlink-Hunter/Deadlink-crawler), linkleri efektif bir biçimde tarayan ve analiz eden yeni bir repository.

Proje açık kaynak topluluğuna katkıda bulunma amacıyla ortaya çıktı, herkes davetli.

Bu Lovable tarafından oluşturulan ilham vermek için yapılmış olan, websitesi için istenen genel tasarım örneğidir.

<img style="object-fit: contain;" width="1600" height="650" alt="image" src="https://github.com/user-attachments/assets/6cd143f2-40ec-4b9f-8f99-92d82d1e05c2" />

Dağıtıma çıkmış websitesini burdan görebilirsiniz: [Deadlink-Hunter Website](https://deadlink-hunter.github.io/Broken-Link-Website/)

Kontrol edebilirsiniz [more elaborated ui](https://link-guard-191fc128.base44.app) ilk ilham kaynağı olarak base44 ile oluşturuldu.

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

---

## ⚠️ Önemli Gereklilikler

**Lütfen Not Edin:** Bu repository Deadlink-Hunter projesinin **Frontend**'ini (Kullanıcı Arayüzü) içerir.

Tarayıcı özelliklerini tam anlamıyla kullanabilmek için, Backend sunucusunu yerel olarak çalıştırmak **ZORUNDASINIZ** (ya da dağıtıma çıkmış bir instance'a bağlanmalısınız). Frontend, link kontrolünü gerçekleştirmek için backend ile iletişim halindedir.

**Backend'i Burdan Al:** [Broken-Link-Checker Repository](https://github.com/Deadlink-Hunter/Broken-Link-Checker)

---

## İçindekiler

- [Neden](#the-why)
- [Katkı Sağlamak](#contributing)
- [Katkı Sağlayanlar](#contributors)
- [Docker Kurulumu](#docker-setup)
- [Mantine Vite taslağı](#mantine-vite-template)
- [Özellikler](#features)
- [pnpm scripts](#pnpm-scripts)
- [Build and dev scripts](#build-and-dev-scripts)
  - [Testing scripts](#testing-scripts)
  - [Other scripts](#other-scripts)

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## Neden

Dokümantasyon, projeyi keşfeden çoğu geliştirici için ilk giriş noktasıdır.
Buna rağmen, README dosyaları ve belgeleri genelde eskimiş ya da bozulmuş linkler içerir. Bu büyük, bakımı iyi yapılan repositoryler için bile geçerlidir.

Fakat bozuk link kontrolcüleri halihazırda yok mu?
Var, fakat çoğunluğu iyi gözükmüyor, Kullanıcı arayüzleri kullanıcı dostu değil ve bozuk link tespitleri her durumu da kapsamıyor (örneğin, localhost:4000 gerçekten bozuk değil).

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## Katkı Sağlamak

Katkılarınız memnuniyetle ve büyük takdirle karşılanır!

Katkı sağlamak için:

1.  Bu repository'i kendi GitHub hesabınıza **Fork**'layın.
2.  Fork'unuzu yerelde **Clone**'layın:

    ```bash
    git clone https://github.com/<your-username>/Broken-Link-Website.git
    cd Broken-Link-Website

    ```

3.  (Tercihe Bağlı) Buradan pnpm paket yöneticisi yükleyin [link](https://pnpm.io/installation).
4.  PNPM kullanarak bağımlılıkları yükleyin **pnpm** (lütfen npm ya da yarn kullanmayın):
    ```bash
    pnpm install
    ```
5.  Projeyi çalıştırın:
    ```bash
    pnpm run dev
    ```
6.  Kendi özelliğiniz ya da çözümünüz için yeni bir branch oluşturun:
    ```bash
    git checkout -b my-feature
    ```
7.  Değişimlerinizi yapın ve açık bir mesajla commitleyin.
8.  Branch'inizi Fork'unuza pushlayın:
    ```bash
    git push origin my-feature
    ```
9.  Repository branch'inizden, orijinal repository'nin `main` branch'ine **Pull Request** oluşturun.

⚠️ Dikkat: Tamamen yapay zeka tarafından oluşturulmuş ve insan kontrolünden geçmemiş PR'lar kabul edilmeyecektir.

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## Çevre Değişkenleri

Bu proje uygulamayı çalıştırmak için gerekli çevre değişkenlerinin listesini içeren `.env.example` dosyası içerir.

**Projeyi çalıştırmadan önce**, örneğe göre yerel `.env` dosyası oluşturun.
Aşağıdaki komutu kullanarak hızlıca kopyalayabilirsiniz:

```bash
# macOS / Linux
cp .env.example .env

# PowerShell
Copy-Item .env.example .env
```

### Backend Bağlantısı Konfigürasyonu

`.env` dosyası değişkenini içerir:

- **VITE_API_BASE_URL** — backend API için ana URL.  
  **Varsayılan:** `http://localhost:3000`

backend sunucunun bu port üzerinde çalıştığından emin ol, ya da değeri backend konfigürasyonunla eşleşecek biçimde güncelle.

## Docker Kurulumu

Bu proje Docker desteği içerir kolay dağıtım ve geliştirme için. Uygulamayı, Docker kullanarak iki şekilde çalıştırabilirsiniz:

### Seçenek 1: Docker Compose Kullanımı (Önerilen)

Uygulamayı çalıştırmak için en kolay yol Docker Compose kullanmaktır: 

```bash
# Build and start the application
docker-compose up --build

# Or run in detached mode (background)
docker-compose up --build -d
```

Uygulama `http://localhost` adresinde erişilebilir olacaktır.

Uygulamayı durdurmak için:

```bash
docker-compose down
```

### Seçenek 2: Docker'ı direkt kullanmak

Ayrıca Docker konteynırını direkt build alıp çalıştırabilirsiniz:

```bash
# Build the Docker image
docker build -t deadlink-hunter .

# Run the container
docker run -p 80:6006 deadlink-hunter
```

Uygulama `http://localhost` adresinde erişilebilir olacaktır.

### Docker Konfigürasyonu

- **Port**: Uygulama konteynırın içinde `6006` portunda çalışır ve host makinesinde `80` portuna bağlanır.
- **Web Sunucu**: built edilmiş uygulamayı sunmak için nginx kullanır.
- **Build İşlemi**: Bağımlılıkları yükleyen, uygulamayı build alan ve nginx ile sunan çok aşamalı build işlemi.
- **Base Image**: build aşaması için `node:20-alpine` üzerine ve runtime aşaması için `nginx:1.27-alpine` üzerine built alınmış.

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## API & Postman Koleksiyonu

Backend bozuk bağlantıları bulmak için bir REST API sunmaktadır.

API'yi yerel olarak test etmenize yardımcı olmak için, Swagger'ın dahili dokümantasyonuna dayanarak bir Postman koleksiyonu oluşturduk.

### 🔗 Postman Koleksiyonu Nasıl Kullanılır

1. Aç [Postman](https://www.postman.com/)
2. Tıkla **Import**
3. Seç **File** ve upload et:

   `./postman/broken-link-checker.postman_collection.json`

> [Dosyayı direkt indirmek için buraya tıkla](./postman/brokenlink-checker.postman_collection.json)

Backend sunucunun `http://localhost:3000` üzerinde çalıştığından emin ol. (ya da eğer gerekiyorsa Postman temel URL'ini ayarla).

## Mantine Vite taslağı

Bu proje Mantine Vite taslağına dayanmaktadır.

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>
## Özellikler

Bu taslak şu özelliklerle gelir:

- [PostCSS](https://postcss.org/) ile [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) kurulumu ile [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint kurulumu ile [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## pnpm scripts

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>
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

<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

## Katkı Sağlayanlar
Bu projeyi daha iyi hale getirmemize katkı sağlayan bütün muhteşem katkı sağlayıcılarına teşekkürler! 🎉

<a href="https://github.com/Deadlink-Hunter/Broken-Link-Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Deadlink-Hunter/Broken-Link-Website" alt="Contributors" />
</a>
<p align="left"><a href="#top-btn">Sayfanın başına dön</a></p>

