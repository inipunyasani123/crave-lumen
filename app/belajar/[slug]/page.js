import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BELAJAR, belajarBySlug } from '@/lib/belajar'
import { istilahBySlug } from '@/lib/kamus'

const SITE = 'https://crave-lumen.pintuweb.id'

export function generateStaticParams() {
  return BELAJAR.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const b = belajarBySlug(slug)
  if (!b) return {}
  return {
    title: `${b.judul} — Belajar, Positive Crave`,
    description: b.ringkas,
    alternates: { canonical: `${SITE}/belajar/${b.slug}` },
    openGraph: { type: 'article' },
  }
}

function Blok({ b }) {
  if (b.h) return <h2 className="mt-12 text-[1.6rem] leading-[1.2] md:text-[1.8rem]">{b.h}</h2>
  if (b.daftar)
    return (
      <ul className="mt-6 space-y-3">
        {b.daftar.map((x) => (
          <li key={x} className="flex gap-3 leading-relaxed text-slate-ink">
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-salvia" />
            {x}
          </li>
        ))}
      </ul>
    )
  if (b.tabel)
    return (
      <div className="term-card mt-8 overflow-x-auto">
        <table className="w-full min-w-[30rem] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-ink/15 bg-day-2">
              {b.tabel.kepala.map((k, i) => <th key={k + i} scope="col" className="px-5 py-3.5 font-semibold text-slate-ink">{k}</th>)}
            </tr>
          </thead>
          <tbody>
            {b.tabel.baris.map((r) => (
              <tr key={r[0]} className="border-b border-slate-ink/10 last:border-0">
                <th scope="row" className="px-5 py-3.5 font-semibold text-slate-ink">{r[0]}</th>
                {r.slice(1).map((c, i) => (
                  <td key={i} className={`px-5 py-3.5 ${c === 'Tidak' ? 'font-semibold text-[#9b3b2e]' : 'text-slate-soft'}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  if (b.perhatian)
    return (
      <aside className="mt-10 flex gap-4 rounded-[var(--radius-round)] bg-sand/35 p-6">
        <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-ink text-sm font-bold text-day">!</span>
        <p className="leading-relaxed text-slate-ink">
          <span className="font-semibold">Perhatian. </span>
          {b.perhatian}
        </p>
      </aside>
    )
  return <p className="mt-6 text-[1.075rem] leading-[1.85] text-slate-soft">{b.p}</p>
}

export default async function BelajarArtikel({ params }) {
  const { slug } = await params
  const b = belajarBySlug(slug)
  if (!b) notFound()
  const istilah = b.istilah.map(istilahBySlug).filter(Boolean)
  const lain = BELAJAR.filter((x) => x.slug !== b.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: b.judul,
    description: b.ringkas,
    author: { '@type': 'Organization', name: 'Positive Crave' },
    mainEntityOfPage: `${SITE}/belajar/${b.slug}`,
  }

  return (
    <article className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-3xl px-6">
        <nav aria-label="Remah roti" className="text-sm text-slate-soft">
          <Link href="/belajar" className="hover:text-salvia-ink">Belajar</Link> <span aria-hidden="true">›</span> {b.topik}
        </nav>
        <h1 className="mt-6 text-[2.3rem] leading-[1.1] md:text-[3rem]">{b.judul}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-soft">{b.ringkas}</p>
        <p className="mt-4 text-sm text-slate-soft">{b.menit} menit baca</p>

        {/* Ringkasan tiga poin — ciri khas tulisan Lumen */}
        <section aria-labelledby="ringkasan" className="mt-10 rounded-[var(--radius-round)] bg-salvia/12 p-7 ring-1 ring-salvia/25">
          <h2 id="ringkasan"><span className="micro text-salvia-ink">Ringkasan</span></h2>
          <ol className="mt-4 space-y-3">
            {b.poin.map((x, i) => (
              <li key={x} className="flex gap-3 text-slate-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-day text-sm font-semibold text-salvia-ink">{i + 1}</span>
                <span className="pt-0.5 leading-relaxed">{x}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-6">
          {b.isi.map((x, k) => <Blok key={k} b={x} />)}
        </div>

        {istilah.length > 0 && (
          <section aria-labelledby="istilah" className="mt-14 border-t border-slate-ink/10 pt-10">
            <h2 id="istilah" className="text-xl">Istilah terkait</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {istilah.map((t) => (
                <li key={t.slug}>
                  <Link href={`/kamus#${t.slug}`} className="inline-flex min-h-10 items-center rounded-full border border-slate-ink/15 px-4 text-sm text-slate-ink hover:border-salvia hover:text-salvia-ink">{t.kata}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="lainnya" className="mt-14">
          <h2 id="lainnya" className="text-xl">Belajar lainnya</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/belajar/${x.slug}`} className="term-card block h-full p-6 hover:border-salvia">
                  <span className="text-xs font-semibold text-salvia-ink">{x.topik}</span>
                  <span className="mt-2 block text-lg leading-snug text-slate-ink">{x.judul}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
