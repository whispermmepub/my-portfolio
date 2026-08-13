# Portfolio Site (retro terminal style) 🖥️

kaungspace.pages.dev လိုမျိုး — retro terminal boot animation ပါတဲ့ personal portfolio site ပါ။
Static HTML/CSS/JS သက်သက်မို့ ဘာ framework မှ မလို၊ Cloudflare Pages မှာ free deploy လို့ရတယ်။

## ဖိုင်ဖွဲ့စည်းပုံ

```
portfolio/
├── index.html    # page structure
├── styles.css    # design
├── script.js     # ✏️ ကိုယ့်အချက်အလက်တွေ ဒီမှာ ပြင်ပါ (CONFIG)
└── me.jpg        # (optional) ကိုယ့်ဓာတ်ပုံ — script.js ထဲ photo: "me.jpg" လို့ပြောင်းပါ
```

## ကိုယ့်အချက်အလက်တွေ ဖြည့်နည်း

`script.js` ထိပ်မှာရှိတဲ့ `CONFIG` object ကို ပြင်ရုံပါပဲ:

```js
name: "Your Name",                 // နာမည်
alias: "Alias: You!",              // typewriter ဒုတိယစာသား
role: "Junior Full-Stack Developer",
bio: "...",                        // ကိုယ့်အကြောင်း
email: "you@example.com",
photo: "me.jpg",                   // photo မထည့်ရင် null
socials: { github, telegram, linkedin, website },
skills: { Frontend: [...], Backend: [...], Tools: [...] },
projects: [ { title, desc, tags, link, code, date }, ... ],
education: [ { school, degree, date, note }, ... ],
```

## ကိုယ့်စက်မှာ preview

```sh
cd portfolio
python3 -m http.server 8000
# browser မှာ http://localhost:8000 ဖွင့်ပါ
```

## Cloudflare Pages မှာ deploy (free, *.pages.dev URL)

### နည်း ၁ — Drag & Drop (အမြန်ဆုံး)
1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. **Upload assets** ကိုနှိပ်ပြီး ဒီ folder (index.html, styles.css, script.js, me.jpg)
   တွေကို ဆွဲတင်လိုက်ပါ
3. Deploy — ပြီးရင် `https://<project-name>.pages.dev` URL ရပါတယ်

### နည်း ၂ — GitHub ကနေ (update လုပ်ရလွယ်)
1. ဒီ folder ကို GitHub repo တစ်ခုအနေနဲ့ push ပါ
2. Cloudflare Pages → **Create** → **Pages** → **Connect to Git** → repo ရွေးပါ
3. Build settings: **framework = None** (static site) → Save & Deploy
4. နောက် GitHub ကို commit တိုင်း auto-deploy ဖြစ်ပါမယ်

## ထပ်လုပ်လို့ရတာတွေ
- ကိုယ့် domain ချိတ်ချင်ရင် Pages → Custom domains
- ဓာတ်ပုံကို grayscale → hover ရင် color ပြောင်းပြတယ် (kaungspace လိုပဲ)
