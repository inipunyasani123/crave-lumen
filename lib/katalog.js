/* ============================================================================
   Katalog konsep "Lumen" — Ruang Terang.
   Ciri khas varian ini: setiap barang dijelaskan seperti produk kesehatan.
   Ada panel "Fakta Produk" bergaya label gizi, istilah yang bisa diklik ke
   /kamus, dan cara merawatnya. Tidak ada kata sifat berlebihan — hanya
   angka dan keterangan yang bisa dibandingkan.
   Nama, harga, dan spesifikasi adalah contoh untuk purwarupa desain kontes.
   ========================================================================== */

export const KEBUTUHAN = [
  { id: 'pemula', label: 'Untuk pemula', desc: 'Sedikit tombol, ukuran kecil, suara pelan.' },
  { id: 'berdua', label: 'Untuk berdua', desc: 'Dirancang untuk dipakai bersama pasangan.' },
  { id: 'perawatan', label: 'Perawatan', desc: 'Pelumas, minyak, dan pembersih yang habis pakai.' },
]

// Kolom tabel perbandingan di /koleksi (kunci yang sama ada di tiap barang alat).
export const BANDING = [
  ['bahan', 'Bahan'],
  ['air', 'Ketahanan air'],
  ['db', 'Kebisingan'],
  ['daya', 'Daya'],
  ['pelumas', 'Pelumas yang cocok'],
]

