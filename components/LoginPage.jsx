'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [form, setForm] = useState({ surel: '', sandi: '' })
  const [memproses, setMemproses] = useState(false)

  const ubah = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e) => {
    e.preventDefault()
    setMemproses(true)
    // Purwarupa desain — tidak ada autentikasi sungguhan.
    setTimeout(() => setMemproses(false), 1000)
  }

  return (
    <section className="relative overflow-hidden bg-day pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="daylight absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto w-full max-w-md px-6">
        <p className="micro mb-5 text-salvia">Akun</p>
        <h1 className="text-[2rem] leading-[1.08] md:text-[2.5rem]">Masuk</h1>
        <p className="mt-4 leading-relaxed text-slate-soft">
          Untuk melihat riwayat pesanan dan status pengiriman. Surel kami tidak pernah mencantumkan nama
          merek pada judulnya.
        </p>

        <form onSubmit={kirim} className="mt-10 space-y-7">
          <div>
            <label htmlFor="surel" className="micro mb-3 block text-slate-soft/60">
              Surel <span className="text-salvia">*</span>
            </label>
            <input
              id="surel"
              name="surel"
              type="email"
              required
              value={form.surel}
              onChange={ubah}
              className="w-full border-b border-slate-ink/20 bg-transparent pb-2 text-sm text-slate-ink focus:border-salvia focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="sandi" className="micro mb-3 block text-slate-soft/60">
              Kata sandi <span className="text-salvia">*</span>
            </label>
            <input
              id="sandi"
              name="sandi"
              type="password"
              required
              value={form.sandi}
              onChange={ubah}
              className="w-full border-b border-slate-ink/20 bg-transparent pb-2 text-sm text-slate-ink focus:border-salvia focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={memproses}
            className="pill w-full bg-slate-ink py-4 text-sm font-semibold text-day transition-colors hover:bg-salvia disabled:opacity-70"
          >
            {memproses ? 'Memproses…' : 'Masuk'}
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-ink/10 pt-6">
          <Link href="/forgot" className="micro text-salvia hover:text-salvia">
            Lupa kata sandi
          </Link>
          <Link href="/register" className="micro text-slate-soft hover:text-salvia">
            Belum punya akun — daftar
          </Link>
        </div>

        <p className="micro mt-8 leading-[1.7] text-slate-soft/45">
          Purwarupa desain — tidak ada autentikasi sungguhan dan tidak ada data yang tersimpan.
        </p>
      </div>
    </section>
  )
}
