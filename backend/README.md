# 🐍 Backend (Django)

Main REST API backend powering the ADAM platform.

## 📂 Structure

```
backend/
├── 🎯 manage.py                   # Django CLI entry point
├── 📦 requirements.txt            # Python dependencies (sample list)
├── 📁 apps/                       # Django applications
│   ├── 👤 accounts/               # User auth, profile, OTP, JWT
│   │   ├── models.py              # User, Profile, OTPSession
│   │   ├── views.py               # Login, register, refresh, profile
│   │   ├── serializers.py         # DRF serializers
│   │   ├── urls.py                # /api/v1/accounts/...
│   │   └── migrations/
│   ├── 📋 applications/           # Loan applications
│   ├── 🏥 clinic/                 # Clinic & doctor management
│   ├── 🛠️ common/                 # Shared utilities, base models
│   ├── 📊 dashboard/              # Analytics endpoints
│   ├── 🤝 guarantor/              # Guarantor logic
│   ├── 🔌 integrations/           # External services (SMS, payment)
│   ├── 📌 kanban/                 # Kanban workflow
│   ├── 🔔 notifications/          # Push & in-app notifications
│   ├── 💳 payments/               # Payment processing
│   └── 📈 scoring/                # Credit scoring engine
├── 🧱 core/                       # Settings, middleware, wsgi
├── 🌐 locale/                     # i18n .po / .mo files
├── 🖼️ static/                     # Collected static assets
└── 🎨 templates/                  # Server-rendered templates (admin, emails)
```

> ⚠️ All `views.py`, `serializers.py`, business logic and DB migrations
> remain in the private repo. Only structural placeholders are exposed here.
