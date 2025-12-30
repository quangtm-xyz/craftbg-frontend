# 🚀 Deployment Guide - Frontend (Vercel)

This guide will help you deploy the CraftBg.click frontend to Vercel.

## 📋 Prerequisites

- GitHub account with the frontend repository
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Backend API deployed and accessible (see backend DEPLOYMENT.md)

---

## 🎯 Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub account and authorize Vercel if needed
4. Find and select your `craftbg-frontend` repository
5. Click **"Import"**

### Step 2: Configure Project

Vercel will auto-detect Next.js. Configure the following:

**Framework Preset:** Next.js

**Root Directory:** `./` (leave as default)

**Build Command:** 
```bash
npm run build
```

**Output Directory:** 
```
(leave empty - Vercel auto-detects .next)
```

**Install Command:**
```bash
npm install
```

### Step 3: Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend-url.onrender.com` | Production, Preview, Development |

> ⚠️ **Important:** Replace `your-backend-url.onrender.com` with your actual Render backend URL

**Example:**
```
NEXT_PUBLIC_API_URL=https://craftbg-backend.onrender.com
```

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://craftbg-frontend.vercel.app`

### Step 5: Configure Custom Domain (Optional)

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `craftbg.click`)
4. Follow Vercel's DNS configuration instructions

---

## 🖥️ Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy from Project Directory

```bash
cd d:\WebStorm_WP\MyProject\BackgroundRemover\frontend
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → craftbg-frontend
- **Directory?** → ./
- **Override settings?** → No

### Step 4: Add Environment Variables

```bash
vercel env add NEXT_PUBLIC_API_URL
```

Enter your backend URL when prompted.

### Step 5: Deploy to Production

```bash
vercel --prod
```

---

## ⚙️ Vercel Configuration

The project includes `next.config.mjs` with optimal settings:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // No 'output: export' - Vercel deploys Next.js natively
  images: { unoptimized: true }, // For compatibility
  trailingSlash: true,        // SEO-friendly URLs
}
```

> ✅ **Note:** Vercel automatically handles Next.js builds. No static export needed.

---

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull Requests** → Preview deployment with unique URL

### Disable Auto-Deploy (Optional)

1. Go to Project Settings
2. Click **"Git"**
3. Configure deployment branches

---

## 🌍 Environment-Specific Configurations

### Production
```env
NEXT_PUBLIC_API_URL=https://craftbg-backend.onrender.com
```

### Preview/Staging
```env
NEXT_PUBLIC_API_URL=https://craftbg-backend-staging.onrender.com
```

### Development
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `Module not found`
- **Solution:** Check `package.json` dependencies
- Run `npm install` locally to verify

**Error:** `Environment variable not found`
- **Solution:** Add missing env vars in Vercel dashboard

### API Connection Issues

**Error:** `Failed to fetch` or CORS errors
- **Solution:** Verify backend URL is correct
- Check backend CORS settings allow your Vercel domain
- Ensure backend is deployed and running

### Static Export Issues

**Error:** `Image Optimization using Next.js' default loader is not compatible with export`
- **Solution:** Already configured with `images: { unoptimized: true }`

### 404 on Page Refresh

- **Solution:** Already configured with `trailingSlash: true`
- Vercel handles this automatically for Next.js

---

## 📊 Performance Optimization

Vercel automatically provides:

- ✅ **Edge Network** - Global CDN
- ✅ **Automatic HTTPS** - SSL certificates
- ✅ **Compression** - Gzip/Brotli
- ✅ **Caching** - Smart caching headers
- ✅ **Analytics** - Built-in analytics (optional)

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use environment variables** - For all sensitive data
3. **Enable HTTPS only** - Vercel does this by default
4. **Configure CSP headers** - Add in `next.config.mjs` if needed

---

## 📈 Monitoring

### View Deployment Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click on a deployment
4. View **"Build Logs"** and **"Function Logs"**

### Enable Analytics

1. Go to Project Settings
2. Click **"Analytics"**
3. Enable **"Web Analytics"**

---

## 🔄 Update Deployment

### Via Git Push
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel auto-deploys in ~2 minutes.

### Via Vercel CLI
```bash
vercel --prod
```

### Rollback to Previous Deployment

1. Go to Vercel Dashboard
2. Click **"Deployments"**
3. Find the previous successful deployment
4. Click **"⋯"** → **"Promote to Production"**

---

## 🎯 Post-Deployment Checklist

- [ ] Frontend deployed successfully
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set correctly
- [ ] API connection working
- [ ] Test all 7 language routes
- [ ] Test Remove Background feature
- [ ] Test Image Enhancer feature
- [ ] Test on mobile devices
- [ ] Check SEO metadata (title, description, hreflang)
- [ ] Verify HTTPS is working
- [ ] Check performance with Lighthouse

---

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues:** Report issues in your repository

---

## 🔗 Useful Links

- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Vercel CLI Docs:** [vercel.com/docs/cli](https://vercel.com/docs/cli)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**🎉 Your frontend is now live on Vercel!**

Access your app at: `https://your-project.vercel.app`
