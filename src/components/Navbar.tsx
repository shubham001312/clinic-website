"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Stethoscope, Phone, CalendarDays } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Stethoscope },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ═══════════════ DESKTOP NAVBAR (lg+) ═══════════════ */}
      <nav className="hidden lg:block sticky top-0 z-[1000] bg-white shadow-sm">
        <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-dark">
              Dr Krishnanjan Chakraborty
            </span>
            <span className="text-2xl font-bold text-primary">Clinic</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-medium relative py-1 transition-colors flex items-center gap-1.5 ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-dark hover:text-primary"
                      }`}
                    >
                      <Icon size={18} />
                      {link.label}
                      {pathname === link.href && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/appointment"
              className={`btn ${
                pathname === "/appointment" ? "btn-primary" : "btn-outline"
              }`}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE TOP BAR (< lg) ═══════════════ */}
      <nav className="lg:hidden sticky top-0 z-[1000] bg-white shadow-sm">
        <div className="flex justify-between items-center h-14 px-4">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">DKC</span>
            </div>
            <span className="text-sm font-semibold text-dark leading-tight">
              Dr. K. Chakraborty
            </span>
          </Link>
          <Link
            href="/appointment"
            className="text-xs font-medium bg-primary text-white px-3 py-1.5 rounded-full"
          >
            Book
          </Link>
        </div>
      </nav>

      {/* ═══════════════ MOBILE BOTTOM BAR (< lg) ═══════════════ */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <ul className="flex items-center justify-around h-16 px-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex flex-col items-center justify-center gap-0.5 w-14 py-1 rounded-xl transition-all ${
                    isActive
                      ? "text-primary scale-105"
                      : "text-gray hover:text-dark"
                  }`}
                >
                  <div
                    className={`p-1 rounded-xl transition-all ${
                      isActive
                        ? "bg-primary/10"
                        : ""
                    }`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 1.8}
                    />
                  </div>
                  <span className="text-[10px] font-medium leading-none">
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/appointment"
              className={`flex flex-col items-center justify-center gap-0.5 w-14 py-1 rounded-xl transition-all ${
                pathname === "/appointment"
                  ? "text-primary scale-105"
                  : "text-gray hover:text-dark"
              }`}
            >
              <div
                className={`p-1.5 rounded-2xl transition-all ${
                  pathname === "/appointment"
                    ? "bg-primary text-white shadow-md"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <CalendarDays size={20} strokeWidth={pathname === "/appointment" ? 2.5 : 1.8} />
              </div>
              <span className="text-[10px] font-medium leading-none">
                Book
              </span>
              {pathname === "/appointment" && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
