import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { ProductCard } from "../components/kkb/product-card";
import { makeWhatsappLink, products } from "../data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <PageFrame>
      {/* BACKGROUND DESIGN */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-50 to-blue-50 dark:via-slate-900 dark:to-slate-800" />

        {/* BLOB SHAPE */}
        <div className="absolute top-[10%] left-[-120px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] right-[-120px] w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-3xl" />

        {/* ABSTRACT SHAPE (ROTATED) */}
        <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] bg-pink-300/10 rotate-45 rounded-3xl blur-2xl" />

        {/* DOT PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* GRID LINE */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <main className="section-container section-shell relative">
        <Link to="/catalog" className="btn-neo btn-neo-ghost">
          Kembali ke catalog
        </Link>

        <section className="mt-6 grid gap-6 md:mt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="grid gap-3 sm:gap-4">
            <div className={`neo-card neo-card-${product.accent} p-3`}>
              <img
                src={product.image}
                alt={`${product.name} KKB`}
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[product.image, ...related.map((item) => item.image)]
                .slice(0, 3)
                .map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Galeri ${index}`}
                    className="aspect-[4/3] rounded-lg border object-cover shadow-neo-sm"
                  />
                ))}
            </div>
          </div>

          <div>
            <p className="badge-neo">{product.category}</p>

            <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-extrabold">{product.price}</p>

            <p className="mt-4 text-muted-foreground">{product.short}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="neo-card p-5 backdrop-blur-md bg-white/70 dark:bg-white/5">
                <h2 className="font-extrabold">Spesifikasi</h2>
                <ul className="mt-3 text-muted-foreground">
                  {product.specs.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="neo-card p-5 backdrop-blur-md bg-white/70 dark:bg-white/5">
                <h2 className="font-extrabold">Material</h2>
                <ul className="mt-3 text-muted-foreground">
                  {product.materials.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              className="btn-neo btn-neo-accent mt-6"
              href={makeWhatsappLink(product.name)}
              target="_blank"
            >
              Order via WhatsApp
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="section-title">Produk terkait</h2>
          <div className="section-grid section-grid-2 mt-6">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}