export const PRODUK = [
  {
    slug: 'lumen-mini',
    nama: 'Lumen Mini',
    kebutuhan: 'pemula',
    harga: 299000,
    image: '/images/produk/bullet.webp',
    unggulan: true,
    ringkas: 'Satu tombol, tiga kekuatan, sebesar lipstik. Titik mulai yang paling sederhana.',
    penjelasan: 'Alat getar kecil dengan satu motor. Tidak ada pola atau aplikasi — hanya tiga tingkat kekuatan yang diganti dengan satu tombol. Cocok untuk mengenal apa yang terasa nyaman sebelum memilih alat yang lebih rumit.',
    fakta: { bahan: 'Silikon medical-grade', air: 'IPX7 — tahan air penuh', db: '< 40 dB', daya: 'Baterai AAA, ±3 jam', pelumas: 'Berbahan air' },
    istilah: ['medical-grade', 'ipx', 'pelumas-berbahan-air'],
    rawat: ['Cuci dengan air hangat dan sabun tanpa pewangi.', 'Keringkan dengan diangin-anginkan.', 'Lepas baterai bila tidak dipakai lebih dari sebulan.'],
  },
  {
    slug: 'wand-lembut',
    nama: 'Wand Lembut',
    kebutuhan: 'pemula',
    harga: 890000,
    image: '/images/produk/wand.webp',
    unggulan: false,
    ringkas: 'Kepala lebar dan empuk, getaran menyebar — bukan terpusat di satu titik.',
    penjelasan: 'Alat getar dengan kepala lebar. Karena permukaannya luas, getarannya menyebar sehingga terasa lebih lembut dibanding alat kecil pada kekuatan yang sama. Juga bisa dipakai untuk pijat otot bahu dan punggung.',
    fakta: { bahan: 'Kepala silikon, gagang ABS', air: 'Tahan percik', db: '< 42 dB', daya: 'USB-C, ±2,5 jam', pelumas: 'Berbahan air' },
    istilah: ['tahan-percik', 'medical-grade', 'abs'],
    rawat: ['Lap kepala dengan kain lembap bersabun, lalu kain bersih.', 'Jangan dibilas di bawah keran — hanya tahan percik.', 'Isi ulang sampai lampu indikator padam.'],
  },
  {
    slug: 'lumen-duo',
    nama: 'Lumen Duo',
    kebutuhan: 'berdua',
    harga: 1240000,
    image: '/images/produk/duo.webp',
    unggulan: true,
    ringkas: 'Bentuk melengkung untuk dipakai berdua sekaligus. Dua motor, sepuluh pola.',
    penjelasan: 'Alat untuk pasangan dengan dua motor yang bisa diatur terpisah. Bentuknya melengkung sehingga bisa tetap di tempat saat dipakai bersama. Karena ada banyak pola, kami sarankan mencobanya pelan-pelan dari pola pertama.',
    fakta: { bahan: 'Silikon medical-grade', air: 'IPX6 — tahan semburan', db: '< 45 dB', daya: 'USB-C, ±2 jam', pelumas: 'Berbahan air' },
    istilah: ['medical-grade', 'ipx', 'pelumas-berbahan-air'],
    rawat: ['Cuci seluruh permukaan dengan sabun tanpa pewangi.', 'Keringkan lekukan dalam dengan kain bebas serat.', 'Simpan di kantong kain terpisah.'],
  },
  {
    slug: 'lumen-sync',
    nama: 'Lumen Sync',
    kebutuhan: 'berdua',
    harga: 1450000,
    image: '/images/produk/remote.webp',
    unggulan: false,
    ringkas: 'Dikendalikan lewat aplikasi, termasuk dari jarak jauh. Data sesi tidak disimpan.',
    penjelasan: 'Alat getar yang tersambung ke aplikasi lewat Bluetooth, dan lewat internet bila pasangan berada di kota lain. Aplikasinya tidak meminta akun media sosial dan tidak menyimpan riwayat pemakaian di server.',
    fakta: { bahan: 'Silikon medical-grade', air: 'Tahan percik', db: '< 43 dB', daya: 'Magnetik, ±90 menit', pelumas: 'Berbahan air' },
    istilah: ['tahan-percik', 'bluetooth', 'medical-grade'],
    rawat: ['Lap dengan kain lembap bersabun — jangan direndam.', 'Bersihkan titik pengisian magnetik agar tidak berkarat.', 'Perbarui aplikasi untuk tambalan keamanan.'],
  },
  {
    slug: 'set-eksplorasi',
    nama: 'Set Eksplorasi',
    kebutuhan: 'berdua',
    harga: 1390000,
    image: '/images/produk/set.webp',
    unggulan: false,
    ringkas: 'Empat bentuk dengan ukuran berjenjang, untuk yang ingin mencoba lebih dari satu.',
    penjelasan: 'Empat alat tanpa motor dengan ukuran dan bentuk berbeda, disusun dari yang terkecil. Karena tanpa motor, perawatannya paling mudah di katalog ini dan semuanya tahan air penuh.',
    fakta: { bahan: 'Silikon medical-grade', air: 'Tahan air penuh', db: 'Tanpa motor', daya: '—', pelumas: 'Berbahan air' },
    istilah: ['medical-grade', 'non-berpori', 'pelumas-berbahan-air'],
    rawat: ['Cuci dengan air hangat dan sabun, atau rebus 3 menit.', 'Keringkan satu per satu.', 'Simpan di kotak bersekat — silikon tidak boleh saling menempel lama.'],
  },
  {
    slug: 'pelumas-berbahan-air',
    nama: 'Pelumas Berbahan Air',
    kebutuhan: 'perawatan',
    harga: 149000,
    image: '/images/produk/pelumas.webp',
    unggulan: true,
    ringkas: 'pH 4,5 mendekati pH alami, tanpa gliserin dan pewangi. Aman untuk semua alat di katalog.',
    penjelasan: 'Pelumas dengan air sebagai bahan utama. Kami menyesuaikan pH-nya mendekati pH alami area intim dan menjaga osmolalitasnya rendah supaya tidak menarik cairan dari jaringan kulit — dua angka yang jarang dicantumkan toko lain.',
    fakta: { bahan: 'Air, hidroksietil selulosa', ph: '4,5', osmolalitas: '< 1.200 mOsm/kg', isi: '100 ml', setelahDibuka: '12 bulan' },
    istilah: ['ph', 'osmolalitas', 'pelumas-berbahan-air', 'gliserin'],
    rawat: ['Simpan di suhu ruang, jauh dari matahari langsung.', 'Tutup rapat setelah dipakai.', 'Buang bila warna atau baunya berubah.'],
  },
  {
    slug: 'minyak-pijat-netral',
    nama: 'Minyak Pijat Netral',
    kebutuhan: 'perawatan',
    harga: 139000,
    image: '/images/minyak-pijat.webp',
    unggulan: false,
    ringkas: 'Tanpa pewangi tambahan, untuk kulit yang mudah bereaksi. Hanya pemakaian luar.',
    penjelasan: 'Minyak pijat berbahan jojoba dan biji anggur tanpa pewangi tambahan. Karena berbahan minyak, jangan dipakai bersama kondom lateks — minyak melemahkan lateks.',
    fakta: { bahan: 'Jojoba, biji anggur', ph: '— (berbahan minyak)', osmolalitas: '—', isi: '100 ml', setelahDibuka: '9 bulan' },
    istilah: ['lateks', 'pewangi'],
    rawat: ['Simpan di tempat sejuk.', 'Cuci seprai dengan air hangat bila terkena.', 'Hentikan pemakaian bila kulit memerah.'],
  },
  {
    slug: 'set-perawatan',
    nama: 'Set Perawatan',
    kebutuhan: 'perawatan',
    harga: 320000,
    image: '/images/produk/kit.webp',
    unggulan: false,
    ringkas: 'Pelumas, pembersih alat, dan kantong kain — yang paling sering lupa dibeli.',
    penjelasan: 'Paket barang habis pakai: pelumas berbahan air 100 ml, pembersih alat berbahan dasar air 100 ml, dan dua kantong kain untuk menyimpan alat terpisah. Pembersihnya tidak mengandung alkohol yang bisa membuat silikon kering dan retak.',
    fakta: { bahan: 'Pelumas + pembersih bebas alkohol', ph: '4,5 (pelumas)', osmolalitas: '< 1.200 mOsm/kg', isi: '2 × 100 ml + 2 kantong', setelahDibuka: '12 bulan' },
    istilah: ['pelumas-berbahan-air', 'non-berpori', 'ph'],
    rawat: ['Semprot pembersih, diamkan 30 detik, bilas atau lap.', 'Cuci kantong kain setiap bulan.', 'Simpan botol tegak.'],
  },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const produkBySlug = (slug) => PRODUK.find((p) => p.slug === slug)
export const labelKebutuhan = (id) => KEBUTUHAN.find((k) => k.id === id)?.label ?? id
export const alat = (p) => p.kebutuhan !== 'perawatan'
