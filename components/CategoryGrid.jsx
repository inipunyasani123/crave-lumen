import Link from 'next/link'

const kategori = [
  {
    nama: 'Untuk pemula',
    desc: 'Barang paling sederhana, dengan keterangan yang ditulis tanpa istilah rumit.',
    jumlah: '16 barang',
    image: '/images/p2.jpg',
  },
  {
    nama: 'Untuk berdua',
    desc: 'Dipakai bersama dan dikendalikan bergantian, bukan oleh satu pihak saja.',
    jumlah: '21 barang',
    image: '/images/p3.jpg',
  },
  {
    nama: 'Perawatan & kebersihan',
    desc: 'Pembersih alat, kantong simpan, dan pelumas berbahan air.',
    jumlah: '12 barang',
    image: '/images/p4.jpg',
  },
]

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-day-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-salvia">Kategori</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
              Disusun menurut kebutuhan, bukan menurut sensasi
            </h2>
          </div>
          <Link
            href="/produk"
            className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia hover:text-salvia"
          >
            Lihat semua
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {kategori.map((k) => (
            <Link key={k.nama} href="/produk" className="term-card group block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-day-2">
                <img
                  src={k.image}
                  alt={k.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-slate-ink">
                    {k.nama}
                  </h3>
                  <span className="micro text-slate-soft/55">{k.jumlah}</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">{k.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
