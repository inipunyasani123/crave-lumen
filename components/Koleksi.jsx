'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { BANDING, KEBUTUHAN, PRODUK, alat, rupiah } from '@/lib/katalog'

/* Koleksi Lumen: saring menurut kebutuhan, lalu pilih tampilan — kartu atau
   tabel perbandingan. Tabel hanya membandingkan alat (bukan barang habis
   pakai) karena kolomnya memang berbeda. */
export default function Koleksi() {
  const [pilih, setPilih] = useState('semua')
  const [tampil, setTampil] = useState('kartu')

  useEffect(() => {
    const h = window.location.hash.slice(1)
    if (KEBUTUHAN.some((k) => k.id === h)) setPilih(h)
  }, [])

  const atur = (id) => {
    setPilih(id)
    history.replaceState(null, '', id === 'semua' ? window.location.pathname : `#${id}`)
  }

  const isi = pilih === 'semua' ? PRODUK : PRODUK.filter((p) => p.kebutuhan === pilih)
  const alatSaja = isi.filter(alat)

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none]" role="group" aria-label="Saring menurut kebutuhan">
          <div className="flex w-max gap-2">
            {[{ id: 'semua', label: 'Semua' }, ...KEBUTUHAN].map((k) => (
              <button
                key={k.id}
                type="button"
                onClick={() => atur(k.id)}
                aria-pressed={pilih === k.id}
                className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                  pilih === k.id ? 'border-slate-ink bg-slate-ink text-day' : 'border-slate-ink/15 bg-day text-slate-ink hover:border-salvia'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>
        </div>
        <div role="group" aria-label="Pilih tampilan" className="flex w-max rounded-full bg-day-2 p-1">
          {[['kartu', 'Kartu'], ['tabel', 'Tabel perbandingan']].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTampil(id)}
              aria-pressed={tampil === id}
              className={`min-h-10 rounded-full px-4 text-sm transition-colors ${tampil === id ? 'bg-day font-semibold text-slate-ink shadow-sm' : 'text-slate-soft hover:text-slate-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">Menampilkan {isi.length} barang dalam tampilan {tampil}</p>

      {tampil === 'kartu' ? (
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {isi.map((p) => (
            <li key={p.slug}><ProductCard p={p} /></li>
          ))}
        </ul>
      ) : alatSaja.length === 0 ? (
        <p className="term-card mt-10 p-8 text-slate-soft">
          Barang perawatan tidak dibandingkan di tabel — kolomnya berbeda (pH, osmolalitas). Buka tampilan kartu,
          atau lihat panel Fakta Produk di halaman masing-masing.
        </p>
      ) : (
        <div className="term-card mt-10 overflow-x-auto">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <caption className="sr-only">Perbandingan spesifikasi alat</caption>
            <thead>
              <tr className="border-b border-slate-ink/15">
                <th scope="col" className="px-5 py-4 font-semibold">Barang</th>
                {BANDING.map(([k, l]) => <th key={k} scope="col" className="px-4 py-4 font-semibold">{l}</th>)}
                <th scope="col" className="px-5 py-4 text-right font-semibold">Harga</th>
              </tr>
            </thead>
            <tbody>
              {alatSaja.map((p) => (
                <tr key={p.slug} className="border-b border-slate-ink/10 last:border-0">
                  <th scope="row" className="px-5 py-4 font-semibold">
                    <Link href={`/produk/${p.slug}`} className="text-slate-ink underline decoration-salvia/50 underline-offset-4 hover:decoration-salvia">{p.nama}</Link>
                  </th>
                  {BANDING.map(([k]) => <td key={k} className="px-4 py-4 text-slate-soft">{p.fakta[k]}</td>)}
                  <td className="px-5 py-4 text-right font-semibold whitespace-nowrap">{rupiah(p.harga)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
