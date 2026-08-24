"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { Home, User, Stethoscope, Phone, CalendarDays } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Stethoscope },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [tapped, setTapped] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ key: string; x: number; y: number } | null>(null);

  const handleTap = useCallback((href: string, e: React.PointerEvent) => {
    setTapped(href);
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      key: `${href}-${Date.now()}`,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setTapped(null), 400);
    setTimeout(() => setRipple(null), 600);
  }, []);

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
            const isTapped = tapped === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onPointerDown={(e) => handleTap(link.href, e)}
                  className={`flex flex-col items-center justify-center gap-0.5 w-14 py-1 rounded-xl relative overflow-hidden
                    ${isActive ? "text-primary" : "text-gray"}
                    ${isTapped ? "animate-nav-bounce" : ""}`}
                >
                  {/* Ripple */}
                  {ripple?.key.startsWith(link.href) && (
                    <span
                      className="absolute w-12 h-12 rounded-full bg-primary/15 animate-ripple pointer-events-none"
                      style={{ left: ripple.x - 24, top: ripple.y - 24 }}
                    />
                  )}
                  <div
                    className={`p-1 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10"
                        : ""
                    } ${isTapped ? "scale-90 bg-primary/15" : ""}`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 1.8}
                      className={`transition-transform duration-150 ${isTapped ? "scale-110" : ""}`}
                    />
                  </div>
                  <span className={`text-[10px] font-medium leading-none transition-all duration-150 ${
                    isTapped ? "translate-y-[-1px]" : ""
                  }`}> 
                    {link.label}
                  </span>
                  {isActive && !isTapped && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
                  )}
                  {isTapped && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-10 h-[3px] bg-accent rounded-b-full animate-slide-in" />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="relative">
            {(() => {
              const bookTapped = tapped === "/appointment";
              return (
                <Link
                  href="/appointment"
                  onPointerDown={(e) => handleTap("/appointment", e)}
                  className={`flex flex-col items-center justify-center gap-0.5 w-14 py-1 rounded-xl relative overflow-hidden
                    ${pathname === "/appointment" ? "text-primary" : "text-gray"}
                    ${bookTapped ? "animate-nav-bounce" : ""}`}
                >
                  {/* Ripple */}
                  {ripple?.key.startsWith("/appointment") && (
                    <span
                      className="absolute w-12 h-12 rounded-full bg-primary/15 animate-ripple pointer-events-none"
                      style={{ left: ripple.x - 24, top: ripple.y - 24 }}
                    />
                  )}
                  <div
                    className={`p-1.5 rounded-2xl transition-all duration-200 ${
                      pathname === "/appointment"
                        ? "bg-primary text-white shadow-md"
                        : "bg-primary/10 text-primary"
                    } ${bookTapped ? "scale-90 shadow-lg" : ""}`}
                  >
                    <CalendarDays
                      size={20}
                      strokeWidth={pathname === "/appointment" ? 2.5 : 1.8}
                      className={`transition-transform duration-150 ${bookTapped ? "scale-110" : ""}`}
                    />
                  </div>
                  <span className={`text-[10px] font-medium leading-none transition-all duration-150 ${
                    bookTapped ? "translate-y-[-1px]" : ""
                  }`}>
                    Book
                  </span>
                  {pathname === "/appointment" && !bookTapped && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[3px] bg-primary rounded-b-full" />
                  )}
                  {bookTapped && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-10 h-[3px] bg-accent rounded-b-full animate-slide-in" />
                  )}
                </Link>
              );
            })()}
          </li>
        </ul>
      </nav>
    </>
  );
}
