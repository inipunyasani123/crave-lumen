import Link from 'next/link'

const produk = [
  {
    nama: 'Lumen Duo',
    harga: 'Rp 1.240.000',
    tag: 'Tahan percik',
    desc: 'Dua motor terpisah, sepuluh pola. Semua istilah pada spesifikasinya ada di Kamus Ringkas.',
    image: '/images/p5.jpg',
  },
  {
    nama: 'Pelumas Berbahan Air',
    harga: 'Rp 149.000',
    tag: 'Aman untuk silikon',
    desc: 'Mudah dibilas dan paling jarang memicu iritasi. Cocok dipakai bersama alat berbahan silikon.',
    image: '/images/p7.jpg',
  },
  {
    nama: 'Set Perawatan',
    harga: 'Rp 320.000',
    tag: 'Setelah pemakaian',
    desc: 'Pembersih alat, lap microfiber, dan kantong simpan — supaya umur pakainya panjang.',
    image: '/images/p8.jpg',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="produk" className="relative overflow-hidden bg-day py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-salvia">Paling sering dipesan</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Tiga yang keterangannya paling mudah dipahami
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {produk.map((p) => (
            <article key={p.nama} className="term-card group flex flex-col overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-day-2">
                <img
                  src={p.image}
                  alt={p.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="micro pill absolute top-4 left-4 bg-day/90 px-3.5 py-1.5 text-salvia backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-slate-ink">
                  {p.nama}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-soft">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-ink/10 pt-5">
                  <span className="text-base font-semibold text-slate-ink">{p.harga}</span>
                  <Link href="/produk" className="micro text-salvia transition-colors hover:text-slate-ink">
                    Rincian
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="micro mt-8 leading-[1.7] text-slate-soft/45">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
