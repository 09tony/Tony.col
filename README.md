# Tony Styles · GrowthEngine Copywriting Website
### tony.styles.growthengine.com

A full, multi-page personal copywriting agency website for pet & baby brands.  
Built with pure HTML, CSS, and JavaScript — no frameworks, no build step. Deploy in minutes.

---

## 📁 File Structure

```
tonystyles/
├── index.html          ← Homepage
├── about.html          ← About Tony
├── services.html       ← 3-Tier Services + Calculator + Quiz
├── results.html        ← Case Studies + Before/After + Testimonials
├── insights.html       ← Free Tools + Articles
├── contact.html        ← Application Form + Free Audit + Book a Call
├── css/
│   └── style.css       ← Full design system
├── js/
│   └── main.js         ← All interactive features
└── README.md           ← This file
```

---

## 🚀 DEPLOY TO GITHUB + VERCEL IN 5 STEPS

### Step 1 — Create GitHub Account (if needed)
Go to: https://github.com and sign up free

### Step 2 — Create New Repository
1. Click the **+** icon (top right) → "New repository"
2. Name it: `tony-styles-growthengine` (or anything you like)
3. Set to **Public** (required for free GitHub Pages)
4. Click **"Create repository"**

### Step 3 — Upload Your Files
**Option A — Drag & Drop (easiest)**
1. Open your new repo on GitHub
2. Click "uploading an existing file" link
3. Drag ALL files and folders from this project into the browser
4. Scroll down → type "Initial website upload" in the commit message
5. Click **"Commit changes"**

**Option B — Git Commands (if you have Git installed)**
```bash
git init
git add .
git commit -m "Initial commit — Tony Styles GrowthEngine"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tony-styles-growthengine.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages (free hosting)
1. In your repo, click **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under "Source" → select **main** branch → **/ (root)**
4. Click **Save**
5. Your site goes live at: `https://YOUR_USERNAME.github.io/tony-styles-growthengine`
6. Wait 2–3 minutes for it to build

### Step 5 — Connect Vercel (optional but recommended — better performance)
1. Go to: https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your GitHub repo: `tony-styles-growthengine`
4. Click **"Deploy"** — no settings needed
5. Vercel gives you a live URL instantly: `tony-styles-growthengine.vercel.app`

---

## 🌐 ADD YOUR CUSTOM DOMAIN

### On GitHub Pages:
1. Settings → Pages → Custom domain
2. Enter: `tony.styles.growthengine.com`
3. Update your DNS at your domain registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

### On Vercel (easier):
1. Project → Settings → Domains
2. Add: `tony.styles.growthengine.com`
3. Vercel gives you exact DNS records to add

---

## 📧 CONNECT YOUR CONTACT FORMS (so you actually receive applications)

The forms currently work visually. To receive emails, use **Formspree** (free):

1. Go to: https://formspree.io and sign up
2. Create a new form → get your form ID (looks like `xpzgdkla`)
3. In `contact.html`, find each `<form>` tag and add:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Add this hidden field inside every form:
   ```html
   <input type="hidden" name="_subject" value="New application - Tony Styles GrowthEngine"/>
   ```
5. Save, re-upload to GitHub → form submissions land in your email instantly

---

## 🔧 CUSTOMISATION GUIDE

### Change colours
In `css/style.css`, edit the `:root` section at the top:
```css
--gold: #C9A84C;   ← Your gold/brand accent
--teal: #0ABFBC;   ← Secondary accent
--black: #07090D;  ← Background
```

### Update availability spots
Search for **"2 spots"** or **"2 client spots"** across all HTML files and update the number.

### Update the stats bar
On `index.html`, find the stats section and update:
- Revenue influenced
- Number of brands grown
- Email revenue lift %

### Add your real testimonials
Search for `testimonial-author` in any HTML file to find testimonials. Replace name, role, and quote with real clients.

### Add your Calendly link
In `contact.html`, find the Calendly placeholder section and replace with:
```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/YOUR_CALENDLY_LINK"
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
```

---

## 📊 CONNECT GOOGLE ANALYTICS

Add this before `</head>` on every page (replace `G-XXXXXXXXXX` with your real ID):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ PRE-LAUNCH CHECKLIST

- [ ] Replace `tony@growthengine.com` with your real email (search all files)
- [ ] Update "2 spots available" count to reflect reality
- [ ] Connect Formspree to receive form submissions
- [ ] Add your real testimonials and results numbers
- [ ] Add your Calendly link
- [ ] Connect Google Analytics
- [ ] Test all pages on mobile
- [ ] Add your custom domain in GitHub/Vercel
- [ ] Share the URL and start pitching 🚀

---

## 💡 PITCHING STRATEGY (post-launch)

Once live, use the URL in:

**Email outreach subject lines:**
- "Quick question about [Brand Name]'s email copy"
- "I noticed something on your product page, [Name]"
- "Your [pet/baby] brand + a free copy review — 2 mins"

**Email body:**
> Hi [Name],
> 
> I specialise in copy for pet/baby brands — emails, product pages, ads.
> 
> I took a look at [specific page] and noticed [specific issue]. I've included a quick fix below.
> 
> I've written a free personalised audit for brands like yours — takes 48 hrs, no strings attached.
> 
> If you're curious: tony.styles.growthengine.com
> 
> Either way, happy to help.
> Tony

---

Built with HTML + CSS + JS · Deployed via GitHub Pages / Vercel · © Tony Styles GrowthEngine 2025
