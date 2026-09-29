'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { PRODUK, alat, produkBySlug, rupiah } from '@/lib/katalog'

const ONGKIR = 25000
const PEMBERSIH = 89000
const MEDAN = [
  ['nama', 'Nama penerima', 'name', 'text'],
  ['telepon', 'Telepon', 'tel', 'tel'],
  ['surel', 'Surel', 'email', 'email'],
]

export default function CheckoutPage() {
  const q = useSearchParams()
  const p = produkBySlug(q.get('produk')) ?? PRODUK.find((x) => x.unggulan)
  const [pembersih, setPembersih] = useState(false)
  const [proses, setProses] = useState(false)
  const [selesai, setSelesai] = useState(false)
  const total = p.harga + ONGKIR + (pembersih ? PEMBERSIH : 0)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setSelesai(true)
    }, 1000)
  }

  return (
    <section className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="micro text-salvia-ink">Pemesanan</p>
        <h1 className="mt-4 text-[2.3rem] leading-[1.1] md:text-[2.9rem]">Tinggal alamat pengiriman</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {selesai ? (
            <div role="status" className="term-card p-10 text-center">
              <p className="text-2xl text-slate-ink">Terima kasih</p>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-slate-soft">
                Ini purwarupa desain untuk kontes — tidak ada pesanan atau pembayaran yang diproses. Di toko sungguhan,
                {' '}{p.nama} dikirim dalam kemasan polos bersama kartu cara merawatnya.
              </p>
              <button onClick={() => setSelesai(false)} className="mt-6 text-sm font-semibold text-slate-ink underline decoration-salvia underline-offset-4">Kembali ke formulir</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="term-card space-y-5 p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                {MEDAN.map(([n, l, a, t]) => (
                  <div key={n} className={n === 'surel' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={n} className="mb-2 block text-sm font-medium text-slate-ink">{l}</label>
                    <input id={n} name={n} type={t} autoComplete={a} required className="w-full rounded-full border border-slate-ink/15 bg-day px-5 py-3.5 text-slate-ink focus:border-salvia focus:outline-none" />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="alamat" className="mb-2 block text-sm font-medium text-slate-ink">Alamat pengiriman</label>
                <textarea id="alamat" name="alamat" rows={3} required autoComplete="street-address" className="w-full resize-y rounded-[1.25rem] border border-slate-ink/15 bg-day px-5 py-3.5 text-slate-ink focus:border-salvia focus:outline-none" />
              </div>

              {alat(p) && (
                <label className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-round)] bg-day-2 p-5">
                  <input type="checkbox" checked={pembersih} onChange={(e) => setPembersih(e.target.checked)} className="mt-1 h-4 w-4 accent-[#4a6857]" />
                  <span className="text-sm leading-relaxed">
                    <span className="block font-semibold text-slate-ink">Tambah pembersih alat bebas alkohol · {rupiah(PEMBERSIH)}</span>
                    <span className="mt-1 block text-slate-soft">
                      Disarankan, bukan wajib: sabun tanpa pewangi juga cukup. Alkohol yang membuat silikon kering dan retak.{' '}
                      <Link href="/belajar/membersihkan-dan-menyimpan" className="text-slate-ink underline decoration-salvia underline-offset-4">Kenapa?</Link>
                    </span>
                  </span>
                </label>
              )}

              <button type="submit" disabled={proses} className="w-full rounded-full bg-slate-ink py-4 font-semibold text-day transition-colors hover:bg-salvia-ink disabled:opacity-70">
                {proses ? 'Memproses…' : `Pesan · ${rupiah(total)}`}
              </button>
              <p className="text-center text-xs text-slate-soft">Purwarupa desain — tidak ada pembayaran maupun data yang tersimpan.</p>
            </form>
          )}

          <aside className="term-card h-fit overflow-hidden">
            <div className="relative m-2 aspect-[16/10] overflow-hidden rounded-[calc(var(--radius-round)-0.5rem)] bg-day-2">
              <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xl text-slate-ink">{p.nama}</p>
              <p className="mt-1 text-sm text-slate-soft">{alat(p) ? `${p.fakta.bahan} · ${p.fakta.air}` : `pH ${p.fakta.ph} · ${p.fakta.isi}`}</p>
              <dl className="mt-6 divide-y divide-slate-ink/10 border-y border-slate-ink/10 text-sm">
                {[[p.nama, rupiah(p.harga)], ...(pembersih ? [['Pembersih alat', rupiah(PEMBERSIH)]] : []), ['Pengiriman, kemasan polos', rupiah(ONGKIR)]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-slate-soft">{k}</dt>
                    <dd className="text-slate-ink">{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-4">
                  <dt className="font-semibold text-slate-ink">Total</dt>
                  <dd className="text-lg font-semibold text-slate-ink">{rupiah(total)}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-slate-soft">Termasuk kartu cara merawat, dicetak tanpa logo.</p>
              <Link href={`/produk/${p.slug}`} className="mt-4 inline-block text-sm font-semibold text-slate-ink underline decoration-salvia underline-offset-4">← Kembali ke produk</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
