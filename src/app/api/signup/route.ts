import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const { name, email, businessType } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('vendor_signups')
      .insert([
        {
          name,
          email,
          business_type: businessType || null,
          created_at: new Date().toISOString(),
          email_consent: true,
          launch_email_sent: false
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to save signup' },
        { status: 500 }
      );
    }

    // Send welcome email using Resend
    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'PartaiBook <onboarding@resend.dev>',
          reply_to: 'hello@partaibook.com',
          to: [email],
          subject: 'Welcome to PartaiBook - You\'re on the waitlist!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
              <div style="margin-bottom: 30px;">
                <p style="color: #222222; font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
                
                <p style="color: #222222; font-size: 16px; margin-bottom: 20px;">
                  Thanks for signing up to be part of PartaiBook's founding vendor community!
                </p>
                
                <p style="color: #222222; font-size: 16px; margin-bottom: 20px;">
                  We're building the booking platform made for you - one that brings you real leads, secured deposits, and less admin. No more chasing DMs, flaky customers, or juggling 5 different apps. Just bookings that fit your calendar and a dashboard that does the heavy lifting.
                </p>
                
                <div style="margin: 25px 0;">
                  <p style="color: #222222; font-size: 16px; margin-bottom: 10px;">
                    ✅ You're on the waitlist<br>
                    ✅ You'll be the first to know when vendor profiles go live so you can get your profile set up! We'll also send you setup guides and tips to get started.<br>
                    ✅ Founding vendors get 90 days commission-free and early access to all new features<br>
                    ✅ You'll receive $10 credits to share with up to 5 customers (they get money off their booking, you get verified reviews to boost your profile!)
                  </p>
                </div>
                
                <p style="color: #222222; font-size: 16px; margin-bottom: 20px;">
                  We can't wait to help you grow your business.
                </p>
                
                <p style="color: #222222; font-size: 16px; margin-bottom: 30px;">
                  Talk soon,<br>
                  – The PartaiBook Team ✨
                </p>
                
                <p style="color: #6A6A6A; font-size: 14px; font-style: italic;">
                  Ps. Got questions? Just reply to this email - we'd love to hear from you!
                </p>
              </div>

              <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #6A6A6A; font-size: 12px;">
                  © 2025 PartaiBook. AI-Powered Party Planning for Real Life.
                </p>
              </div>
            </div>
          `
        }),
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed:', await emailResponse.text());
        // Don't fail the entire request if email fails
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
