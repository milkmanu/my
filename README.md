# UzbGram — Vercel Deploy Qo'llanmasi 🚀

## Loyiha haqida

**UzbGram** — O'zbekiston uchun maxsus yaratilgan ijtimoiy tarmoq veb ilovasi.  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Liquid Glass dizayn  
**Deploy:** Vercel (statik eksport)

---

## 🚀 Vercel orqali Deploy (3 usul)

### 1-usul: Vercel CLI (Eng tez — tavsiya etiladi)

```bash
# 1. Node.js o'rnatilganligini tekshiring
node --version  # v18+ bo'lishi kerak

# 2. Loyihani o'rnatish
npm install

# 3. Vercel CLI o'rnatish
npm install -g vercel

# 4. Login qilish
vercel login

# 5. Deploy!
vercel --prod
```

Birinchi marta so'ralganda:
- **Set up and deploy?** → `Y`
- **Which scope?** → Hisobingizni tanlang
- **Link to existing project?** → `N`
- **What's your project name?** → `uzbgram`
- **In which directory is your code located?** → `./`
- **Override settings?** → `N`

---

### 2-usul: GitHub + Vercel (Avtomatik deploy)

```bash
# 1. GitHub repo yarating va yuklang
git init
git add .
git commit -m "feat: UzbGram initial release 🇺🇿"
git branch -M main
git remote add origin https://github.com/SIZNING_USERNAME/uzbgram.git
git push -u origin main
```

Keyin [vercel.com](https://vercel.com) ga kiring:
1. **"New Project"** → GitHub repo ni tanlang
2. **Framework:** Next.js (avtomatik aniqlanadi)
3. **"Deploy"** ni bosing

Har `git push` da avtomatik deploy bo'ladi! ✅

---

### 3-usul: Vercel Dashboard (Drag & Drop)

```bash
# Birinchi build qiling
npm run build
```

Keyin `out/` papkasini [vercel.com/new](https://vercel.com/new) ga drag & drop qiling.

---

## 🛠 Lokal ishlatish

```bash
npm install
npm run dev
# http://localhost:3000 da oching
```

---

## 📁 Loyiha tuzilmasi

```
uzbgram-web/
├── app/
│   ├── layout.tsx      # Root layout (fonts, meta)
│   ├── page.tsx        # Bosh sahifa (router)
│   └── globals.css     # Liquid Glass CSS tizimi
├── components/
│   ├── HomePage.tsx    # Asosiy lenta
│   ├── LoginPage.tsx   # Kirish
│   ├── SignupPage.tsx  # Ro'yxatdan o'tish
│   ├── ProfilePage.tsx # Profil
│   └── BottomNav.tsx   # Pastki navigatsiya
├── public/             # Statik fayllar (rasm, favicon)
├── package.json
├── next.config.js      # Static export sozlamasi
├── tailwind.config.ts
└── vercel.json         # Vercel deploy konfiguratsiyasi
```

---

## ⚙️ Muhit o'zgaruvchilari (ixtiyoriy)

Agar real backend ulasangiz `.env.local` yarating:

```env
NEXT_PUBLIC_BACK4APP_APP_ID=your_app_id
NEXT_PUBLIC_BACK4APP_JS_KEY=your_js_key
NEXT_PUBLIC_GRAPHQL_URL=https://parseapi.back4app.com/graphql
```

---

## 🌐 Custom domain ulash

Vercel dashboard → Project → Settings → Domains:
```
uzbgram.uz  →  Add
```

---

## 📊 Deploy muvaffaqiyatli bo'lgach

URL ko'rinishi: `https://uzbgram-xxxx.vercel.app`

**Testlash:**
- ✅ Bosh sahifa ochiladi
- ✅ Stories ko'rinadi
- ✅ Like/save ishlaydi
- ✅ Kirish/Ro'yxatdan o'tish ishlaydi
- ✅ Profil sahifasi ishlaydi
- ✅ Mobil ko'rinish (responsive)

---

Made with ❤️ for O'zbekiston 🇺🇿
