import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
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
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                isActive(item.to)
                  ? "bg-brand-blue text-white shadow"
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
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50">
          
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* MENU PANEL */}
          <div className="absolute right-0 top-0 h-full w-[75%] max-w-xs bg-white p-5 shadow-xl flex flex-col gap-4">
            
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <p className="font-bold">Menu</p>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* NAV ITEMS */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md font-semibold text-sm transition ${
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
              className="mt-auto text-center bg-black text-white py-3 rounded-md font-semibold"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-card text-foreground">
      <div className="section-container py-12">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KKB - Karya Kreasi Bersama
        </p>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}