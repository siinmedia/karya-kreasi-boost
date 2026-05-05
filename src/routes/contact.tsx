import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { makeWhatsappLink } from "../data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak KKB" },
      {
        name: "description",
        content:
          "Hubungi KKB untuk konsultasi gerobak usaha modern, permintaan harga, dan jadwal produksi.",
      },
      { property: "og:title", content: "Kontak KKB" },
      {
        property: "og:description",
        content: "Konsultasikan kebutuhan gerobak usaha modern bersama Karya Kreasi Bersama.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame>
      <main>
        <section className="section-shell border-b bg-card">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Contact</p>
                <h1 className="section-title">Ceritakan konsep usaha kamu</h1>
                <p className="section-lead">
                  Isi form ringkas atau langsung klik WhatsApp untuk diskusi ukuran, material,
                  warna, dan estimasi produksi.
                </p>
              </div>
              <a
                className="btn-neo btn-neo-accent"
                href={makeWhatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                Chat WhatsApp
              </a>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 content-start">
                <div className="neo-card neo-card-yellow p-6">
                  <p className="font-bold">Workshop KKB</p>
                  <p className="mt-2 font-medium text-muted-foreground">
                    Karang Rejo, Damarjati, Kalinyamatan, Jepara Regency, Central Java 59462
                  </p>
                </div>
                <div className="rounded-lg border bg-background px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1 font-medium">mail@karykakreasi.web.id</p>
                </div>
                <div className="rounded-lg border bg-background px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Jam operasional
                  </p>
                  <p className="mt-1 font-medium">Senin – Sabtu, 09.00 – 17.00</p>
                </div>
              </div>
              <section className="neo-card bg-card p-5">
                <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
                  <label className="grid gap-2 font-semibold">
                    Nama
                    <input
                      className="rounded-md border bg-background px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-ring"
                      placeholder="Nama kamu"
                    />
                  </label>
                  <label className="grid gap-2 font-semibold">
                    WhatsApp
                    <input
                      className="rounded-md border bg-background px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-ring"
                      placeholder="08xx xxxx xxxx"
                    />
                  </label>
                  <label className="grid gap-2 font-semibold">
                    Jenis usaha
                    <select
                      className="rounded-md border bg-background px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-ring"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih kategori
                      </option>
                      <option>Minuman</option>
                      <option>Makanan</option>
                      <option>Retail</option>
                      <option>Lainnya</option>
                    </select>
                  </label>
                  <label className="grid gap-2 font-semibold">
                    Kebutuhan
                    <textarea
                      className="min-h-32 rounded-md border bg-background px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-ring"
                      placeholder="Ceritakan ukuran, warna, dan konsep brand"
                    />
                  </label>
                  <button className="btn-neo btn-neo-primary w-fit" type="submit">
                    Kirim brief
                  </button>
                </form>
              </section>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Lokasi</p>
                <h2 className="section-title">Area workshop & konsultasi</h2>
                <p className="section-lead">
                  Datang langsung untuk lihat sample material dan finishing.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border shadow-neo">
              <iframe
                title="Peta lokasi KKB"
                src="https://www.google.com/maps?q=Jakarta%2C%20Indonesia&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
