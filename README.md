# ChiefOps Website

> AI-Powered Business Operating Systems

A high-performance, mobile-first website built with Next.js, Tailwind CSS, and Cloudflare's complete ecosystem (Pages, Workers, D1, R2, Email Routing).

## Features

- **AI-Ready**: Built for artificial intelligence integration
- **Serverless-First**: Zero traditional hosting, 100% Cloudflare-powered
- **Mobile-Optimized**: Responsive design for all devices
- **Machine-Readable**: Schema.org markup for better SEO
- **Conversion-Focused**: Designed to turn visitors into customers
- **Cloudflare-Centric**: Leveraging Cloudflare's global network

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js (App Router) + Tailwind CSS |
| Hosting | Cloudflare Pages |
| Backend Logic | Cloudflare Workers |
| Database | Cloudflare D1 |
| Storage | Cloudflare R2 |
| Email Inbound | Cloudflare Email Routing + Workers |
| Email Outbound | Cloudflare Email Service |

## Project Structure

```
chiefops-website/
├── src/
│   ├── app/
│   │   ├── (marketing)/       # Marketing pages (Home, Solutions, Pricing, etc.)
│   │   ├── api/               # API routes (Workers)
│   │   └── components/        # Reusable UI components
│   ├── workers/
│   │   ├── email-inbound/     # Inbound email processing
│   │   └── payslip-generator/  # Payslip PDF generation
│   └── lib/                   # Utilities (D1, R2, Email)
├── public/                    # Static assets
├── wrangler.toml              # Workers config
├── next.config.js             # Next.js config
├── tailwind.config.js         # Tailwind config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chiefops-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Cloudflare Setup

### 1. Create a Cloudflare Account

Sign up at [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

### 2. Set Up D1 Database

```bash
# Create database
wrangler d1 create chiefops-db

# Note the database ID and update wrangler.toml files
```

Run the schema:
```sql
-- See DATABASE_SCHEMA in src/lib/db.ts
```

### 3. Set Up R2 Buckets

```bash
# For assets
wrangler r2 bucket create chiefops-assets

# For payslips
wrangler r2 bucket create chiefops-payslips
```

### 4. Set Up Email Routing

1. Go to Cloudflare Dashboard → Email → Email Routing
2. Add your domain (e.g., chiefops.co.za)
3. Add routes:
   - `info@chiefops.co.za` → Forward to email-inbound Worker
   - `support@chiefops.co.za` → Forward to admin email
   - `payroll@chiefops.co.za` → Forward to payslip-generator Worker (optional)

### 5. Deploy Workers

```bash
# Deploy email-inbound worker
cd src/workers/email-inbound
wrangler deploy

# Deploy payslip-generator worker
cd src/workers/payslip-generator
wrangler deploy
```

### 6. Deploy Next.js Site to Cloudflare Pages

1. Go to Cloudflare Dashboard → Pages
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `out` (for static export)
   - Environment variables: Add any required

## Database Schema

See `src/lib/db.ts` for the complete database schema.

### Tables

- `audits` - Audit request submissions
- `emails` - Inbound email history
- `faqs` - FAQ questions and answers
- `employees` - Employee data (for payslip system)
- `payroll_data` - Payroll information
- `payslips` - Generated payslip records
- `solutions` - Solution offerings (CMS-like)

## Workers Configuration

### Email Inbound Worker (`src/workers/email-inbound/`)

- Processes all inbound emails
- Stores emails in D1 database
- Auto-responds to FAQ matches
- Forwards to appropriate handlers

### Payslip Generator Worker (`src/workers/payslip-generator/`)

- Generates PDF payslips
- Sends payslips via email
- Stores payslip records in D1
- Uploads PDFs to R2 storage

## API Endpoints

### Email Worker
- POST `/email` - Process inbound email

### Payslip Worker
- GET `/payslips?employeeId=...` - List payslips
- GET `/payslips/:employeeId/:period` - Get specific payslip
- POST `/payslips/generate` - Generate and send payslip
- POST `/payslips/generate-batch` - Generate payslips for all employees

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ADMIN_EMAIL` | Admin email for forwarding | Yes |
| `EMAIL_API_TOKEN` | Cloudflare Email API token | Optional |
| `NEXT_PUBLIC_SITE_URL` | Site URL | Yes |

## Deployment Checklist

| Task | Status |
|------|--------|
| Set up GitHub repo | ⬜ |
| Configure Cloudflare Pages | ⬜ |
| Create D1 database | ⬜ |
| Create R2 buckets | ⬜ |
| Set up Email Routing | ⬜ |
| Enable Email Service (Beta) | ⬜ |
| Deploy Workers | ⬜ |
| Deploy Next.js site | ⬜ |
| Add Schema.org markup | ⬜ |
| Test inbound email flow | ⬜ |
| Test payslip generation | ⬜ |
| Test audit form submission | ⬜ |

## Scripts

```bash
npm run dev          # Run development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Customization

### Adding New Pages

1. Create a new file in `src/app/(marketing)/page-name/page.tsx`
2. Add navigation links in the appropriate components

### Adding New Solutions

1. Add to `src/app/(marketing)/solutions/page.tsx`
2. Optionally add to database in `solutions` table

### Customizing Colors

Edit `tailwind.config.js`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: { navy: '#0A2540', orange: '#FF6B35', teal: '#4ECDC4' },
        neutral: { light: '#F8F9FA', gray: '#666666' },
      },
    },
  },
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[MIT License](LICENSE)

## Support

For support, email info@chiefops.co.za

---

Built with ❤️ by ChiefOps

AI-Powered Business Operating Systems
