"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const navItems = [
  { href: "#home", label: "Home", external: false },
  { href: "#services", label: "Services", external: false },
  { href: "#about", label: "About Us", external: false },
  { href: "/our-team", label: "Our Team", external: true },
  { href: "/gallery", label: "Gallery", external: true },
  { href: "#reviews", label: "Reviews", external: false },
  { href: "#contact", label: "Contact", external: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleClick = (item: { href: string; label: string; external: boolean }) => {
    setOpen(false); // Close mobile menu

    if (!item.external) {
      // For single-page links, navigate to the home page with the hash
      router.push(`/${item.href}`);
    } else {
      // For multi-page links, navigate directly
      router.push(item.href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mgtc.png"
              alt="Mighty Gurkha Logo"
              width={36}
              height={36}
              className="inline-flex rounded-md object-cover"
            />
            <span className="text-lg font-bold tracking-tight">
              Mighty <span className="text-green-700">Gurkha</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.external ? item.href : `/${item.href}`}
                onClick={(e) => {
                  if (!item.external && window.location.pathname === "/") {
                    e.preventDefault(); // Prevent default link behavior on home page
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  } else if (!item.external) {
                    // Navigate to the home page with hash
                    router.push(`/${item.href}`);
                    e.preventDefault(); // Prevent default link behavior
                  }
                }}
                className="text-slate-700 hover:text-emerald-700 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/#contact");
                e.preventDefault();
              }
            }} className="btn-primary">
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.external ? item.href : `/${item.href}`}
                onClick={(e) => {
                  setOpen(false);
                  if (!item.external && window.location.pathname === "/") {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  } else if (!item.external) {
                    router.push(`/${item.href}`);
                    e.preventDefault();
                  }
                }}
                className="block rounded-md px-3 py-2 text-slate-800 hover:bg-emerald-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                setOpen(false);
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push("/#contact");
                  e.preventDefault();
                }
              }}
              className="btn-primary w-full"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}