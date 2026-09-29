import Image from 'next/image'
import Link from 'next/link'

const janji = [
  ['Kemasan', 'Polos, tanpa merek'],
  ['Material', 'Medical-grade, bebas BPA'],
  ['Panduan', 'Bahasa yang datar'],
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-day pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-[32rem]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <p className="micro mb-7 text-salvia-ink">Positive Crave · Untuk pasangan</p>

          <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.7rem]">
            Intimacy Begins
            <br />
            With <span className="text-salvia-ink">Light</span>.
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-slate-soft">
            Kami membicarakan keintiman seperti membicarakan kesehatan: terang, tenang, dan tanpa
            sindiran. Mulai dari memahami istilahnya, bukan dari memilih produknya.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#kamus"
              className="micro pill inline-flex items-center justify-center bg-slate-ink px-8 py-4 text-day transition-colors duration-300 hover:bg-salvia"
            >
              Buka Kamus Ringkas
            </Link>
            <Link
              href="/koleksi"
              className="micro pill inline-flex items-center justify-center border border-slate-ink/20 px-8 py-4 text-slate-ink transition-colors duration-300 hover:border-slate-ink/50"
            >
              Lihat Koleksi
            </Link>
          </div>

          <dl className="mt-14 grid gap-7 border-t border-slate-ink/12 pt-8 sm:grid-cols-3">
            {janji.map(([k, v]) => (
              <div key={k}>
                <dt className="micro text-slate-soft">{k}</dt>
                <dd className="mt-2.5 text-sm font-semibold text-slate-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="pill relative aspect-[4/5] w-full overflow-hidden bg-day-2">
            <Image
              src="/images/w2.jpeg"
              alt="Momen tenang berdua"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>

          <figcaption className="pill mx-auto -mt-10 w-[88%] bg-day px-6 py-5 text-center shadow-[0_1px_0_rgb(35_48_44/0.08)] ring-1 ring-slate-ink/10">
            <p className="micro text-salvia-ink">Tanpa perlu menjelaskan diri</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-soft">
              Kotak polos, resi tanpa nama merek, dan dukungan yang dijawab manusia.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
