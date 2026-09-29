import { alat } from '@/lib/katalog'

/* Panel "Fakta Produk" — ciri khas Lumen, meniru label informasi nilai gizi:
   garis tebal, judul tebal, baris angka yang bisa dibandingkan. */
const BARIS_ALAT = [
  ['bahan', 'Bahan'],
  ['air', 'Ketahanan air'],
  ['db', 'Kebisingan'],
  ['daya', 'Daya'],
  ['pelumas', 'Pelumas yang cocok'],
]
const BARIS_RAWAT = [
  ['bahan', 'Bahan dasar'],
  ['ph', 'pH'],
  ['osmolalitas', 'Osmolalitas'],
  ['isi', 'Isi'],
  ['setelahDibuka', 'Setelah dibuka, pakai dalam'],
]

export default function FaktaProduk({ p }) {
  const baris = alat(p) ? BARIS_ALAT : BARIS_RAWAT
  return (
    <section aria-labelledby="fakta-judul" className="w-full max-w-sm border-2 border-slate-ink bg-day p-4 text-slate-ink">
      {/* Tipografi lewat span: aturan h2 global (di luar layer) mengunci font & ketebalan */}
      <h2 id="fakta-judul">
        <span className="block font-[family-name:var(--font-inter)] text-[1.7rem] leading-none font-black tracking-tight">Fakta Produk</span>
      </h2>
      <p className="mt-1 border-b-[10px] border-slate-ink pb-2 text-sm">{p.nama}</p>
      <dl>
        {baris.map(([k, label], i) => (
          <div key={k} className={`flex justify-between gap-4 py-1.5 text-sm ${i === 0 ? 'border-b-4' : 'border-b'} border-slate-ink`}>
            <dt className="font-bold">{label}</dt>
            <dd className="text-right">{p.fakta[k]}</dd>
          </div>
        ))}
        {alat(p) && (
          <div className="flex justify-between gap-4 border-b border-slate-ink py-1.5 text-sm">
            <dt className="font-bold">Bebas BPA</dt>
            <dd>Ya</dd>
          </div>
        )}
      </dl>
      <p className="mt-2 text-xs leading-snug">
        Angka adalah contoh untuk purwarupa desain. Istilah yang bergaris bawah dijelaskan di kamus.
      </p>
    </section>
  )
}
