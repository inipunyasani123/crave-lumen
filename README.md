# Positive Crave — Konsep Lumen

Landing page Positive Crave konsep "Lumen": keintiman dimulai dari cahaya — edukasi, rasa hormat, dan rasa aman.

**Demo live:** https://crave-lumen.pintuweb.id

![Tangkapan layar Positive Crave](public/og.jpg)

> Konsep desain untuk kontes brief Positive Crave, bukan toko resmi. Checkout dan login hanya purwarupa.

## Konsep

Konsep "Lumen" dengan bahasa rupa **Ruang Terang**: membicarakan keintiman seperti membicarakan kesehatan. Putih bersih, hijau salvia, pasir hangat, dan bentuk membulat besar supaya tidak terasa klinis.

## Halaman

`/` · `/checkout` · `/forgot` · `/masuk` · `/produk` · `/register`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon)
- Font: Lora, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

## Kredit foto

Foto hero berlisensi **CC0 (domain publik)**: bebas dipakai, termasuk untuk komersial, tanpa wajib atribusi. Asalnya tetap dicatat di sini supaya jelas.

- `public/images/hero.webp` — "Adult couple holding hands" oleh Alice Donovan Rouse (@alicekat), Wikimedia Commons, CC0 ([sumber](https://commons.wikimedia.org/w/index.php?curid=79267061)). Dipotong ke 4:5.
- `public/images/minyak-pijat.webp` — ilustrasi buatan sendiri untuk purwarupa ini.
- `public/images/produk/*.webp` — ilustrasi buatan sendiri untuk purwarupa ini (menggantikan foto produk yang asal-usulnya tidak terverifikasi). Ganti dengan foto produk asli klien sebelum situs dipakai sungguhan.
- Varian WebP di `public/_img/` dibuat dari gambar-gambar di atas oleh `scripts/static-images.mjs`.

---

Bagian dari koleksi 9 entri kontes desain web di [PortalKontes](https://www.pintuweb.id/kontes-desain). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
