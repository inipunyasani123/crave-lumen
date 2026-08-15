import Link from 'next/link'

/* ============================================================================
   Bagian penanda varian ini: "Kamus Ringkas".
   Hambatan terbesar pembeli pertama sering bukan malu, melainkan tidak tahu
   arti istilahnya — lalu enggan bertanya. Varian Lumen menjawabnya paling
   awal, dengan bahasa yang datar dan tanpa sindiran.
   ========================================================================== */

const istilah = [
  {
    kata: 'Medical-grade',
    arti: 'Bahan yang lolos syarat kontak dengan tubuh: tidak berpori, tidak menyerap, dan bisa dibersihkan sampai benar-benar bersih.',
    kenapa: 'Bahan berpori menyimpan sisa dan bakteri meski sudah dicuci.',
  },
  {
    kata: 'Bebas BPA',
    arti: 'Tanpa bisphenol-A, senyawa pada sebagian plastik yang dihindari untuk produk yang bersentuhan lama dengan kulit.',
    kenapa: 'Menjadi penanda paling dasar saat membandingkan dua produk semurah apa pun.',
  },
  {
    kata: 'Pelumas berbahan air',
    arti: 'Pelumas dengan air sebagai bahan utama. Mudah dibilas dan aman dipakai bersama produk berbahan silikon.',
    kenapa: 'Pelumas berbahan silikon dapat merusak permukaan alat berbahan silikon.',
  },
  {
    kata: 'Tahan percik',
    arti: 'Boleh terkena air saat dibersihkan, tapi tidak untuk direndam. Berbeda dengan tahan air penuh.',
    kenapa: 'Salah membaca keduanya adalah penyebab kerusakan yang paling sering terjadi.',
  },
  {
    kata: 'Kemasan polos',
    arti: 'Kotak cokelat tanpa cetakan, tanpa logo, dan tanpa keterangan isi selain "perlengkapan pribadi".',
    kenapa: 'Nama merek juga tidak muncul di resi maupun mutasi rekening.',
  },
  {
    kata: 'Masa garansi',
    arti: 'Rentang waktu penggantian bila alat rusak bukan karena pemakaian yang keliru.',
    kenapa: 'Klaim tetap dilayani dalam kemasan polos yang sama.',
  },
]

export default function Glossary() {
  return (
    <section id="kamus" className="relative overflow-hidden bg-day-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="micro mb-5 text-salvia">Kamus Ringkas</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Istilah yang sering bikin ragu, dijelaskan lebih dulu
          </h2>
          <p className="mt-5 leading-relaxed text-slate-soft">
            Enam kata yang paling sering muncul di keterangan produk. Dijelaskan apa adanya, supaya
            Anda bisa membandingkan sendiri tanpa harus bertanya lebih dulu.
          </p>
        </div>

        <dl className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {istilah.map((i) => (
            <div key={i.kata} className="term-card flex flex-col p-7">
              <dt className="font-[family-name:var(--font-display)] text-xl text-slate-ink">
                {i.kata}
              </dt>
              <dd className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">{i.arti}</dd>
              <dd className="mt-5 border-t border-slate-ink/10 pt-4">
                <span className="micro block text-salvia">Kenapa penting</span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-ink/75">
                  {i.kenapa}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="pill mt-10 flex flex-col gap-5 bg-salvia/10 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-slate-ink/80">
            Masih ada istilah yang belum jelas? Tanyakan dulu — tidak ada pertanyaan yang dianggap
            terlalu dasar, dan tidak ada yang menawari Anda produk sebagai jawabannya.
          </p>
          <Link
            href="/#kontak"
            className="micro pill shrink-0 bg-slate-ink px-6 py-3.5 text-center text-day transition-colors hover:bg-salvia"
          >
            Tanya Dulu
          </Link>
        </div>
      </div>
    </section>
  )
}
