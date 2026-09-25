# ⚛️ Frontend (React + TypeScript)

Internal business dashboard for clinic operators, employees, and admins.

## 📂 Structure

```
frontend/
├── 📦 package.json               # Dependencies (sample list)
├── ⚡ vite.config.ts             # Vite + TanStack Router plugin
├── 🟦 tsconfig.json              # TypeScript config + ~/* path alias
├── 🌐 index.html                # Root HTML template
├── 📁 public/                   # Static assets
└── 📁 src/
    ├── 🚪 main.tsx              # App bootstrap (providers, router)
    ├── 🏠 App.tsx               # Root component
    ├── 🧭 router.tsx            # TanStack Router instance
    ├── 🗺️ routeTree.gen.ts      # Generated route tree
    ├── 🌍 i18n.ts               # i18next configuration
    ├── 📁 routes/               # Route components
    │   ├── _authenticated.tsx   # Auth guard layout
    │   └── ...
    ├── 📁 features/             # Feature modules (sign-in, kanban, etc.)
    │   ├── 🔑 auth/
    │   ├── 📌 kanban/
    │   └── ...
    ├── 📁 entities/             # Domain entities (user, clinic, etc.)
    │   ├── 👤 user/
    │   ├── 🏥 clinics/
    │   ├── 👨‍⚕️ employee/
    │   ├── 💳 customer/
    │   ├── 🔔 notifications/
    │   └── 📌 kanban/
    ├── 📁 widgets/              # Composite UI blocks (header, sidebar)
    ├── 📁 shared/               # Cross-cutting utilities
    │   ├── 🧬 model/            # Types & interfaces
    │   ├── ⚙️ lib/              # API client, helpers
    │   └── 🎨 ui/               # Reusable components
    ├── 📁 pages/                # Top-level pages
    └── 📁 app/                  # App-level providers
```

## 🛠️ Stack

| Layer | Tech |
| --- | --- |
| Framework | ⚛️ React 18 |
| Bundler | ⚡ Vite |
| Router | 🗺️ TanStack Router (file-based) |
| State / Cache | 🔄 TanStack Query + Zustand |
| UI Kit | 📋 Ant Design |
| i18n | 🌍 react-i18next |
| Forms | 📝 Ant Design Form |
| Tests | 🧪 Vitest + Playwright |

> ⚠️ All `features/*`, `entities/*` business logic, and `views` remain in
> the private repo. Only structural placeholders + config files exposed here.
