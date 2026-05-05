import { Link } from "@tanstack/react-router";
import kkbLogo from "../../assets/kkb-logo.png";
import { makeWhatsappLink } from "../../data/products";
import { AnnouncementBar } from "./announcement-bar";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/catalog", label: "Katalog" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
] as const;

const secondaryNavItems = navItems.filter((item) => item.to !== "/");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          {/* LOGO TANPA BORDER */}
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg p-1.5 transition-transform group-hover:-translate-y-0.5 sm:h-14 sm:w-14">
            <img
              src={kkbLogo}
              alt="Logo Karya Kreasi Bersama"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold sm:text-base">
              Karya Kreasi Bersama
            </span>
            <span className="block truncate text-xs font-medium text-muted-foreground">
              Gerobak modern siap pakai
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigasi utama">
          {secondaryNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md border bg-card px-4 py-2 text-sm font-semibold shadow-neo-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-brand-blue text-accent-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="btn-neo btn-neo-primary hidden sm:inline-flex"
          href={makeWhatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <nav className="grid grid-cols-3 gap-2 px-4 pb-3 md:hidden" aria-label="Navigasi mobile">
        {secondaryNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-md border bg-card px-2 py-2 text-center text-xs font-semibold shadow-neo-sm"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-brand-blue text-accent-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-card text-foreground">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* LOGO TANPA BORDER */}
              <img
                src={kkbLogo}
                alt="Logo KKB"
                className="h-12 w-12 object-contain"
              />
              <p className="text-lg font-extrabold">Karya Kreasi Bersama</p>
            </div>

            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
              Solusi gerobak usaha modern & siap pakai untuk brand kuliner, minuman, dan retail.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Navigasi
            </p>
            <ul className="mt-4 grid gap-2 text-sm font-medium">
              {secondaryNavItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Kontak
            </p>
            <ul className="mt-4 grid gap-2 text-sm font-medium text-foreground/80">
              <li>Karang Rejo, Damarjati, Kalinyamatan, Jepara Regency, Central Java 59462</li>
              <li>mail@karykakreasi.web.id</li>
              <li>Senin – Sabtu, 09.00 – 17.00</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Mulai proyek
            </p>
            <a
              className="btn-neo btn-neo-secondary mt-4"
              href={makeWhatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi sekarang
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Karya Kreasi Bersama. All rights reserved.</p>
          <p>Workshop kreatif gerobak usaha modern.</p>
        </div>
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