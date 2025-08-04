-- Create vendor_signups table
CREATE TABLE vendor_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  business_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_consent BOOLEAN DEFAULT true,
  launch_email_sent BOOLEAN DEFAULT false
);

-- Create index on email for faster lookups
CREATE INDEX idx_vendor_signups_email ON vendor_signups(email);

-- Create index on created_at for sorting
CREATE INDEX idx_vendor_signups_created_at ON vendor_signups(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE vendor_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from API
CREATE POLICY "Allow API inserts" ON vendor_signups
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading for authenticated users (for admin access)
CREATE POLICY "Allow authenticated read" ON vendor_signups
  FOR SELECT USING (auth.role() = 'authenticated');
