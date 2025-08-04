"use client";

import React from "react";
import { Sparkles, Star, Calendar, Shield, DollarSign, Users, Layout, Bot, X } from "lucide-react";

// Utility function from your homepage
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// Badge component matching your design
const Badge = ({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`} style={style}>
    {children}
  </span>
);

// Button component matching your design
const Button = ({ 
  children, 
  className = "", 
  size = "default",
  variant = "primary",
  onClick,
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: "default" | "lg";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  [key: string]: any;
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition focus:outline-none focus:ring-4 focus:ring-primary/30";
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  const variantClasses = variant === "secondary" 
    ? "bg-white text-primary hover:bg-white/90 border-2 border-primary"
    : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <button 
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// How It Works section matching your homepage
const HowItWorks = () => (
  <section className="w-full pt-16 pb-8 px-4 bg-background">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 font-sans drop-shadow-sm" style={{ color: "#222222" }}>
        How PartaiBook Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-2">
        {[
          {
            icon: "👤",
            title: "1. Create your profile",
            desc: "Showcase your services, prices, and what makes you special. Upload photos and videos of your best work and set your availability as well as train your AI assistant.",
            bgColor: "#00CBA7",
          },
          {
            icon: "⚡",
            title: "2. Get discovered and booked",
            desc: "When a customer searches for your service and you’re available, your profile appears in their results, ready to be booked instantly. Don't worry, you can decline too.",
            bgColor: "#A78BFA",
          },
          {
            icon: "🎉",
            title: "3. Chat, confirm, and get paid",
            desc: "Connect with your customer, lock in the details, and let us handle the rest. Deposits are secured on booking, and full payment is released on the day of the event.",
            bgColor: "#FF8C42",
          },
        ].map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-4">
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl"
                style={{ backgroundColor: `rgba(${hexToRgb(step.bgColor)}, 0.2)` }}
              >
                {step.icon}
              </span>
            </div>
            <h3 className="text-[22px] mb-5" style={{ color: "#222222", fontSize: "22px", fontWeight: "600", lineHeight: "1.3" }}>{step.title}</h3>
            <p className="text-[16px] leading-relaxed" style={{ color: "#6A6A6A" }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Item component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200">
      <button
        className="w-full px-5 py-3 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-semibold pr-4" style={{ color: "#222222" }}>{question}</h3>
        <span 
          className="text-xl font-light transition-transform duration-200 flex-shrink-0"
          style={{ 
            color: "#00CBA7",
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-3">
          <p className="text-sm leading-relaxed" style={{ color: "#6A6A6A" }}>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Signup Modal Component
const SignupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    businessType: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Here we'll add Supabase integration
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({ name: '', email: '', businessType: '', location: '' });
        // Close modal after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#222222" }}>
              Yay, you're on the waitlist!
            </h3>
            <p className="text-gray-600">
              We've sent you a welcome email.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#222222" }}>
                Join the Waitlist
              </h3>
              <p className="text-gray-600">
                Be the first to know when PartaiBook launches!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#222222" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#222222" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium mb-2" style={{ color: "#222222" }}>
                  What type of vendor are you?
                </label>
                <select
                  id="businessType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={formData.businessType}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                >
                  <option value="">Select your business type</option>
                  <option value="Caterers & Bakers">Caterers & Bakers</option>
                  <option value="Decorators & Balloon Artists">Decorators & Balloon Artists</option>
                  <option value="Venues & Private Spaces">Venues & Private Spaces</option>
                  <option value="DJs & Hosts">DJs & Hosts</option>
                  <option value="Entertainers">Entertainers</option>
                  <option value="Photographers">Photographers</option>
                  <option value="Party Rental Services">Party Rental Services</option>
                  <option value="Treat & Favor Makers">Treat & Favor Makers</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2" style={{ color: "#222222" }}>
                  Where is your business based?
                </label>
                <select
                  id="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                >
                  <option value="">Select your location</option>
                  <option value="Bronx, NY">Bronx, NY</option>
                  <option value="Queens, NY">Queens, NY</option>
                  <option value="Brooklyn, NY">Brooklyn, NY</option>
                  <option value="Manhattan, NY">Manhattan, NY (coming soon)</option>
                  <option value="Staten Island, NY">Staten Island, NY (coming soon)</option>
                  <option value="Other NYC Area">Other NYC Area (coming soon)</option>
                  <option value="Outside NYC">Outside NYC (coming later)</option>
                </select>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl font-semibold transition-colors disabled:opacity-50"
                style={{ 
                  backgroundColor: "#00CBA7", 
                  color: "white",
                  border: "none"
                }}
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to receive launch updates and early access invites.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default function VendorLandingPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = React.useState(false);

  const handleJoinPartaiBook = () => {
    setIsSignupModalOpen(true);
  };

  // Force color override after component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const heroP1 = document.querySelector('.hero-paragraph-1');
      const heroP2 = document.querySelector('.hero-paragraph-2');
      
      if (heroP1) {
        (heroP1 as HTMLElement).style.color = '#222222';
        (heroP1 as HTMLElement).style.setProperty('color', '#222222', 'important');
      }
      if (heroP2) {
        (heroP2 as HTMLElement).style.color = '#222222';
        (heroP2 as HTMLElement).style.setProperty('color', '#222222', 'important');
      }
      
      // Temporary: Let's also log to console to confirm it's working
      console.log('Color override applied - now using Airbnb black #222222');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
      {/* Header */}
      <header className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold airbnb-header" style={{ lineHeight: "1.4" }}>PartaiBook</span>
              <Badge className="border border-[#A78BFA]/30" style={{ backgroundColor: "rgba(167, 139, 250, 0.2)", color: "#A78BFA" }}>
                For Vendors
              </Badge>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-border" />
      </header>

      {/* Hero Section */}
      <section className="py-16 px-8 pb-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 airbnb-header" style={{ lineHeight: "1.2" }}>
            You make parties happen. <br />
            <span style={{ color: "#00CBA7" }}>We make bookings effortless.</span>
          </h2>
          
          <div 
            className="hero-paragraph-1" 
            style={{ 
              fontSize: "18px !important", 
              color: "#222222 !important",
              fontWeight: "400 !important",
              lineHeight: "1.5 !important",
              fontFamily: "inherit !important",
              letterSpacing: "normal !important",
              marginBottom: "1.5rem",
              maxWidth: "50rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            You're not just a vendor - you're the reason celebrations become memories. But you didn't start your business to spend hours on admin, chase customers for payments, or get ghosted after sending your price list.
          </div>
          
          <div 
            className="hero-paragraph-2" 
            style={{ 
              fontSize: "18px !important",
              color: "#222222 !important",
              fontWeight: "400 !important",
              lineHeight: "1.5 !important",
              fontFamily: "inherit !important",
              letterSpacing: "normal !important",
              marginBottom: "1rem",
              maxWidth: "50rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            PartaiBook brings bookings your way and puts your business on autopilot, with AI that handles admin, secures payments automatically, and even answers repetitive questions with your own mini FAQ assistant - all in one simple dashboard.
          </div>

          <div 
            style={{ 
              fontSize: "18px !important",
              color: "#222222 !important",
              fontWeight: "600 !important",
              lineHeight: "1.5 !important",
              fontFamily: "inherit !important",
              letterSpacing: "normal !important",
              marginBottom: "2rem",
              maxWidth: "50rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Get discovered, get booked and get paid so you can focus on what you do best.
          </div>

          <Button onClick={handleJoinPartaiBook} className="mb-8 px-6 py-3 text-base rounded-xl" style={{ backgroundColor: "#FF8C42", color: "white", border: "none" }}>
            Become a Founding Vendor in NYC!
          </Button>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge className="border px-2 py-1 md:px-3 md:py-2 rounded-xl text-xs md:text-sm" style={{ borderColor: "#A78BFA", color: "#A78BFA" }}>
              Instant Bookings
            </Badge>
            <Badge className="border-primary text-primary px-2 py-1 md:px-3 md:py-2 rounded-xl border text-xs md:text-sm">
              Free to Join
            </Badge>
            <Badge className="border-accent text-accent px-2 py-1 md:px-3 md:py-2 rounded-xl border text-xs md:text-sm">
              Built-In Admin Assistant
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Join PartaiBook */}
      <section className="py-16 px-4 bg-[#effdfa]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 font-sans drop-shadow-sm" style={{ color: "#222222" }}>
            Why Join PartaiBook?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Real leads, not time-wasters",
                desc: "Get bookings from people actively planning events, not just browsing. That means fewer flaky inquiries and more high-intent bookings from customers who are ready to lock things in.",
                bgColor: "bg-white"
              },
              {
                icon: <Calendar className="h-8 w-8" style={{ color: "#A78BFA" }} />,
                title: "Bookings that fit your schedule",
                desc: "Set your hours, add buffer time, or upload availability screenshots so you can avoid double bookings and customers only see you when you’re free.",
                bgColor: "bg-white"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-accent" />,
                title: "Paid, protected, predictable",
                desc: "Deposits are locked in. Final payment is processed before the event. You get peace of mind knowing you never waste time on no-shows or late transfers.",
                bgColor: "bg-white"
              },
              {
                icon: <Bot className="h-8 w-8 text-primary" />,
                title: "Let AI do the talking",
                desc: "Your custom FAQ Assistant answers common customer questions for you, saving hours in the DMs and freeing you up to focus on what you love.",
                bgColor: "bg-white"
              },
              {
                icon: <Layout className="h-8 w-8" style={{ color: "#A78BFA" }} />,
                title: "Everything in one place",
                desc: "Messages, bookings, payments, reviews, and your own booking link - all in one dashboard. Say goodbye to juggling three different apps.",
                bgColor: "bg-white"
              },
              {
                icon: <Star className="h-8 w-8 text-accent" />,
                title: "Build your reputation, get more bookings",
                desc: "Great reviews = more visibility, more bookings, more growth. Top-rated vendors get featured on our homepage, helping you stand out and get discovered faster.",
                bgColor: "bg-white"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.bgColor} rounded-2xl p-6 md:p-8 border border-border`}>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: "#222222" }}>{feature.title}</h3>
                </div>
                <p className="leading-relaxed text-sm md:text-base" style={{ color: "#6A6A6A" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h3 className="font-semibold mb-2" style={{ color: "#222222", fontSize: "22px" }}>First 90 days? Fee-free.</h3>
            <p className="text-lg" style={{ color: "#6A6A6A" }}>
              Join early and enjoy 90 days fee-free. After that, it’s just 5% on deposits, not full payments. No listing fees, no monthly charges.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Perfect For Section */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-[22px] text-center mb-8 font-sans" style={{ color: "#222222", fontSize: "22px", fontWeight: "600", lineHeight: "1.3" }}>
            Perfect for anyone who brings parties to life:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Caterers & Bakers",
                subtitle: "Cakes, buffets, grazing tables, food trucks, treat tables"
              },
              {
                title: "Decorators & Balloon Artists",
                subtitle: "Balloon arches, backdrops, themed setups"
              },
              {
                title: "Venues & Private Spaces",
                subtitle: "Party rooms, gardens, community halls, unique spaces"
              },
              {
                title: "DJs & Hosts",
                subtitle: "Party DJs, MCs, karaoke hosts, sound systems"
              },
              {
                title: "Entertainers",
                subtitle: "Magicians, mascots, face painting, games, performers"
              },
              {
                title: "Photographers",
                subtitle: "Event photographers, 360 booths, print booths, selfie pods"
              },
              {
                title: "Party Rental Services",
                subtitle: "Tables, chairs, bouncy castles, soft play, garden games"
              },
              {
                title: "Treat & Favor Makers",
                subtitle: "Custom party bags, sweet cones, edible gifts, keepsakes"
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <h3 className="font-semibold text-center mb-3 group-hover:text-primary transition-colors" style={{ color: "#222222", fontSize: "16px" }}>
                  {type.title}
                </h3>
                <p className="text-sm text-center leading-relaxed" style={{ color: "#6A6A6A" }}>
                  {type.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagine This Section */}
      <section className="py-16 px-4 !bg-[#FDF9F5] relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 font-sans drop-shadow-sm airbnb-header" style={{ color: "#222222" }}>
            The Old Way vs. The PartaiBook Way
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-4xl mb-2 block">😩</span>
                <h3 className="text-xl font-bold text-red-700">Your week today:</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Answering the same questions multiple times a week",
                  "Chasing deposits from customers that vanish",
                  "Posting daily on your socials hoping for bookings",
                  "Ghosted after sending your price list",
                  "Juggling different apps trying to keep track of bookings",
                  "Losing track of who’s booked, paid, or canceled"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-red-500 text-base">❌</span>
                    <span className="text-red-700 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-4xl mb-2 block">🎉</span>
                <h3 className="text-xl font-bold text-green-700">Your week with PartaiBook:</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Bookings come to you - no chasing or sending reminders",
                  "Payments handled automatically with deposits locked in at booking",
                  "Get paid the same day of events with Instant Banking",
                  "More time on your hands thanks to your trained FAQ assistant",
                  "Organized booking information at your fingertips",
                  "Never missing a booking thanks to your synced calendar"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-green-500 text-base">✅</span>
                    <span className="text-green-700 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 font-sans drop-shadow-sm" style={{ color: "#222222" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Where is PartaiBook available?",
                answer: "We're launching in New York City first! If you're a vendor based in the Bronx, Queens, or Brooklyn, you'll be the first vendors who can create profiles and take bookings as soon as we launch. We're expanding to Manhattan, Staten Island, and other cities soon after - join the waitlist to be first in line when we reach your area. You'll need to be registered as a business or sole trader with your local tax authority and accept digital payments."
              },
              {
                question: "Does it cost to join PartaiBook?",
                answer: "Nope, it’s free to create your profile and showcase your services. Founding members get 90 days fee-free bookings, we'll take 0% commission. After 90 days, we only take 5% of the deposit (not the full booking amount) as a platform fee. You keep the majority of your earnings! There are no hidden costs or montlhly charges."
              },
              {
                question: "How do I get paid?",
                answer: "Deposits are automatically collected at booking and held securely. Final payments are processed before your event and we release the funds to your account the day of the event. You're always protected."
              },
              {
                question: "What services can list on PartaiBook?",
                answer: "If you help make parties happen, like baking, catering, decorating, DJing, entertaining, or providing a venue you’re welcome to join."
              },
              {
                question: "Do I need to be a registered business?",
                answer: "Yes. To protect both sides, vendors must be registered as a business or sole trader with their local tax authority and accept digital payments."
              },
              {
                question: "Can I control my availability?",
                answer: "For now, you can set your availability by either manually editing the calendar in the dashboard, or uploading a photo of your handwritten bookings (even a screenshot of your digital calendar) and the AI will fill in the dates for you. You'll also be able to add buffer time between orders and black out days you're unavailable. Editing your availability can be updated easily in the dashboard, and we’ll notify you when new bookings come in."
              },
              {
                question: "What happens if a customer cancels?",
                answer: "We include flexible cancellation policies which protects you. Deposits are non-refundable unless the customer cancels within the agreed window, typically 48 or 72 hours before the event. We’ll also notify you of any cancellations so you can adjust your schedule accordingly."
              },
              {
                question: "Can I invite my own clients to book me here?",
                answer: "Yes! You can share your unique booking link with your clients, allowing them to book your services directly through PartaiBook. As a founding member, you’ll also receive a referral code for up to 5 clients - each one gets $10 off their booking which will help you build verified reviews to boost your profile and ranking. Everyone wins."
              },
              {
                question: "What’s the AI FAQ Assistant?",
                answer: "You can train your very own mini assistant to answer common questions from customers (like delivery, pricing, or custom options). This saves you time and improves your response rate. You'll be able to edit the answers and add new questions as needed, so it’s always up-to-date with your offerings. Over time, it learns from your interactions to provide even better responses."
              },
              {
                question: "How do I get started?",
                answer: "Right now we’re inviting vendors to join our waitlist. Once you sign up, we’ll send you an invite to create your profile and get started. We’re launching soon, so you’ll be one of the first to experience PartaiBook!"
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-4 px-4 bg-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-6 font-sans drop-shadow-sm" style={{ color: "#222222" }}>
            Be one of the first to join.
          </h2>
          <p className="text-[18px] leading-relaxed mb-6" style={{ color: "#222222" }}>
            Get early access to future updates and features as a founding member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleJoinPartaiBook}
              className="px-6 py-3 text-base rounded-xl"
              style={{ backgroundColor: "#FF8C42", color: "white", border: "none" }}
              aria-label="Become a founding vendor now"
            >
              Claim Your 90-day Free Trial Invite
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-muted text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold" style={{ color: "#222222" }}>PartaiBook</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>

          <div className="w-full border-t border-border my-6" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 PartaiBook. All rights reserved. AI-Powered Party Planning for Real Life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
