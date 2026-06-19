# ChiefOps Website - Deployment Guide

## ✅ COMPLETED STEPS

### 1. Cloudflare Account Setup
- ✅ **Logged in**: chiefops26@gmail.com
- ✅ **Account ID**: c63d3d6d8c17db7487ab40b81d5e29d1
- ✅ **Wrangler CLI**: v4.101.0 installed and authenticated

### 2. D1 Database
- ✅ **Database Name**: chiefops-db
- ✅ **Database ID**: 1f2ff1da-1f52-4229-a8f8-8379b37f2b60
- ✅ **Region**: WEUR
- ✅ **Schema Created**: 7 tables with initial data
  - audits
  - emails
  - faqs (5 initial FAQs)
  - employees
  - payroll_data
  - payslips
  - solutions (4 initial solutions)

### 3. R2 Buckets
- ✅ **Bucket 1**: chiefops-assets (for static assets)
- ✅ **Bucket 2**: chiefops-payslips (for generated payslips)

### 4. Cloudflare Workers
- ✅ **Email Inbound Worker**
  - URL: https://chiefops-email-inbound.chiefops26.workers.dev
  - Version: 5061fa1b-8e07-4b17-be90-786d380da584
  - Bindings: D1 (chiefops-db), R2 (chiefops-assets)
  
- ✅ **Payslip Generator Worker**
  - URL: https://chiefops-payslip-generator.chiefops26.workers.dev
  - Version: 253e922c-e959-4943-a2d7-8b6209e64786
  - Bindings: D1 (chiefops-db), R2 (chiefops-payslips)

---

## ⏳ PENDING STEPS

### 5. Email Routing Configuration

**Go to**: https://dash.cloudflare.com/c63d3d6d8c17db7487ab40b81d5e29d1/email/routing

#### Step 1: Add Custom Domain
1. Click "Add a custom domain"
2. Enter: `chiefops.co.za`
3. Verify domain ownership (update DNS records)

#### Step 2: Create Email Routes

**Route 1 - Inbound Email Processing**:
```
Address: info@chiefops.co.za
Destination: Workers
Worker: chiefops-email-inbound
```

**Route 2 - Support Email Forwarding**:
```
Address: support@chiefops.co.za
Destination: Forward to email
Forward to: admin@chiefops.co.za
```

**Optional Routes**:
```
Address: payroll@chiefops.co.za
Destination: Workers
Worker: chiefops-payslip-generator

Address: audit@chiefops.co.za
Destination: Workers
Worker: chiefops-email-inbound
```

#### Step 3: Verify DNS Records
Add these MX records for chiefops.co.za:
```
Priority: 10
Value: route1.mx.cloudflare.net

Priority: 20
Value: route2.mx.cloudflare.net
```

---

### 6. Deploy Next.js to Cloudflare Pages

#### Option A: Using GitHub (Recommended)

1. **Create GitHub Repository**
   ```bash
   cd chiefops-website
   git init
   git add .
   git commit -m "Initial commit - ChiefOps Website"
   git remote add origin git@github.com:your-username/chiefops-website.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to: https://dash.cloudflare.com/c63d3d6d8c17db7487ab40b81d5e29d1/pages
   - Click "Connect GitHub account"
   - Select the repository: chiefops-website
   - Configure build settings:
     ```
     Project name: chiefops-website
     Production branch: main
     Build command: npm run build
     Build output directory: out
     Root directory: (leave empty)
     ```

3. **Add Environment Variables**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://chiefops.co.za
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)

#### Option B: Direct Upload (Temporary)

1. Install dependencies:
   ```bash
   cd chiefops-website
   npm install
   ```

2. Build for Cloudflare Pages:
   ```bash
   npm run build
   ```

3. Upload to Cloudflare Pages via Dashboard:
   - Go to Pages
   - Click "Create project" → "Direct upload"
   - Upload the `out/` directory

---

### 7. Configure Custom Domain

1. Go to: https://dash.cloudflare.com/c63d3d6d8c17db7487ab40b81d5e29d1/pages
2. Select your project
3. Click "Custom domains"
4. Add: `chiefops.co.za`
5. Verify domain ownership

---

## 🎯 POST-DEPLOYMENT CHECKLIST

- [ ] Test homepage loads: https://chiefops.co.za
- [ ] Test navigation links
- [ ] Test audit form submission
- [ ] Test email routing (send test email to info@chiefops.co.za)
- [ ] Check D1 database for stored emails
- [ ] Test payslip generation (optional)
- [ ] Verify Schema.org markup (use Google Rich Results Test)
- [ ] Test mobile responsiveness

---

## 📋 DEPLOYMENT SUMMARY

### ✅ COMPLETED (4/5)
1. ✅ Cloudflare account authenticated
2. ✅ D1 database created with schema
3. ✅ R2 buckets created
4. ✅ Workers deployed and running
5. ⏳ Email Routing (pending DNS verification)
6. ⏳ Next.js site (pending GitHub setup)

### 🔗 DEPLOYED RESOURCES

| Resource | URL | Status |
|----------|-----|--------|
| Email Worker | https://chiefops-email-inbound.chiefops26.workers.dev | ✅ Live |
| Payslip Worker | https://chiefops-payslip-generator.chiefops26.workers.dev | ✅ Live |
| D1 Database | chiefops-db (1f2ff1da...) | ✅ Ready |
| R2 Assets | chiefops-assets | ✅ Ready |
| R2 Payslips | chiefops-payslips | ✅ Ready |

### 💡 NEXT STEPS

1. **Complete Email Routing** (5 minutes)
   - Add domain in Cloudflare Dashboard
   - Create routes for info@ and support@

2. **Deploy Next.js Site** (10 minutes)
   - Push to GitHub
   - Connect to Cloudflare Pages
   - Configure build settings

3. **Test Everything** (15 minutes)
   - Site navigation
   - Form submissions
   - Email processing

**Estimated Time to Complete: 30-40 minutes**

---

## 🚨 TROUBLESHOOTING

### Workers Not Receiving Emails?
1. Check domain verification in Email Routing
2. Verify DNS MX records are correct
3. Check Worker logs: `wrangler tail --format json`

### Build Failing on Cloudflare Pages?
1. Ensure `next.config.js` has `output: 'export'`
2. Check Node.js version (use 18+)
3. Verify all dependencies in package.json

### Database Connection Issues?
1. Check database ID in wrangler.toml
2. Verify binding names match worker code
3. Test with: `wrangler d1 execute chiefops-db --remote --command="SELECT 1"`

---

## 📞 SUPPORT

- Cloudflare Documentation: https://developers.cloudflare.com/
- Wrangler CLI: https://developers.cloudflare.com/workers/wrangler/
- D1 Databases: https://developers.cloudflare.com/d1/
- Email Routing: https://developers.cloudflare.com/email-routing/

---

**Last Updated**: 2026-06-17
**Deployed By**: chiefops26@gmail.com
