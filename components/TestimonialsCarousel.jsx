/* Cerita pembeli versi Lumen: tiap kutipan dipasangkan dengan pertanyaan yang
   dulu membuat orang itu ragu — karena itulah yang paling berguna bagi
   pembaca berikutnya. Tanpa bintang, tanpa logo perusahaan. */

const CERITA = [
  {
    ragu: 'Pelumas itu tanda ada yang salah, kan?',
    kutip: 'Ternyata bukan. Setelah membaca soal pH dan osmolalitas, saya baru sadar rasa perih selama ini dari pelumas lama, bukan dari saya.',
    nama: 'R., 34',
    kota: 'Bandung',
  },
  {
    ragu: 'Bagaimana cara mencucinya tanpa merusak?',
    kutip: 'Saya dulu membilas alat yang cuma tahan percik di bawah keran. Kartu cara merawat yang ikut di kotak menyelamatkan yang baru.',
    nama: 'D. & A.',
    kota: 'Surabaya',
  },
  {
    ragu: 'Apa bedanya silikon dengan yang lebih murah?',
    kutip: 'Kamusnya menjelaskan tanpa menggurui. Saya membandingkan dua toko pakai istilah yang sama, lalu memutuskan sendiri.',
    nama: 'M., 29',
    kota: 'Yogyakarta',
  },
]

export default function TestimonialsCarousel() {
  return (
    <section aria-labelledby="cerita-judul" className="relative overflow-hidden bg-day-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="micro mb-5 text-salvia-ink">Catatan pembeli</p>
          <h2 id="cerita-judul" className="text-[2rem] leading-[1.14] md:text-[2.7rem]">Pertanyaan yang akhirnya berani ditanyakan</h2>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {CERITA.map((c) => (
            <li key={c.nama} className="term-card flex flex-col p-7">
              <p className="rounded-full bg-day-2 px-4 py-2 text-sm text-slate-ink">
                <span className="font-semibold">Dulu: </span>
                {c.ragu}
              </p>
              <blockquote className="mt-6 flex-1 font-[family-name:var(--font-display)] text-lg leading-relaxed text-slate-ink">
                &ldquo;{c.kutip}&rdquo;
              </blockquote>
              <p className="mt-6 border-t border-slate-ink/10 pt-4 text-sm text-slate-soft">
                <span className="font-semibold text-slate-ink">{c.nama}</span> · {c.kota}
              </p>
            </li>
          ))}
        </ul>
        <p className="micro mt-8 leading-[1.7] text-slate-soft">
          Nama disingkat atas permintaan. Kutipan adalah ilustrasi untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
