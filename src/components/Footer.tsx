"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-5">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
        {/* Column 1 - About */}
        <div>
          <h4 className="text-xl font-semibold mb-6 relative pb-2">
            Dr Krishnanjan Chakraborty Clinic
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-primary" />
          </h4>
          <p className="text-light mb-4 leading-relaxed">
            507, Kalyan Nagar, Rahara, Barrackpore, Khardaha, West Bengal
            700112
          </p>
          <p className="text-light mb-2 flex items-center gap-2">
            <Phone size={16} className="text-primary" /> 098307 03777
          </p>
          <p className="text-light mb-2 flex items-center gap-2">
            <Mail size={16} className="text-primary" />{" "}
            info@drkrishnanjanchakraborty.in
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6 relative pb-2">
            Quick Links
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-primary" />
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/appointment", label: "Appointment" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-light hover:text-white hover:pl-1 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h4 className="text-xl font-semibold mb-6 relative pb-2">
            Services
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-primary" />
          </h4>
          <ul className="space-y-3">
            {[
              "Geriatric Care",
              "Diabetes Management",
              "Endocrinology",
              "Hypertension Care",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-light hover:text-white hover:pl-1 transition-all"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Stay Connected */}
        <div>
          <h4 className="text-xl font-semibold mb-6 relative pb-2">
            Stay Connected
            <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-primary" />
          </h4>
          <div className="flex gap-3 mb-6">
            {["facebook-f", "instagram", "twitter", "linkedin-in"].map(
              (icon) => (
                <a
                  key={icon}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-primary hover:-translate-y-1 transition-all"
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              )
            )}
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-none outline-none text-dark text-sm"
              required
            />
            <button type="submit" className="btn btn-secondary text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-5 border-t border-white/10 text-light text-sm">
        <p>&copy; 2026 Dr Krishnanjan Chakraborty Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
