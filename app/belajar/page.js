import Link from 'next/link'
import { BELAJAR } from '@/lib/belajar'

export const metadata = {
  title: 'Belajar — Positive Crave',
  description:
    'Penjelasan singkat dan terang tentang memilih pelumas, membersihkan alat, dan membaca label produk keintiman — lengkap dengan ringkasan tiga poin.',
  alternates: { canonical: 'https://crave-lumen.vercel.app/belajar' },
}

export default function BelajarPage() {
  return (
    <section className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="micro text-salvia-ink">Belajar</p>
          <h1 className="mt-5 text-[2.4rem] leading-[1.08] md:text-[3.3rem]">Dibicarakan seperti kesehatan, karena memang begitu</h1>
          <p className="mt-6 leading-relaxed text-slate-soft">
            Tiap tulisan dimulai dengan ringkasan tiga poin — cukup untuk yang terburu-buru, dan lengkap untuk yang ingin
            membaca sampai habis.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {BELAJAR.map((b) => (
            <li key={b.slug}>
              <article className="term-card group relative flex h-full flex-col p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(35_48_44/0.35)]">
                <p className="flex items-center justify-between">
                  <span className="rounded-full bg-salvia/15 px-3 py-1 text-xs font-semibold text-salvia-ink">{b.topik}</span>
                  <span className="text-xs text-slate-soft">{b.menit} menit</span>
                </p>
                <h2 className="mt-6 text-2xl leading-[1.2]">
                  <Link href={`/belajar/${b.slug}`} className="after:absolute after:inset-0">{b.judul}</Link>
                </h2>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-ink/10 pt-5">
                  {b.poin.map((x) => (
                    <li key={x} className="flex gap-2.5 text-sm leading-relaxed text-slate-soft">
                      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-salvia" />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-slate-ink group-hover:text-salvia-ink">Baca penjelasannya →</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
