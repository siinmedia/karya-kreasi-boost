import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import kkbLogo from "../../assets/kkb-logo.png";
import { makeWhatsappLink } from "../../data/products";
import { AnnouncementBar } from "./announcement-bar";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/catalog", label: "Katalog" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;

  const isActive = (to: string) =>
    pathname === to || (to !== "/" && pathname.startsWith(to));

  // 🔥 LOCK SCROLL SAAT MENU BUKA
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={kkbLogo} className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <p className="text-sm font-extrabold">KKB</p>
            <p className="text-xs text-muted-foreground">
              Karya Kreasi Bersama
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${
                isActive(item.to)
                  ? "bg-brand-blue text-white"
                  : "hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={makeWhatsappLink()}
          target="_blank"
          className="hidden md:inline-flex btn-neo btn-neo-primary"
        >
          WhatsApp
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔥 MOBILE DRAWER FIXED */}
      <div
        className={`fixed inset-0 z-[999] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-5 flex flex-col gap-4 shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Menu</p>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl font-semibold transition ${
                  isActive(item.to)
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={makeWhatsappLink()}
            target="_blank"
            className="mt-auto text-center bg-black text-white py-3 rounded-xl font-semibold"
          >
            Konsultasi WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}