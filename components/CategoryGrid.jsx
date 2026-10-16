import Image from 'next/image'
import Link from 'next/link'
import { KEBUTUHAN, PRODUK } from '@/lib/katalog'

const FOTO = { pemula: '/images/produk/bullet.webp', berdua: '/images/produk/duo.webp', perawatan: '/images/produk/pelumas.webp' }

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-day py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-xl">
            <p className="micro mb-5 text-salvia-ink">Kategori</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Disusun menurut kebutuhan, bukan menurut sensasi</h2>
          </div>
          <Link href="/koleksi" className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia">
            Lihat semua · {PRODUK.length}
          </Link>
        </div>

        <ul className="grid grid-cols-3 gap-2 sm:gap-6">
          {KEBUTUHAN.map((k) => (
            <li key={k.id}>
              <Link href={`/koleksi#${k.id}`} className="term-card group block h-full overflow-hidden">
                <div className="relative m-1.5 aspect-square overflow-hidden sm:m-2 sm:aspect-[4/3] rounded-[calc(var(--radius-round)-0.5rem)] bg-day-2">
                  <Image src={FOTO[k.id]} alt="" fill sizes="(min-width: 768px) 33vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="px-2.5 pt-1.5 pb-4 sm:px-6 sm:pt-2 sm:pb-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <span className="font-[family-name:var(--font-display)] text-[0.95rem] leading-snug text-slate-ink sm:text-xl">{k.label}</span>
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
