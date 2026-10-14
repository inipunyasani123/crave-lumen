import Link from 'next/link'
import KamusCari from '@/components/KamusCari'
import { KAMUS } from '@/lib/kamus'

export const metadata = {
  title: 'Kamus Istilah — Positive Crave',
  description:
    'Sembilan belas istilah yang sering muncul di keterangan produk keintiman — medical-grade, pH, osmolalitas, IPX, dan lainnya — dijelaskan datar, tanpa sindiran.',
  alternates: { canonical: 'https://crave-lumen.pintuweb.id/kamus' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Kamus Positive Crave',
  hasDefinedTerm: KAMUS.map((k) => ({ '@type': 'DefinedTerm', name: k.kata, description: k.arti })),
}

export default function KamusPage() {
  return (
    <section className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-4xl px-6">
        <p className="micro text-salvia-ink">Kamus · {KAMUS.length} istilah</p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.08] md:text-[3.3rem]">Istilah yang sering bikin ragu, dijelaskan lebih dulu</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-soft">
          Hambatan terbesar pembeli pertama sering bukan malu, melainkan tidak tahu arti istilahnya — lalu enggan
          bertanya. Semua istilah yang muncul di panel Fakta Produk ada di sini. Penjelasan lebih panjang ada di{' '}
          <Link href="/belajar" className="text-slate-ink underline decoration-salvia underline-offset-4 hover:text-salvia-ink">Belajar</Link>.
        </p>
        <div className="mt-10">
          <KamusCari />
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  )
}
