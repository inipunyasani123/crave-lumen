import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FaktaProduk from '@/components/FaktaProduk'
import ProductCard from '@/components/ProductCard'
import { PRODUK, labelKebutuhan, produkBySlug, rupiah } from '@/lib/katalog'
import { istilahBySlug } from '@/lib/kamus'

const SITE = 'https://crave-lumen.vercel.app'

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) return {}
  return {
    title: `${p.nama} — Fakta Produk, Positive Crave`,
    description: `${p.ringkas} Lengkap dengan panel fakta produk dan cara merawatnya.`,
    alternates: { canonical: `${SITE}/produk/${p.slug}` },
    openGraph: { images: [{ url: p.image }] },
  }
}

export default async function ProdukPage({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) notFound()
  const istilah = p.istilah.map(istilahBySlug).filter(Boolean)
  const serupa = PRODUK.filter((x) => x.kebutuhan === p.kebutuhan && x.slug !== p.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nama,
    description: p.penjelasan,
    image: `${SITE}${p.image}`,
    offers: { '@type': 'Offer', priceCurrency: 'IDR', price: p.harga, availability: 'https://schema.org/InStock' },
  }

  return (
    <>
      <section className="relative overflow-clip bg-day pt-28 pb-20 md:pt-36 md:pb-24">
        <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
        <div className="relative mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-soft">
            <Link href="/" className="hover:text-salvia-ink">Beranda</Link>
            <span aria-hidden="true">›</span>
            <Link href={`/koleksi#${p.kebutuhan}`} className="hover:text-salvia-ink">{labelKebutuhan(p.kebutuhan)}</Link>
            <span aria-hidden="true">›</span>
            <span className="text-slate-ink" aria-current="page">{p.nama}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="pill relative aspect-square overflow-hidden bg-day-2">
                <Image src={p.image} alt={p.nama} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="micro text-salvia-ink">{labelKebutuhan(p.kebutuhan)}</p>
              <h1 className="mt-4 text-[2.4rem] leading-[1.08] md:text-[3rem]">{p.nama}</h1>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-slate-soft">{p.penjelasan}</p>
              <p className="mt-8 text-3xl font-semibold text-slate-ink">{rupiah(p.harga)}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/checkout?produk=${p.slug}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-ink px-8 py-4 text-sm font-semibold text-day transition-colors hover:bg-salvia-ink">
                  Pesan
                </Link>
                <Link href="/#kontak" className="inline-flex items-center justify-center rounded-full border border-slate-ink/20 px-8 py-4 text-sm font-semibold text-slate-ink transition-colors hover:border-salvia">
                  Tanya dulu
                </Link>
              </div>

              <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
                <FaktaProduk p={p} />
                <div>
                  <h2 className="text-xl">Cara merawat</h2>
                  <ol className="mt-5 space-y-3">
                    {p.rawat.map((r, i) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-slate-soft">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-salvia/15 text-xs font-semibold text-salvia-ink">{i + 1}</span>
                        <span className="pt-1">{r}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {istilah.length > 0 && (
                <section aria-labelledby="istilah-judul" className="mt-12">
                  <h2 id="istilah-judul" className="text-xl">Istilah di halaman ini</h2>
                  <dl className="mt-5 space-y-3">
                    {istilah.map((t) => (
                      <div key={t.slug} className="term-card p-5">
                        <dt>
                          <Link href={`/kamus#${t.slug}`} className="font-semibold text-slate-ink underline decoration-salvia underline-offset-4 hover:text-salvia-ink">{t.kata}</Link>
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-slate-soft">{t.arti}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      {serupa.length > 0 && (
        <section className="bg-day-2 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 text-[1.8rem] leading-[1.1] md:text-[2.3rem]">Juga {labelKebutuhan(p.kebutuhan).toLowerCase()}</h2>
            <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {serupa.map((x) => <li key={x.slug}><ProductCard p={x} /></li>)}
            </ul>
          </div>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
