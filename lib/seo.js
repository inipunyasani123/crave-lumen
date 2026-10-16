/* Satu sumber untuk metadata halaman. Setiap halaman memberi judul, deskripsi,
   dan path-nya sendiri; Open Graph dan Twitter ikut disusun dari situ supaya
   pratinjau tautan tidak lagi mewarisi judul & alamat beranda. */
export const SITE = 'https://crave-lumen.pintuweb.id'
export const SITE_NAME = 'Positive Crave — Konsep Lumen'
const SUFFIX = ' — Positive Crave'
const OG = { url: '/og.jpg', width: 1200, height: 630 }

/** Akhiran merek dipasang bila muat dalam 60 karakter; bila tidak, judul berdiri sendiri.
    Judul artikel yang tetap kepanjangan dipotong di titik dua (bagian sebelum penjelasnya). */
export function judul(dasar) {
  if (dasar.length > 60 && dasar.includes(': ')) dasar = dasar.slice(0, dasar.indexOf(': '))
  return dasar.length + SUFFIX.length <= 60 ? dasar + SUFFIX : dasar
}

/** Deskripsi dijaga ≤155 karakter: potong di tanda pisah, bila perlu di batas kata. */
export function ringkas(teks, maks = 155) {
  if (teks.length <= maks) return teks
  const pisah = teks.indexOf(' — ')
  if (pisah > 50 && pisah <= maks - 1) return teks.slice(0, pisah) + '.'
  return teks.slice(0, teks.lastIndexOf(' ', maks - 1)) + '…'
}

export function meta({ title, description, path = '', type = 'website', index = true }) {
  const t = judul(title)
  const d = ringkas(description)
  const url = SITE + path
  return {
    title: { absolute: t },
    description: d,
    alternates: { canonical: url },
    openGraph: { type, locale: 'id_ID', url, siteName: SITE_NAME, title: t, description: d, images: [{ ...OG, alt: t }] },
    twitter: { card: 'summary_large_image', title: t, description: d, images: [OG.url] },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  }
}
