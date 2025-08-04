"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#222222" }}>
            Privacy Policy for Vendors
          </h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: August 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6" style={{ color: "#6A6A6A" }}>
              Partaibook ("we," "us," or "our") is committed to protecting the privacy of our vendors. This Privacy Policy outlines how we collect, use, and store your data when you use our platform.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                1. Information We Collect
              </h2>
              <p className="mb-4" style={{ color: "#6A6A6A" }}>
                When you create a vendor profile or interact with our platform, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Contact information (name, email, phone)</li>
                <li>Business details (name, description, services, pricing)</li>
                <li>Uploaded content (photos, videos, menus, availability)</li>
                <li>Booking and communication history</li>
                <li>Payment-related information (via third-party processors)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                2. How We Use Your Data
              </h2>
              <p className="mb-4" style={{ color: "#6A6A6A" }}>
                We use your data to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Create and display your vendor profile</li>
                <li>Connect you with potential customers</li>
                <li>Facilitate bookings and payments</li>
                <li>Communicate important updates or changes</li>
                <li>Improve and personalize our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                3. Third-Party Services
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                We use third-party services (e.g., Supabase, payment processors) to power our platform. Your data may be shared with these partners only for operational purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                4. Your Rights
              </h2>
              <p className="mb-4" style={{ color: "#6A6A6A" }}>
                You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#6A6A6A" }}>
                <li>Update or delete your account information anytime</li>
                <li>Request a copy of your data</li>
                <li>Contact us to ask questions about your privacy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>
                5. Contact
              </h2>
              <p style={{ color: "#6A6A6A" }}>
                For questions or concerns, please email us at:
              </p>
              <p className="mt-2">
                <span className="text-lg">📧</span> <a href="mailto:support@partaibook.com" className="text-primary hover:underline">support@partaibook.com</a>
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
