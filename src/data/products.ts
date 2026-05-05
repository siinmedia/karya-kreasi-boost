import gerobakKopi from "../assets/kkb-gerobak-kopi.jpg";
import gerobakMakanan from "../assets/kkb-gerobak-makanan.jpg";
import gerobakMini from "../assets/kkb-gerobak-mini.jpg";
import kanopiRumah from "../assets/kkb-kanopi-rumah.jpg";
import pagarRumah from "../assets/kkb-pagar-rumah.jpg";
import furnitureRumah from "../assets/kkb-furniture-rumah.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Minuman" | "Makanan" | "Retail" | "Kanopi" | "Pagar" | "Furniture";
  price: string;
  specs: string[];
  materials: string[];
  short: string;
  image: string;
  accent: "yellow" | "purple" | "blue";
};

export const whatsappNumber = "6285155145788";

export const products: Product[] = [
  {
    slug: "gerobak-kopi-modular",
    name: "Gerobak Kopi Modular",
    category: "Minuman",
    price: "Mulai Rp 7,8 jt",
    specs: [
      "180 × 75 × 210 cm",
      "Rak servis stainless",
      "Lampu kerja LED",
      "Panel branding custom",
    ],
    materials: ["Rangka besi hollow", "Multiplek HPL", "Top table stainless", "Roda heavy duty"],
    short: "Gerobak minuman modern untuk kopi, teh, dan es kekinian dengan layout kerja ringkas.",
    image: gerobakKopi,
    accent: "purple",
  },
  {
    slug: "gerobak-makanan-premium",
    name: "Gerobak Makanan Premium",
    category: "Makanan",
    price: "Mulai Rp 9,5 jt",
    specs: ["220 × 85 × 215 cm", "Area kompor fleksibel", "Display bahan", "Storage tertutup"],
    materials: ["Rangka powder coating", "Panel ACP", "Meja stainless", "Kanopi ringan"],
    short: "Unit siap pakai untuk snack, gorengan, burger, dan konsep street food modern.",
    image: gerobakMakanan,
    accent: "blue",
  },
  {
    slug: "booth-mini-retail",
    name: "Booth Mini Retail",
    category: "Retail",
    price: "Mulai Rp 6,2 jt",
    specs: ["160 × 70 × 195 cm", "Display kaca", "Rak adjustable", "Pintu geser"],
    materials: ["Besi hollow", "Kaca tempered", "Panel HPL", "Roda karet"],
    short: "Booth compact untuk pop-up store, dessert, aksesoris, dan jualan indoor-outdoor.",
    image: gerobakMini,
    accent: "yellow",
  },
  {
    slug: "kanopi-rumah-minimalis",
    name: "Kanopi Rumah Minimalis",
    category: "Kanopi",
    price: "Mulai Rp 650rb / m²",
    specs: [
      "Custom ukuran area",
      "Atap polycarbonate / kaca",
      "Rangka besi hollow galvanis",
      "Garansi pemasangan",
    ],
    materials: ["Hollow galvanis", "Polycarbonate solid", "Powder coating", "Baut anti karat"],
    short:
      "Kanopi carport dan teras rumah dengan rangka kokoh dan finishing rapi siap pasang on-site.",
    image: kanopiRumah,
    accent: "blue",
  },
  {
    slug: "pagar-rumah-modern",
    name: "Pagar Rumah Modern",
    category: "Pagar",
    price: "Mulai Rp 850rb / m²",
    specs: [
      "Desain custom minimalis",
      "Finishing powder coating",
      "Engsel heavy duty",
      "Opsi sliding / swing",
    ],
    materials: ["Besi hollow", "Plat laser cut", "Powder coating outdoor", "Aksen kayu / GRC"],
    short:
      "Pagar minimalis dan klasik dengan finishing tahan cuaca, dipasang presisi oleh tim KKB.",
    image: pagarRumah,
    accent: "purple",
  },
  {
    slug: "furniture-rumah-custom",
    name: "Furniture Rumah Custom",
    category: "Furniture",
    price: "Mulai Rp 2,5 jt / unit",
    specs: [
      "Kitchen set, wardrobe, TV cabinet",
      "Desain 3D sebelum produksi",
      "Finishing HPL / duco",
      "Pengukuran on-site",
    ],
    materials: ["Multiplek / plywood", "HPL Taco", "Engsel Huben / Blum", "Handle stainless"],
    short:
      "Jasa furniture custom rumah: kitchen set, lemari, dan storage built-in sesuai ruangan.",
    image: furnitureRumah,
    accent: "yellow",
  },
];

export const makeWhatsappLink = (productName?: string) => {
  const text = productName
    ? `Halo KKB, saya ingin pesan/konsultasi untuk ${productName}.`
    : "Halo KKB, saya ingin konsultasi gerobak usaha modern.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
};
