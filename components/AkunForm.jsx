'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Cangkang akun Lumen: tenang seperti ruang tunggu klinik yang terang.
   Sudut pandangnya: kami tidak meminta data kesehatan, usia, atau jenis
   kelamin — hanya yang dibutuhkan untuk mengirim paket. Pengingat isi ulang
   barang habis pakai bersifat opsional. Purwarupa tanpa autentikasi. */

const MODE = {
  masuk: {
    judul: 'Masuk',
    lead: 'Untuk melihat pesanan, status pengiriman, dan pengingat isi ulang yang Anda atur.',
    tombol: 'Masuk',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'current-password' },
    ],
    selesai: 'Di toko sungguhan, Anda kini masuk. Ini purwarupa desain, jadi tidak ada akun yang diperiksa.',
  },
  daftar: {
    judul: 'Buat akun',
    lead: 'Hanya surel dan kata sandi. Kami tidak menanyakan usia, jenis kelamin, atau kondisi kesehatan.',
    tombol: 'Buat akun',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi (min. 8 karakter)', type: 'password', auto: 'new-password' },
    ],
    pengingat: true,
    selesai: 'Di toko sungguhan, akun Anda kini aktif. Ini purwarupa desain — tidak ada data yang tersimpan.',
  },
  lupa: {
    judul: 'Atur ulang kata sandi',
    lead: 'Masukkan surel akun Anda. Tautan untuk mengatur ulang berlaku 30 menit.',
    tombol: 'Kirim tautan',
    medan: [{ name: 'surel', label: 'Surel', type: 'email', auto: 'email' }],
    selesai: 'Di toko sungguhan, tautannya sudah terkirim. Ini purwarupa desain.',
  },
}

const TIDAK = ['Usia atau tanggal lahir', 'Jenis kelamin', 'Kondisi kesehatan', 'Akun media sosial']

export default function AkunForm({ mode }) {
  const m = MODE[mode]
  const [proses, setProses] = useState(false)
  const [ok, setOk] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setOk(true)
    }, 900)
  }

  return (
    <section className="relative bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div className="term-card p-7 sm:p-10">
          <p className="micro text-salvia-ink">Akun</p>
          <h1 className="mt-4 text-[2.2rem] leading-[1.1]">{m.judul}</h1>
          <p className="mt-4 leading-relaxed text-slate-soft">{m.lead}</p>

          {ok ? (
            <p role="status" className="mt-8 rounded-[var(--radius-round)] bg-salvia/12 p-6 text-slate-ink">{m.selesai}</p>
          ) : (
            <form onSubmit={kirim} className="mt-8 space-y-5">
              {m.medan.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-2 block text-sm font-medium text-slate-ink">{f.label}</label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    required
                    minLength={f.type === 'password' && mode === 'daftar' ? 8 : undefined}
                    className="w-full rounded-full border border-slate-ink/15 bg-day px-5 py-3.5 text-slate-ink focus:border-salvia focus:outline-none"
                  />
                </div>
              ))}
              {m.pengingat && (
                <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius-round)] bg-day-2 p-5">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-[#4a6857]" />
                  <span className="text-sm leading-relaxed text-slate-ink">
                    <span className="font-semibold">Ingatkan saya saat pelumas hampir habis</span>
                    <span className="mt-1 block text-slate-soft">Satu surel setiap dua bulan, bisa dimatikan kapan saja.</span>
                  </span>
                </label>
              )}
              <button type="submit" disabled={proses} className="w-full rounded-full bg-slate-ink py-4 font-semibold text-day transition-colors hover:bg-salvia-ink disabled:opacity-70">
                {proses ? 'Memproses…' : m.tombol}
              </button>
            </form>
          )}

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {mode !== 'masuk' && <Link href="/masuk" className="font-medium text-slate-ink underline decoration-salvia underline-offset-4">Masuk</Link>}
            {mode !== 'daftar' && <Link href="/register" className="font-medium text-slate-ink underline decoration-salvia underline-offset-4">Buat akun</Link>}
            {mode === 'masuk' && <Link href="/forgot" className="text-slate-soft underline decoration-slate-ink/20 underline-offset-4">Lupa kata sandi</Link>}
          </div>
          <p className="mt-6 text-xs text-slate-soft">Purwarupa desain — tidak ada autentikasi sungguhan.</p>
        </div>

        <aside className="self-start">
          <h2 className="text-xl">Yang tidak pernah kami tanyakan</h2>
          <ul className="mt-5 space-y-3">
            {TIDAK.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-full bg-day-2 px-5 py-3 text-sm text-slate-ink">
                <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-day text-xs text-slate-soft">✕</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate-soft">
            Belanja tanpa akun juga bisa. Akun hanya memudahkan melacak paket dan mengatur pengingat.
          </p>
        </aside>
      </div>
    </section>
  )
}
