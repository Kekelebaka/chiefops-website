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

### ✅ DEPLOYMENT READY

Your site is now deployed to GitHub:
- **Repository**: https://github.com/Kekelebaka/chiefops-website
- **Branch**: main
- **Commit**: 0ff1848

### Cloudflare Pages Setup

1. **Go to Cloudflare Pages**: https://dash.cloudflare.com/c63d3d6d8c17db7487ab40b81d5e29d1/pages
2. **Click "Create a project"**
3. **Select "Connect to Git"**
4. **Choose the repository**: `Kekelebaka/chiefops-website`
5. **Configure the build settings**:
   ```
   Project name: chiefops-website
   Production branch: main
   Build command: npm run build
   Build output directory: out
   Root directory: (leave empty)
   Environment variables:
   - NEXT_PUBLIC_SITE_URL=https://chiefops.co.za
   ```
6. **Click "Save and Deploy"**
7. **Wait for the build to complete** (2-5 minutes)

### Post-Deployment Steps

1. **Add Custom Domain**:
   - Go to your Pages project
   - Click "Custom domains"
   - Add: `chiefops.co.za`
   - Follow the verification steps

2. **Verify the site is working**:
   - Check the deployment logs in Cloudflare Pages
   - Visit https://chiefops-website.pages.dev (or your custom domain)
   - Test all pages: Home, Audit, Solutions

### Troubleshooting

If the build fails:
1. Check the build logs in Cloudflare Pages
2. Ensure all dependencies are in package.json
3. Verify the build command is correct: `npm run build`
4. Check that the output directory is `out`

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

### ✅ COMPLETED (5/6)
1. ✅ Cloudflare account authenticated
2. ✅ D1 database created with schema
3. ✅ R2 buckets created
4. ✅ Workers deployed and running
5. ✅ Next.js site built and pushed to GitHub
6. ⏳ Cloudflare Pages deployment (ready to configure)

### 🔗 DEPLOYED RESOURCES

| Resource | URL | Status |
|----------|-----|--------|
| Email Worker | https://chiefops-email-inbound.chiefops26.workers.dev | ✅ Live |
| Payslip Worker | https://chiefops-payslip-generator.chiefops26.workers.dev | ✅ Live |
| D1 Database | chiefops-db (1f2ff1da...) | ✅ Ready |
| R2 Assets | chiefops-assets | ✅ Ready |
| R2 Payslips | chiefops-payslips | ✅ Ready |
| GitHub Repo | https://github.com/Kekelebaka/chiefops-website | ✅ Ready |
| Production Build | out/ directory | ✅ Ready |

### 💡 NEXT STEPS

1. **Deploy to Cloudflare Pages** (5 minutes)
   - Go to Cloudflare Pages dashboard
   - Connect GitHub repository: Kekelebaka/chiefops-website
   - Configure build settings (see DEPLOYMENT-GUIDE.md)
   - Deploy and wait for build

2. **Configure Custom Domain** (10 minutes)
   - Add chiefops.co.za to Pages project
   - Update DNS records for domain verification
   - Test site at chiefops.co.za

3. **Complete Email Routing** (5 minutes)
   - Add domain in Cloudflare Dashboard
   - Create routes for info@ and support@
   - Test email processing

**Estimated Time to Complete: 20-25 minutes**

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
