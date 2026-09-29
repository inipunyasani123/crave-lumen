'use client'

import { useMemo, useState } from 'react'
import { KAMUS } from '@/lib/kamus'

/* Kamus lengkap dengan pencarian dan indeks huruf. Semua istilah selalu ada
   di HTML; pencarian hanya menyembunyikan yang tidak cocok. */
export default function KamusCari() {
  const [q, setQ] = useState('')
  const urut = useMemo(() => [...KAMUS].sort((a, b) => a.kata.localeCompare(b.kata, 'id')), [])
  const cocok = (k) => {
    const t = q.trim().toLowerCase()
    return !t || k.kata.toLowerCase().includes(t) || k.arti.toLowerCase().includes(t)
  }
  const huruf = [...new Set(urut.map((k) => k.kata[0].toUpperCase()))]
  const jumlah = urut.filter(cocok).length

  return (
    <>
      <div className="sticky top-20 z-20 -mx-6 bg-day/90 px-6 py-4 backdrop-blur">
        <label htmlFor="cari-istilah" className="sr-only">Cari istilah</label>
        <input
          id="cari-istilah"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari istilah, mis. pH atau tahan percik"
          className="w-full rounded-full border border-slate-ink/15 bg-day px-6 py-3.5 text-slate-ink placeholder:text-slate-soft focus:border-salvia focus:outline-none"
        />
        <nav aria-label="Indeks huruf" className="mt-3 flex flex-wrap gap-1.5">
          {huruf.map((h) => (
            <a key={h} href={`#huruf-${h}`} className="grid h-9 min-w-9 place-items-center rounded-full bg-day-2 px-2 text-sm font-semibold text-slate-ink hover:bg-salvia hover:text-day">
              {h}
            </a>
          ))}
        </nav>
      </div>

      <p aria-live="polite" className="sr-only">{jumlah} istilah ditemukan</p>
      {jumlah === 0 && <p className="term-card mt-8 p-8 text-slate-soft">Belum ada di kamus. Tanyakan lewat bantuan — istilah yang sering ditanyakan akan kami tambahkan.</p>}

      <dl className="mt-8 space-y-4">
        {urut.map((k, i) => {
          const pertama = i === 0 || urut[i - 1].kata[0].toUpperCase() !== k.kata[0].toUpperCase()
          return (
            <div key={k.slug} id={k.slug} hidden={!cocok(k)} className="term-card grid scroll-mt-48 gap-3 p-6 target:border-salvia target:ring-2 target:ring-salvia/40 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8 sm:p-7">
                <dt className="text-lg font-semibold text-slate-ink">
                  {pertama && <span id={`huruf-${k.kata[0].toUpperCase()}`} className="block scroll-mt-48" />}
                  {k.kata}
                </dt>
                <dd>
                  <p className="leading-relaxed text-slate-ink">{k.arti}</p>
                  <p className="mt-3 flex gap-2 text-sm leading-relaxed text-slate-soft">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-salvia" />
                    {k.kenapa}
                  </p>
                </dd>
            </div>
          )
        })}
      </dl>
    </>
  )
}
