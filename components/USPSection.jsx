import { BookOpen, ShieldCheck, Package, MessageCircle } from 'lucide-react'

const jaminan = [
  {
    icon: BookOpen,
    title: 'Dijelaskan lebih dulu',
    desc: 'Setiap istilah pada keterangan produk ada penjelasannya di Kamus Ringkas, supaya Anda bisa membandingkan sendiri.',
  },
  {
    icon: ShieldCheck,
    title: 'Material medical-grade',
    desc: 'Silikon tidak berpori dan bebas BPA — tidak menyerap, bisa dibersihkan sampai benar-benar bersih.',
  },
  {
    icon: Package,
    title: 'Kemasan polos',
    desc: 'Kotak tanpa cetakan dan tanpa logo. Nama merek tidak muncul di resi maupun mutasi rekening.',
  },
  {
    icon: MessageCircle,
    title: 'Tanya tanpa sungkan',
    desc: 'Tidak ada pertanyaan yang kami anggap terlalu dasar, dan tidak ada yang dijawab dengan tawaran barang.',
  },
]

export default function USPSection() {
  return (
    <section id="jaminan" className="relative overflow-hidden bg-day py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="micro mb-5 text-salvia-ink">Jaminan</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Empat hal yang membuatnya terang, bukan remang
          </h2>
        </div>

        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jaminan.map((j) => (
            <div key={j.title} className="term-card p-7">
              <j.icon className="mb-6 h-6 w-6 text-salvia-ink" strokeWidth={1.5} aria-hidden="true" />
              <dt className="font-[family-name:var(--font-display)] text-lg text-slate-ink">
                {j.title}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-soft">{j.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
