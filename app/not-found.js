import Link from 'next/link'

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — Positive Crave' },
  robots: { index: false, follow: true },
}

/* 404 versi Lumen: dijelaskan datar, seperti entri kamus. */
export default function NotFound() {
  return (
    <section className="bg-day pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="micro text-salvia-ink">404</p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.1] md:text-[3.2rem]">Halaman ini tidak ditemukan</h1>
        <dl className="term-card mt-8 p-6 sm:p-8">
          <dt className="font-[family-name:var(--font-display)] text-xl text-slate-ink">404 (kata benda)</dt>
          <dd className="mt-3 leading-relaxed text-slate-soft">
            Kode yang muncul ketika alamat yang dibuka tidak ada — biasanya karena salah ketik, atau halamannya sudah
            dipindah.
          </dd>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kamus" className="micro pill inline-flex items-center justify-center bg-slate-ink px-6 py-3.5 text-day transition-colors hover:bg-salvia-ink">
            Buka Kamus
          </Link>
          <Link href="/koleksi" className="micro pill inline-flex items-center justify-center border border-slate-ink/20 px-6 py-3.5 text-slate-ink transition-colors hover:border-salvia">
            Lihat Koleksi
          </Link>
        </div>
      </div>
    </section>
  )
}
