# 📱 Mobile (Flutter)

Cross-platform mobile app for patients & operators — iOS and Android.

## 📂 Structure

```
mobile/
├── 📦 pubspec.yaml              # Flutter dependencies (sample list)
├── 🧹 analysis_options.yaml     # Lint rules
└── 📁 lib/
    ├── 🚀 main.dart             # App entry point
    ├── 🧱 core/                 # Cross-cutting infrastructure
    │   ├── 🌐 network/          # Dio client, interceptors, API
    │   ├── 🎨 theme/            # Colors, typography, ThemeData
    │   ├── 🧭 navigation/       # Route definitions
    │   ├── 🚦 router/           # GoRouter config
    │   ├── 💾 storage/          # Secure + shared prefs
    │   ├── ⚙️ services/         # Push, analytics, etc.
    │   ├── 🛠️ utils/            # Helpers, extensions, formatters
    │   ├── 📦 models/           # Shared DTOs
    │   └── 🎨 widgets/          # Reusable widgets
    ├── 📁 features/             # Feature modules (feature-first)
    │   ├── 🔑 auth/             # Login, OTP, registration
    │   ├── 🏠 home/             # Dashboard
    │   ├── 👤 profile/          # User profile
    │   ├── 💰 loan/             # Loan applications
    │   ├── 📷 qr_scanner/       # QR scanning
    │   ├── 🔔 notification/     # Push notifications
    │   ├── 🪪 session/          # Active sessions
    │   ├── 🚀 onboarding/       # First-run onboarding
    │   └── 💦 splash/           # Splash screen
    └── 🌍 l10n/                 # Localizations (.arb files)
```

## 🛠️ Stack

| Layer | Tech |
| --- | --- |
| Framework | 🐦 Flutter 3.22+ |
| Language | 🎯 Dart 3.4+ |
| State | 🔄 Riverpod |
| Routing | 🧭 GoRouter |
| Network | 🌐 Dio |
| Storage | 🔒 flutter_secure_storage |
| QR | 📷 mobile_scanner |
| i18n | 🌍 intl + flutter_localizations |
| Models | 📦 freezed + json_serializable |

> ⚠️ All `features/*` business logic and `core/services/*` implementations
> remain in the private repo. Only structural placeholders + config files
> exposed here.
