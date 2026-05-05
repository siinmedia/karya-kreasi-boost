import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { makeWhatsappLink, whatsappNumber } from "../data/products";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak KKB - Jasa Gerobak & Kanopi Jepara" },
      {
        name: "description",
        content:
          "Hubungi KKB - Karya Kreasi Bersama untuk pembuatan gerobak usaha custom, kanopi, pagar, dan furniture di Jepara. Konsultasi gratis via WhatsApp.",
      },
      { property: "og:title", content: "Kontak KKB - Karya Kreasi Bersama" },
      {
        property: "og:description",
        content:
          "Konsultasi gerobak usaha modern, kanopi, dan pagar langsung dengan workshop profesional di Jepara.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    nama: "",
    wa: "",
    usaha: "",
    kebutuhan: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nama || !form.wa) {
      alert("Nama dan WhatsApp wajib diisi");
      return;
    }

    const text = `Halo KKB 👋

Saya ingin konsultasi:
Nama: ${form.nama}
WhatsApp: ${form.wa}
Jenis Usaha: ${form.usaha}
Kebutuhan: ${form.kebutuhan}

Mohon info estimasi & detailnya ya.`;

    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(link, "_blank");
  };

  return (
    <PageFrame>
      <main>
        {/* HERO CONTACT */}
        <section className="section-shell border-b bg-card">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Kontak KKB</p>
                <h1 className="section-title">
                  Konsultasi Gerobak, Kanopi & Custom Project
                </h1>
                <p className="section-lead">
                  Ceritakan kebutuhan usaha kamu. Tim kami siap bantu dari konsep,
                  desain, sampai produksi.
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
              {/* INFO */}
              <div className="grid gap-4 content-start">
                <div className="neo-card neo-card-yellow p-6">
                  <p className="font-bold text-lg">Workshop KKB</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Karang Rejo, Damarjati, Kalinyamatan, Jepara, Jawa Tengah
                  </p>
                </div>

                <div className="rounded-lg border bg-background px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1 font-medium">
                    mail@karyakreasibersama.com
                  </p>
                </div>

                <div className="rounded-lg border bg-background px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Jam Operasional
                  </p>
                  <p className="mt-1 font-medium">
                    Senin – Sabtu, 09.00 – 17.00
                  </p>
                </div>
              </div>

              {/* FORM */}
              <section className="neo-card bg-card p-6">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input
                    placeholder="Nama"
                    value={form.nama}
                    onChange={(e) => handleChange("nama", e.target.value)}
                    className="rounded-md border px-4 py-3"
                  />

                  <input
                    placeholder="Nomor WhatsApp"
                    value={form.wa}
                    onChange={(e) => handleChange("wa", e.target.value)}
                    className="rounded-md border px-4 py-3"
                  />

                  <select
                    value={form.usaha}
                    onChange={(e) => handleChange("usaha", e.target.value)}
                    className="rounded-md border px-4 py-3"
                  >
                    <option value="">Pilih jenis usaha</option>
                    <option>Minuman</option>
                    <option>Makanan</option>
                    <option>Retail</option>
                    <option>Lainnya</option>
                  </select>

                  <textarea
                    placeholder="Ceritakan kebutuhan (ukuran, desain, dll)"
                    value={form.kebutuhan}
                    onChange={(e) =>
                      handleChange("kebutuhan", e.target.value)
                    }
                    className="rounded-md border px-4 py-3 min-h-[120px]"
                  />

                  <button className="btn-neo btn-neo-primary w-full">
                    Kirim & Konsultasi WhatsApp
                  </button>
                </form>
              </section>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Lokasi Workshop</p>
                <h2 className="section-title">
                  Kunjungi Workshop KKB Jepara
                </h2>
                <p className="section-lead">
                  Bisa survei langsung material, rangka, dan hasil produksi.
                </p>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-xl overflow-hidden border shadow-neo">
              <iframe
                title="Lokasi KKB Jepara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6517854903263!2d110.74615648457578!3d-6.689981648125906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70df670ae480a7%3A0x58746cf7d3237eb0!2sYoga%20siin!5e0!3m2!1sid!2sid!4v1777963260152!5m2!1sid!2sid"
                className="w-full h-full border-0"
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