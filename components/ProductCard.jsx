import Image from 'next/image'
import Link from 'next/link'
import { alat, labelKebutuhan, rupiah } from '@/lib/katalog'

/* Kartu produk Lumen: bidang membulat besar, foto terang apa adanya, dan
   dua baris fakta singkat alih-alih kata sifat. */
export default function ProductCard({ p, sizes = '(min-width: 1024px) 33vw, 50vw' }) {
  const fakta = alat(p) ? [p.fakta.bahan, p.fakta.air] : [`pH ${p.fakta.ph}`, p.fakta.isi]
  return (
    <article className="term-card group relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(35_48_44/0.35)]">
      <div className="relative m-2 aspect-square overflow-hidden rounded-[calc(var(--radius-round)-0.5rem)] bg-day-2">
        <Image src={p.image} alt={p.nama} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="micro absolute top-3 left-3 rounded-full bg-day/90 px-3 py-1.5 text-salvia-ink backdrop-blur-sm">
          {labelKebutuhan(p.kebutuhan)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-2 pb-5 sm:px-6 sm:pb-6">
        <h3 className="text-base font-semibold sm:text-lg">
          <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0">{p.nama}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-soft sm:line-clamp-none sm:text-sm">{p.ringkas}</p>
        <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
          {fakta.map((f) => (
            <li key={f} className="rounded-full bg-day-2 px-2.5 py-1 text-xs text-slate-ink">{f}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold text-slate-ink sm:text-base">{rupiah(p.harga)}</p>
      </div>
    </article>
  )
}
