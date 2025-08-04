# PartaiBook Vendor Landing Page

## Setup Instructions

### 1. Supabase Setup
1. Go to [Supabase](https://supabase.com) and create a new project
2. In the SQL Editor, run the schema from `supabase-schema.sql`
3. Get your Project URL and Service Role Key from Settings > API
4. Add them to your `.env.local` file

### 2. Email Setup (Resend)
1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. Verify your sending domain (optional but recommended)

### 3. Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run Development Server
```bash
npm run dev
```

## Features

### Signup Modal
- Collects name, email, and business type
- Stores data in Supabase
- Sends automated welcome email via Resend
- Handles duplicate email detection
- Mobile-responsive design

### Email Automation
- Automatic welcome email on signup
- Branded HTML email template
- Error handling for email failures
- Ready for mass email campaigns

### Database Schema
- UUID primary keys
- Email uniqueness constraint
- Business type categorization
- Email consent tracking
- Launch email status tracking
- Row Level Security enabled

## Managing Signups

### Export Email List
```sql
SELECT email, name, business_type, created_at 
FROM vendor_signups 
WHERE email_consent = true 
ORDER BY created_at DESC;
```

### Send Launch Emails
Use the email list with your preferred email service or update the `launch_email_sent` flag after sending.

## Customization

### Email Template
Edit the HTML template in `/src/app/api/signup/route.ts` to match your branding.

### Signup Form
Modify the `SignupModal` component in `/src/app/page.tsx` to add/remove fields.

### Business Types
Update the dropdown options in the modal to match your target vendors.
