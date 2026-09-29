import Link from 'next/link'
import { BELAJAR } from '@/lib/belajar'

export default function BelajarTeaser() {
  return (
    <section id="belajar" className="relative overflow-hidden bg-day py-20 md:py-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-72" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-salvia-ink">Belajar</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Tiga poin dulu, penjelasan panjang belakangan</h2>
          </div>
          <Link href="/belajar" className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia">
            Semua tulisan
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {BELAJAR.map((b) => (
            <li key={b.slug}>
              <Link href={`/belajar/${b.slug}`} className="term-card group flex h-full flex-col p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(35_48_44/0.35)]">
                <span className="w-fit rounded-full bg-salvia/15 px-3 py-1 text-xs font-semibold text-salvia-ink">{b.topik}</span>
                <span className="mt-5 font-[family-name:var(--font-display)] text-xl leading-snug text-slate-ink">{b.judul}</span>
                <span className="mt-4 flex-1 text-sm leading-relaxed text-slate-soft">{b.poin[0]}</span>
                <span className="mt-5 text-sm font-semibold text-slate-ink group-hover:text-salvia-ink">{b.menit} menit baca →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
