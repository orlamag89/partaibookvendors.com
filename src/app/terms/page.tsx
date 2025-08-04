"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <a href="/" className="cursor-pointer">
              <img src="/logo.png" alt="Partaibook" className="h-16 w-auto" />
            </a>
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#222222" }}>
            Terms of Service for Vendors
          </h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: August 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6" style={{ color: "#6A6A6A" }}>
              Welcome to Partaibook. By creating a vendor profile and using our platform, you agree to the following terms:
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                1. Vendor Eligibility
              </h2>
              <p className="mb-4" style={{ color: "#6A6A6A" }}>
                You must:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Be a legitimate business or sole trader</li>
                <li>Provide accurate information on your profile</li>
                <li>Deliver services booked through our platform in a timely and professional manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                2. Fees
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Joining Partaibook is free</li>
                <li>For founding members, there is no commission during your first 90 days</li>
                <li>After 90 days, we take a 5% commission on deposits for confirmed bookings</li>
                <li>No listing fees or monthly subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                3. Cancellations and No-Shows
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Deposits are non-refundable to customers unless required by law or our platform rules</li>
                <li>If you cancel or fail to deliver services, you may be removed from the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                4. Use of Platform
              </h2>
              <p className="mb-4" style={{ color: "#6A6A6A" }}>
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Misrepresent your services</li>
                <li>Bypass the platform to avoid fees</li>
                <li>Abuse, harass, or defraud users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                5. Termination
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                We reserve the right to suspend or remove your account at our discretion if you breach these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                6. Limitation of Liability
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                Partaibook is not responsible for disputes between vendors and customers. However, we may step in to mediate or resolve certain issues where needed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                7. Changes
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                We may update these terms occasionally. We'll notify you if any significant changes occur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                8. Contact
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                For questions, email:
              </p>
              <p className="mt-2">
                <span className="text-lg">📧</span> <a href="mailto:vendors@partaibook.com" className="text-primary hover:underline">vendors@partaibook.com</a>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-colors"
              style={{ backgroundColor: "#00CBA7", color: "white" }}
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 bg-muted text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold" style={{ color: "#222222" }}>Partaibook</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>

          <div className="w-full border-t border-border my-6" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Partaibook. All rights reserved. AI-Powered Party Planning for Real Life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
