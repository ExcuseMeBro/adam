# 🏆 ADAM Platform — Partial Project Sample

> **Partial project sample** for IT Park Startup Base team-verification.
> Demonstrates **team access to the project structure** across the ADAM platform.

![Status](https://img.shields.io/badge/status-sample-blueviolet?style=for-the-badge)
![Scope](https://img.shields.io/badge/scope-structure%20only-success?style=for-the-badge)
![Components](https://img.shields.io/badge/components-3-blue?style=for-the-badge)
![Logic](https://img.shields.io/badge/business%20logic-excluded-red?style=for-the-badge)

---

## 📖 About This Repository

This repository contains a **partial structural sample** of the **ADAM platform** —
a clinic & loan management system built by Team ADAM for IT Park Startup Base.

It is intended to demonstrate **team access to the project structure** for
application verification — *not* a full project dump. The complete ADAM
platform lives in a **private Forgejo** repository and includes:

- 🐍 Django REST backend
- ⚛️ React/TypeScript business dashboard
- 📱 Flutter mobile application (iOS + Android)
- 🌍 Nuxt landing site
- 🤖 Telegram bots
- 🔲 QR generator service

What you see here is the **folder layout + minimal config files** for
**three core components**, with **no business logic exposed**.

> ⚠️ **Note:** All sensitive data — `.env`, API keys, secrets, tokens,
> database schemas, migrations, internal documentation — has been
> intentionally excluded. The exposed files are **safe to share publicly**.

---

## 🧱 Components in This Sample

| Component | Folder | Stack | Purpose |
| --- | --- | --- | --- |
| 🐍 Backend | [`backend/`](./backend/) | Django + DRF | REST API server |
| ⚛️ Frontend | [`frontend/`](./frontend/) | React + TypeScript + Vite | Business dashboard |
| 📱 Mobile | [`mobile/`](./mobile/) | Flutter + Dart | Patient / operator app |

Each component folder contains its own `README.md` with the full sub-structure.

---

## 📂 Repository Structure

```
awwards/
├── 📖 README.md                 # You are here
├── 🙈 .gitignore                # Excludes secrets / build artifacts
├── 🐍 backend/
│   ├── 🎯 manage.py             # Django CLI entry point (placeholder)
│   ├── 📦 requirements.txt      # Python dependencies (sample list)
│   ├── 📁 apps/
│   │   ├── 👤 accounts/         # User, OTP, profile, JWT
│   │   ├── 📋 applications/     # Loan applications
│   │   ├── 🏥 clinic/           # Clinic & doctor management
│   │   ├── 🛠️ common/           # Shared base models & utils
│   │   ├── 📊 dashboard/        # Analytics endpoints
│   │   ├── 🤝 guarantor/        # Guarantor logic
│   │   ├── 🔌 integrations/     # External services (SMS, payment)
│   │   ├── 📌 kanban/           # Kanban workflow
│   │   ├── 🔔 notifications/    # Push & in-app notifications
│   │   ├── 💳 payments/         # Payment processing
│   │   └── 📈 scoring/          # Credit scoring engine
│   ├── 🧱 core/                 # Settings, middleware, wsgi
│   ├── 🌐 locale/               # i18n files
│   ├── 🖼️ static/               # Static assets
│   └── 🎨 templates/            # Server-rendered templates
├── ⚛️ frontend/
│   ├── 📦 package.json          # Dependencies (sample list)
│   ├── ⚡ vite.config.ts        # Vite + TanStack Router
│   ├── 🟦 tsconfig.json         # TypeScript config
│   ├── 🌐 index.html            # Root HTML template
│   ├── 📁 public/               # Static assets
│   └── 📁 src/
│       ├── 🚪 main.tsx          # Bootstrap (placeholder)
│       ├── 🏠 App.tsx           # Root component (placeholder)
│       ├── 🧭 router.tsx        # TanStack Router instance
│       ├── 🌍 i18n.ts           # i18next config
│       ├── 📁 routes/           # Route components & guards
│       ├── 📁 features/         # Feature modules
│       ├── 📁 entities/         # Domain entities
│       ├── 📁 widgets/          # Composite UI blocks
│       ├── 📁 shared/           # Cross-cutting utilities
│       ├── 📁 pages/            # Top-level pages
│       └── 📁 app/              # App-level providers
└── 📱 mobile/
    ├── 📦 pubspec.yaml          # Flutter dependencies (sample list)
    ├── 🧹 analysis_options.yaml # Lint rules
    └── 📁 lib/
        ├── 🚀 main.dart         # App entry point (placeholder)
        ├── 🧱 core/             # Cross-cutting infrastructure
        │   ├── 🌐 network/      # Dio client & interceptors
        │   ├── 🎨 theme/        # Colors, typography
        │   ├── 🧭 navigation/   # Route definitions
        │   ├── 🚦 router/       # GoRouter config
        │   ├── 💾 storage/      # Secure + shared prefs
        │   ├── ⚙️ services/     # Push, analytics
        │   ├── 🛠️ utils/        # Helpers & extensions
        │   ├── 📦 models/       # Shared DTOs
        │   └── 🎨 widgets/      # Reusable widgets
        ├── 📁 features/         # Feature modules
        │   ├── 🔑 auth/         # Login, OTP, registration
        │   ├── 🏠 home/         # Dashboard
        │   ├── 👤 profile/      # User profile
        │   ├── 💰 loan/         # Loan applications
        │   ├── 📷 qr_scanner/   # QR scanning
        │   ├── 🔔 notification/ # Push notifications
        │   ├── 🪪 session/      # Active sessions
        │   ├── 🚀 onboarding/   # First-run onboarding
        │   └── 💦 splash/       # Splash screen
        └── 🌍 l10n/             # Localizations
```

---

## 🛠️ Tech Stack Overview

### 🐍 Backend
| Layer | Technology | Emoji |
| --- | --- | --- |
| Framework | Django 4.2 + DRF | 🟢 |
| Auth | SimpleJWT + OTP | 🔐 |
| Database | PostgreSQL | 🐘 |
| Tasks | Celery + Redis | 🟥 |
| Docs | drf-yasg (Swagger) | 📜 |
| Server | Gunicorn + Nginx | 🦄 |

### ⚛️ Frontend
| Layer | Technology | Emoji |
| --- | --- | --- |
| Framework | React 18 | ⚛️ |
| Bundler | Vite | ⚡ |
| Router | TanStack Router | 🗺️ |
| State | TanStack Query + Zustand | 🔄 |
| UI Kit | Ant Design | 📋 |
| Forms | AntD Form | 📝 |
| i18n | react-i18next | 🌍 |
| Tests | Vitest + Playwright | 🧪 |

### 📱 Mobile
| Layer | Technology | Emoji |
| --- | --- | --- |
| Framework | Flutter 3.22+ | 🐦 |
| Language | Dart 3.4+ | 🎯 |
| State | Riverpod | 🔄 |
| Routing | GoRouter | 🧭 |
| Network | Dio | 🌐 |
| Storage | flutter_secure_storage | 🔒 |
| QR | mobile_scanner | 📷 |
| i18n | intl + flutter_localizations | 🌍 |

---

## 🎯 Purpose

| ✅ Intended for | ❌ Not intended for |
| --- | --- |
| Startup Base team verification | Production deployment |
| Code-access proof for reviewers | Architectural overview of full platform |
| Demonstrating team expertise | Backend / mobile / landing business logic |
| Showing project structure | Reusable as a starter template |

---

## 🔒 What's NOT in This Repo

To keep the public sample safe and focused, the following are excluded:

- ❌ `.env` files, secrets, API keys
- ❌ Database migrations & schema dumps
- ❌ Business logic, algorithms, scoring formulas
- ❌ Internal documentation, ADRs, RFCs
- ❌ CI/CD pipelines, deployment configs
- ❌ Test fixtures with real user data
- ❌ Landing site, QR generator, Telegram bots
- ❌ Full mobile features, full backend views

---

## 👥 Team ADAM

Built with ❤️ by **Team ADAM** — building a digital platform that connects
patients, clinics, and loan services across Uzbekistan 🇺🇿.

---

## 📜 License

This sample is shared for **verification purposes only**.
The full ADAM platform source code is private and proprietary.
