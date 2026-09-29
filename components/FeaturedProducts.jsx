import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { PRODUK } from '@/lib/katalog'

export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan)
  return (
    <section id="produk" className="relative overflow-hidden bg-day-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-salvia-ink">Paling sering ditanyakan</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Titik mulai yang paling mudah dijelaskan</h2>
          </div>
          <Link href="/koleksi" className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia">
            Bandingkan semua
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
          {unggulan.map((p) => (
            <li key={p.slug} className="last:col-span-2 md:last:col-span-1"><ProductCard p={p} /></li>
          ))}
        </ul>
        <p className="micro mt-8 leading-[1.7] text-slate-soft">Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.</p>
      </div>
    </section>
  )
}
