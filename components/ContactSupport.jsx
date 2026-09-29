'use client'

import { useState } from 'react'

/* Bantuan Lumen: saluran kontak + formulir pertanyaan dengan kategori.
   Purwarupa — formulir disimulasikan, tidak ada yang dikirim. */

const SALURAN = [
  { label: 'Chat', nilai: 'Setiap hari 10.00–22.00 WIB', ket: 'Dijawab orang, bukan bot.' },
  { label: 'Surel', nilai: 'halo@positivecrave.id', href: 'mailto:halo@positivecrave.id', ket: 'Untuk pertanyaan panjang atau klaim garansi.' },
  { label: 'Telepon', nilai: '+62 812 3456 7890', href: 'tel:+6281234567890', ket: 'Senin–Jumat 09.00–17.00 WIB.' },
]

const TOPIK = ['Istilah & bahan', 'Cara pemakaian', 'Perawatan', 'Pengiriman', 'Garansi']

export default function ContactSupport() {
  const [ok, setOk] = useState(false)

  return (
    <section id="kontak" aria-labelledby="kontak-judul" className="relative overflow-hidden bg-day-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="micro mb-5 text-salvia-ink">Bantuan</p>
          <h2 id="kontak-judul" className="text-[2rem] leading-[1.14] md:text-[2.6rem]">Tanyakan seperti bertanya ke apotek</h2>
          <p className="mt-5 leading-relaxed text-slate-soft">
            Tenang, jelas, dan tanpa dorongan membeli. Bila jawabannya bisa berguna untuk orang lain, kami tambahkan
            ke kamus — tanpa menyebut siapa yang bertanya.
          </p>
          <dl className="mt-10 space-y-4">
            {SALURAN.map((s) => (
              <div key={s.label} className="term-card p-5">
                <dt className="micro text-salvia-ink">{s.label}</dt>
                <dd className="mt-2 font-semibold text-slate-ink">
                  {s.href ? <a href={s.href} className="break-all underline decoration-salvia/50 underline-offset-4 hover:decoration-salvia">{s.nilai}</a> : s.nilai}
                </dd>
                <dd className="mt-1 text-sm text-slate-soft">{s.ket}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="term-card h-fit p-7 sm:p-9">
          {ok ? (
            <p role="status" className="rounded-[var(--radius-round)] bg-salvia/12 p-6 text-slate-ink">
              Terima kasih. Di toko sungguhan, pertanyaan Anda dijawab lewat surel dalam satu hari kerja. Ini purwarupa
              desain, jadi tidak ada yang terkirim.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setOk(true)
              }}
              className="space-y-5"
            >
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-slate-ink">Topik</legend>
                <div className="flex flex-wrap gap-2">
                  {TOPIK.map((t, i) => (
                    <label key={t} className="cursor-pointer">
                      <input type="radio" name="topik" value={t} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="inline-flex min-h-10 items-center rounded-full border border-slate-ink/15 px-4 text-sm text-slate-ink peer-checked:border-slate-ink peer-checked:bg-slate-ink peer-checked:text-day peer-focus-visible:ring-2 peer-focus-visible:ring-salvia">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="tanya-surel" className="mb-2 block text-sm font-medium text-slate-ink">Surel untuk balasan</label>
                <input id="tanya-surel" type="email" required autoComplete="email" className="w-full rounded-full border border-slate-ink/15 bg-day px-5 py-3.5 text-slate-ink focus:border-salvia focus:outline-none" />
              </div>
              <div>
                <label htmlFor="tanya-isi" className="mb-2 block text-sm font-medium text-slate-ink">Pertanyaan</label>
                <textarea id="tanya-isi" rows={4} required className="w-full resize-y rounded-[1.25rem] border border-slate-ink/15 bg-day px-5 py-3.5 text-slate-ink focus:border-salvia focus:outline-none" />
              </div>
              <button type="submit" className="w-full rounded-full bg-slate-ink py-4 font-semibold text-day transition-colors hover:bg-salvia-ink">
                Kirim pertanyaan
              </button>
              <p className="text-center text-xs text-slate-soft">Purwarupa desain — formulir tidak mengirim apa pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
