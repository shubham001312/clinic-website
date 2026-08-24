"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-sm">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-dark">
            Dr Krishnanjan Chakraborty
          </span>
          <span className="hidden sm:inline text-xl md:text-2xl font-bold text-primary">
            Clinic
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium relative py-1 transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/appointment"
            className={`hidden sm:inline-block btn ${
              pathname === "/appointment" ? "btn-primary" : "btn-outline"
            }`}
          >
            Book Appointment
          </Link>
          <button
            className="lg:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md animate-slide-down z-50">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium text-lg ${
                    pathname === link.href ? "text-primary" : "text-dark"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="btn btn-primary mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
