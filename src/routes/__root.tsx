import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // SEO TITLE
      {
        title: "Jasa Pembuatan Gerobak Custom & Kanopi | KKB - Karya Kreasi Bersama",
      },

      // SEO DESCRIPTION
      {
        name: "description",
        content:
          "KKB - Karya Kreasi Bersama melayani pembuatan gerobak usaha custom, kanopi, pagar, dan furniture. Desain modern, kuat, dan siap pakai untuk bisnis Anda.",
      },

      { name: "author", content: "KKB - Karya Kreasi Bersama" },

      // OPEN GRAPH (WA / FB / IG)
      {
        property: "og:title",
        content: "KKB - Jasa Gerobak Custom & Kanopi Modern",
      },
      {
        property: "og:description",
        content:
          "Workshop profesional pembuatan gerobak usaha, kanopi, dan pagar dengan desain modern & siap pakai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },

      // TWITTER
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KKB - Gerobak Custom & Kanopi Modern",
      },
      {
        name: "twitter:description",
        content:
          "Jasa pembuatan gerobak usaha, kanopi, dan pagar dengan desain modern dan harga terjangkau.",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      // ✅ FAVICON
      {
        rel: "icon",
        href: "https://files.catbox.moe/ubdlw4.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}