import Link from 'next/link'

/* Tanya jawab Lumen. Jawabannya selaras dengan katalog & kamus (pH 4,5,
   kemasan polos, garansi alat). Memakai <details> supaya semua jawaban
   ada di HTML dan bisa dibuka tanpa JavaScript. */

const TANYA = [
  {
    q: 'Apakah produknya aman untuk kulit sensitif?',
    a: 'Semua alat memakai silikon medical-grade yang tidak berpori dan bebas BPA. Pelumas kami ber-pH 4,5 tanpa gliserin dan pewangi. Tetap hentikan pemakaian bila muncul kemerahan, dan periksakan bila berlanjut lebih dari dua hari.',
  },
  {
    q: 'Pelumas mana yang harus saya pilih?',
    a: 'Bila ragu, pilih yang berbahan air — aman untuk semua alat dan kondom lateks. Perbandingan lengkap air, silikon, dan minyak ada di halaman Belajar.',
    tautan: ['/belajar/memilih-pelumas', 'Memilih pelumas'],
  },
  {
    q: 'Apa arti "tahan percik" dan "IPX7"?',
    a: 'Tahan percik hanya boleh dilap basah; IPX7 boleh direndam sebentar. Kodenya tercantum di panel Fakta Produk setiap alat.',
    tautan: ['/kamus#ipx', 'Kode IPX di kamus'],
  },
  {
    q: 'Apa yang tertulis di paket?',
    a: 'Kotak cokelat polos tanpa logo. Di resi hanya tertulis "perlengkapan pribadi", dan nama merek tidak muncul di mutasi rekening.',
  },
  {
    q: 'Bagaimana kalau alatnya rusak?',
    a: 'Alat bergaransi 12 bulan untuk kerusakan yang bukan akibat salah pemakaian. Barang habis pakai yang sudah dibuka tidak bisa dikembalikan demi kebersihan, kecuali cacat produksi.',
  },
  {
    q: 'Apakah Anda menyimpan data kesehatan saya?',
    a: 'Tidak. Kami tidak pernah menanyakan usia, jenis kelamin, atau kondisi kesehatan. Aplikasi untuk alat yang tersambung juga tidak menyimpan riwayat pemakaian di server.',
  },
]

export default function AboutAndFAQ() {
  return (
    <section id="tanya" aria-labelledby="tanya-judul" className="relative overflow-clip bg-day py-16 md:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="micro mb-5 text-salvia-ink">Tanya jawab</p>
          <h2 id="tanya-judul" className="text-[2rem] leading-[1.14] md:text-[2.6rem]">Tidak ada pertanyaan yang terlalu dasar</h2>
          <p className="mt-5 leading-relaxed text-slate-soft">
            Enam hal yang paling sering ditanyakan. Istilahnya belum jelas? Semuanya ada di{' '}
            <Link href="/kamus" className="text-slate-ink underline decoration-salvia underline-offset-4">kamus</Link>.
          </p>
        </div>
        <div className="space-y-3">
          {TANYA.map((t, i) => (
            <details key={t.q} className="term-card group p-0 open:border-salvia/50" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-ink [&::-webkit-details-marker]:hidden">
                {t.q}
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-day-2 text-lg text-slate-ink transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-slate-soft">
                <p>{t.a}</p>
                {t.tautan && (
                  <Link href={t.tautan[0]} className="mt-3 inline-block font-semibold text-slate-ink underline decoration-salvia underline-offset-4">
                    {t.tautan[1]} →
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
