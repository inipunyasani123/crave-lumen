import Link from 'next/link'
import { KAMUS, istilahBySlug } from '@/lib/kamus'

/* ============================================================================
   Bagian penanda varian ini: "Kamus Ringkas".
   Hambatan terbesar pembeli pertama sering bukan malu, melainkan tidak tahu
   arti istilahnya — lalu enggan bertanya. Enam istilah paling sering diambil
   dari kamus lengkap (lib/kamus.js); sisanya ada di /kamus.
   ========================================================================== */

const PILIHAN = ['medical-grade', 'bebas-bpa', 'pelumas-berbahan-air', 'tahan-percik', 'ph', 'kemasan-polos']

export default function Glossary() {
  const istilah = PILIHAN.map(istilahBySlug)
  return (
    <section id="kamus" className="relative overflow-hidden bg-day-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="micro mb-5 text-salvia-ink">Kamus Ringkas</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Istilah yang sering bikin ragu, dijelaskan lebih dulu</h2>
            <p className="mt-5 leading-relaxed text-slate-soft">
              Enam kata yang paling sering muncul di keterangan produk. Dijelaskan apa adanya, supaya Anda bisa
              membandingkan sendiri tanpa harus bertanya lebih dulu.
            </p>
          </div>
          <Link href="/kamus" className="micro pill shrink-0 border border-slate-ink/20 px-5 py-3 text-slate-ink transition-colors hover:border-salvia">
            Semua {KAMUS.length} istilah
          </Link>
        </div>

        {/* Ponsel: enam istilah dijajar mendatar (geser) — bertumpuk, kartunya
            dulu memanjangkan beranda hampir dua layar. */}
        <dl className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {istilah.map((i) => (
            <div key={i.slug} className="term-card flex w-[80%] shrink-0 snap-start flex-col p-6 md:w-auto md:p-7">
              <dt className="font-[family-name:var(--font-display)] text-xl text-slate-ink">
                <Link href={`/kamus#${i.slug}`} className="hover:text-salvia-ink">{i.kata}</Link>
              </dt>
              <dd className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">{i.arti}</dd>
              <dd className="mt-5 border-t border-slate-ink/10 pt-4">
                <span className="micro block text-salvia-ink">Kenapa penting</span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-ink">{i.kenapa}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="pill mt-8 flex flex-col gap-5 bg-salvia/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8 md:mt-10">
          <p className="max-w-xl text-sm leading-relaxed text-slate-ink">
            Masih ada istilah yang belum jelas? Tanyakan dulu — tidak ada pertanyaan yang dianggap terlalu dasar, dan
            tidak ada yang menawari Anda produk sebagai jawabannya.
          </p>
          <Link href="/#kontak" className="micro pill shrink-0 bg-slate-ink px-6 py-3.5 text-center text-day transition-colors hover:bg-salvia-ink">
            Tanya Dulu
          </Link>
        </div>
      </div>
    </section>
  )
}
