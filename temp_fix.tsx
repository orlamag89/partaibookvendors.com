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
                desc: "Bookings come from people actively searching for services like yours which means less flaky customers and more real opportunities.",
                bgColor: "bg-white"
              },
              {
                icon: <Calendar className="h-8 w-8" style={{ color: "#A78BFA" }} />,
                title: "Bookings that fit your schedule",
                desc: "You're only shown when you're free - sync or upload screenshots of your calendar, set your hours, and add buffer time so you never double book or forget a booking.",
                bgColor: "bg-white"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-accent" />,
                title: "Paid, protected, predictable",
                desc: "Deposits are locked in. Full payment hits your account on event day via Instant Banking, giving you peace of mind.",
                bgColor: "bg-white"
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Build your reputation, get more bookings",
                desc: "The better your reviews, the more visibility (and bookings) you get. It's that simple.",
                bgColor: "bg-white"
              },
              {
                icon: <Layout className="h-8 w-8 text-accent" />,
                title: "All-in-one dashboard",
                desc: "Messages, bookings, payments, reviews - and your own shareable booking link - making your entire business simplified.",
                bgColor: "bg-white"
              },
              {
                icon: <Bot className="h-8 w-8" style={{ color: "#A78BFA" }} />,
                title: "Let AI do the talking",
                desc: "Your custom FAQ Assistant answers common questions for you so you don't have to, giving you more time to put into other parts of your business.",
                bgColor: "bg-white"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.bgColor} rounded-2xl p-8 border border-border`}>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold" style={{ color: "#222222" }}>{feature.title}</h3>
                </div>
                <p className="leading-relaxed" style={{ color: "#6A6A6A" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#222222" }}>🏰 First 90 days? Fee-free.</h3>
            <p className="text-lg" style={{ color: "#6A6A6A" }}>
              Our thank-you for joining early. After that, just 8% on deposits. No listing fees, ever.
            </p>
          </div>
        </div>
      </section>
