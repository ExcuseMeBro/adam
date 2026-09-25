# 🏆 ADAM — Authentication Module Sample

> **Partial code sample** showcasing the authentication flow of the **ADAM** platform
> (a clinic & loan management system built by Team ADAM for IT Park Startup Base).

![Status](https://img.shields.io/badge/status-sample-blueviolet?style=for-the-badge)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20TanStack%20Router%20%7C%20Ant%20Design-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Scope](https://img.shields.io/badge/scope-auth%20only-success?style=for-the-badge)
![Code%20Lines](https://img.shields.io/badge/code%20size-~250%20lines-orange?style=for-the-badge)

---

## 📖 About This Repository

This repository contains a **focused, partial code sample** of the **authentication module**
from the ADAM platform. It is intended to demonstrate **team access to a relevant part of the
codebase** for IT Park Startup Base application verification — *not* a full project dump.

The complete ADAM platform lives in a private Forgejo repository and includes the
landing site, business dashboard, mobile app, QR generator, main backend and bots.
What you see here is the **sign-in & route-guard layer only**.

> ⚠️ **Note:** All sensitive data (`.env`, API keys, secrets, tokens, infrastructure configs)
> has been intentionally excluded. The code here is **safe to share publicly**.

---

## ✨ What's Inside

| File | Purpose | Lines |
| --- | --- | --- |
| 📄 [`auth/types.ts`](./auth/types.ts) | `User` interface — shared auth model | 14 |
| ⚙️ [`auth/utils.ts`](./auth/utils.ts) | `isAuthenticated()` — session check via `/accounts/profile/` | 14 |
| 📝 [`auth/sign-in/type.ts`](./auth/sign-in/type.ts) | `SignInFieldType` / `SignInResponse` DTOs | 14 |
| 🔑 [`auth/sign-in/index.tsx`](./auth/sign-in/index.tsx) | Sign-in form with reCAPTCHA v3 + JWT storage | ~150 |
| 🚧 [`routes/_authenticated.tsx`](./routes/_authenticated.tsx) | Route guard + role-based redirect | 44 |

---

## 🧠 How The Auth Flow Works

```
👤 User opens /dashboard
        │
        ▼
🛡️  _authenticated route guard fires
        │
        ├─ auth.isAuthenticated === false  ──►  🔀 redirect to /auth/sign-in
        │
        └─ auth.isAuthenticated === true   ──►  ✅ render <Outlet/>
                                                  ├─ check role (operator / admin)
                                                  └─ redirect to allowed home if needed

👤 User submits sign-in form
        │
        ▼
🤖  Google reCAPTCHA v3 token requested (action="login")
        │
        ▼
📡  POST /accounts/login/  →  { access, refresh } JWT pair
        │
        ▼
💾  Tokens stored  ──►  query cache invalidated
        │
        ▼
🏠  router.navigate({ to: "/" })
```

---

## 🛠️ Tech Stack

| Layer | Technology | Emoji |
| --- | --- | --- |
| 🖼️ UI Framework | **React 18** | ⚛️ |
| 🧭 Routing | **TanStack Router** (file-based) | 🗺️ |
| 📋 Forms | **Ant Design** `Form` | 📋 |
| 🔄 Data fetching | **TanStack Query** | 🔄 |
| 🌍 i18n | **react-i18next** | 🌐 |
| 🤖 Bot protection | **Google reCAPTCHA v3** | 🤖 |
| 🎨 Styling | **Tailwind CSS** + AntD | 🎨 |
| 🔐 Auth | **JWT** (access + refresh) | 🔐 |
| 🧰 Language | **TypeScript** | 🟦 |

---

## 🚀 Quick Look

### 🔑 Sign-in component (excerpt)

```tsx
const onFinish: FormProps<SignInFieldType>["onFinish"] = async (data) => {
  const recaptchaToken = await executeRecaptcha("login");

  const res = await apiClient.post<SignInResponse>("/accounts/login/", {
    ...data,
    recaptcha_token: recaptchaToken,
  });

  setAccessToken(res.data.access);
  setRefreshToken(res.data.refresh);
  queryClient.invalidateQueries({ queryKey: [UserQueryKeys.Profile] });

  router.navigate({ to: "/" });
};
```

### 🛡️ Route guard (excerpt)

```tsx
beforeLoad: ({ context: { auth, hasRole }, location }) => {
  if (!auth.isAuthenticated) {
    throw redirect({ to: "/auth/sign-in" });
  }
  if (hasRole(RoleEnum.OPERATOR) && !operatorAllowed) {
    throw redirect({ to: OPERATOR_HOME });
  }
}
```

---

## 📂 Repository Structure

```
awwards/
├── 📁 auth/
│   ├── 📄 types.ts              # User model
│   ├── ⚙️ utils.ts              # isAuthenticated()
│   └── 📁 sign-in/
│       ├── 📝 type.ts           # Sign-in DTOs
│       └── 🔑 index.tsx         # Sign-in component
├── 📁 routes/
│   └── 🚧 _authenticated.tsx   # Auth route guard
├── 🙈 .gitignore                # Excludes secrets / build artifacts
└── 📖 README.md                 # You are here
```

---

## 🎯 Purpose

| ✅ Intended for | ❌ Not intended for |
| --- | --- |
| Startup Base team verification | Production deployment |
| Code-access proof for reviewers | Architectural overview of full platform |
| Demonstrating auth expertise | Backend / mobile / landing samples |

---

## 👥 Team ADAM

Built with ❤️ by **Team ADAM** — building a digital platform that connects
patients, clinics, and loan services across Uzbekistan 🇺🇿.

---

## 📜 License

This sample is shared for **verification purposes only**.
The full ADAM platform source code is private and proprietary.
