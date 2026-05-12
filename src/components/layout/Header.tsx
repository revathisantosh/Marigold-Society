"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LOGO_MARK = "/logos/1.svg";
const LOGO_WORDMARK = "/logos/logo with name.svg";

const navLinks = [
  { href: "/seed-library", label: "Seed Library" },
  { href: "/almanac", label: "The Almanac" },
  { href: "/membership", label: "Membership" },
  { href: "/shop", label: "Shop" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const lightNav = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled
            ? "bg-parchment/95 backdrop-blur-sm border-b border-marigold/20 py-3"
            : "bg-transparent py-6"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {lightNav ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_MARK}
                  alt=""
                  width={160}
                  height={160}
                  className={cn(
                    "h-10 w-auto transition-all duration-500 md:h-11",
                    "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.65))]"
                  )}
                />
                <span
                  className={cn(
                    "font-wordmark font-medium tracking-[0.04em] transition-all duration-500 text-lg md:text-[1.35rem] text-white hidden sm:block",
                    "drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                  )}
                >
                  The Marigold Society
                </span>
              </>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_WORDMARK}
                  alt=""
                  width={320}
                  height={80}
                  className={cn(
                    "h-7 w-auto max-w-[min(100vw-8rem,220px)] object-left object-contain md:h-8",
                    "transition-all duration-500"
                  )}
                />
              </>
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "label transition-colors duration-300",
                  lightNav
                    ? "text-white/85 hover:text-hero-yellow"
                    : "text-ink/70 hover:text-marigold",
                  pathname === href && (lightNav ? "text-hero-yellow" : "text-marigold")
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <Link
              href="/greenhouse"
              className={cn(
                "hidden lg:block label transition-colors duration-300",
                lightNav ? "text-white/75 hover:text-hero-yellow" : "text-ink/60 hover:text-maroon"
              )}
            >
              Greenhouse
            </Link>
            <Link
              href="/cart"
              className="relative group"
              aria-label="Cart"
            >
              <CartIcon
                className={cn(
                  "w-5 h-5 transition-colors",
                  lightNav ? "text-white/80 group-hover:text-hero-yellow" : "text-ink/70 group-hover:text-marigold"
                )}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-1"
              aria-label="Open menu"
            >
              <MenuIcon className={cn("w-6 h-6", lightNav ? "text-white" : "text-ink")} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-parchment"
          >
            <div className="h-full flex flex-col px-8 py-12">
              <div className="flex justify-between items-center mb-16">
                <Link href="/" className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={LOGO_WORDMARK}
                    alt=""
                    width={280}
                    height={70}
                    className="h-8 w-auto max-w-[70vw] object-contain object-left"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-6 h-6 text-ink" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={href}
                      className="font-display italic text-4xl text-ink hover:text-marigold transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto">
                <Link href="/greenhouse" className="label text-ink/60">
                  The Greenhouse
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="17" y2="17" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
