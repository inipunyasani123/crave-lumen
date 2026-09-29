import Image from 'next/image'
import Link from 'next/link'
import { KEBUTUHAN, PRODUK } from '@/lib/katalog'

const FOTO = { pemula: '/images/p2.jpg', berdua: '/images/p3.jpg', perawatan: '/images/p14.jpeg' }

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-day py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-salvia-ink">Kategori</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Disusun menurut kebutuhan, bukan menurut sensasi</h2>
          </div>
          <Link href="/koleksi" className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia">
            Lihat semua · {PRODUK.length}
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
          {KEBUTUHAN.map((k) => (
            <li key={k.id} className="last:col-span-2 md:last:col-span-1">
              <Link href={`/koleksi#${k.id}`} className="term-card group block h-full overflow-hidden">
                <div className="relative m-2 aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-round)-0.5rem)] bg-day-2">
                  <Image src={FOTO[k.id]} alt="" fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="px-4 pt-2 pb-5 sm:px-6 sm:pb-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <span className="font-[family-name:var(--font-display)] text-lg text-slate-ink sm:text-xl">{k.label}</span>
                    <span className="micro text-slate-soft">{PRODUK.filter((p) => p.kebutuhan === k.id).length} barang</span>
                  </div>
                  <p className="mt-2 hidden text-sm leading-relaxed text-slate-soft sm:block">{k.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
