import Link from 'next/link'
import Koleksi from '@/components/Koleksi'
import { PRODUK } from '@/lib/katalog'
import { meta, SITE } from '@/lib/seo'

export const metadata = meta({
  title: 'Koleksi',
  description:
    'Koleksi Positive Crave dengan angka yang bisa dibandingkan: bahan, ketahanan air, kebisingan, dan daya. Lihat sebagai kartu atau tabel perbandingan.',
  path: '/koleksi',
})

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Koleksi Positive Crave',
  itemListElement: PRODUK.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/produk/${p.slug}`, name: p.nama })),
}

export default function KoleksiPage() {
  return (
    <section className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="micro mb-5 text-salvia-ink">Koleksi · {PRODUK.length} barang</p>
            <h1 className="text-[2.4rem] leading-[1.08] md:text-[3.3rem]">Dibandingkan dengan angka, bukan dengan kata sifat</h1>
          </div>
          <p className="leading-relaxed text-slate-soft">
            Setiap barang punya panel Fakta Produk: bahan, ketahanan air, kebisingan, dan daya. Buka tampilan tabel
            untuk membandingkan alat berdampingan. Ada istilah yang belum jelas?{' '}
            <Link href="/kamus" className="text-slate-ink underline decoration-salvia underline-offset-4 hover:text-salvia-ink">Buka kamus</Link>.
          </p>
        </div>
        <div className="mt-14">
          <h2 className="sr-only">Daftar barang</h2>
          <Koleksi />
        </div>
        <p className="micro mt-12 leading-[1.7] text-slate-soft">Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  )
}
