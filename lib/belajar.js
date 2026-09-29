/* ============================================================================
   "Belajar" — jurnal konsep Lumen. Format penjelas (explainer) seperti
   halaman kesehatan: ringkasan tiga poin di atas, subjudul yang jelas,
   tabel bila perlu, dan istilah yang menaut ke /kamus.
   Blok: { p }, { h }, { daftar }, { tabel: { kepala, baris } }, { perhatian }
   ========================================================================== */

export const BELAJAR = [
  {
    slug: 'memilih-pelumas',
    judul: 'Memilih pelumas: air, silikon, atau minyak?',
    ringkas: 'Tiga jenis pelumas, tiga kegunaan berbeda. Cara memilih tanpa harus mencoba semuanya.',
    menit: 5,
    topik: 'Perawatan',
    poin: [
      'Bila ragu, pilih berbahan air — aman untuk semua alat dan kondom.',
      'Berbahan silikon lebih awet, tapi merusak alat silikon.',
      'Minyak hanya untuk pijat luar dan melemahkan kondom lateks.',
    ],
    istilah: ['pelumas-berbahan-air', 'pelumas-berbahan-silikon', 'lateks', 'osmolalitas', 'ph'],
    isi: [
      { p: 'Pelumas bukan tanda ada yang "kurang". Tubuh tidak selalu menghasilkan cukup pelumas alami, dan itu dipengaruhi banyak hal: hormon, obat-obatan, stres, bahkan cuaca. Memakai pelumas sama wajarnya dengan memakai pelembap.' },
      { h: 'Perbandingan singkat' },
      {
        tabel: {
          kepala: ['', 'Berbahan air', 'Berbahan silikon', 'Berbahan minyak'],
          baris: [
            ['Dengan alat silikon', 'Aman', 'Tidak', 'Aman'],
            ['Dengan kondom lateks', 'Aman', 'Aman', 'Tidak'],
            ['Tahan lama', 'Sedang', 'Paling lama', 'Lama'],
            ['Mudah dibersihkan', 'Paling mudah', 'Sulit', 'Sulit'],
          ],
        },
      },
      { h: 'Dua angka yang jarang dibahas' },
      { p: 'Pada pelumas berbahan air, ada dua angka yang menentukan apakah kulit akan nyaman: pH dan osmolalitas. pH yang terlalu tinggi mengganggu keseimbangan alami, sedangkan osmolalitas yang terlalu tinggi menarik cairan dari sel kulit sehingga terasa perih setelahnya.' },
      { daftar: ['pH yang baik: sekitar 3,8–4,5.', 'Osmolalitas yang baik: di bawah 1.200 mOsm/kg.', 'Tanpa gliserin dan pewangi bila kulit mudah iritasi.'] },
      { perhatian: 'Bila muncul rasa panas, gatal, atau kemerahan setelah memakai pelumas apa pun, hentikan pemakaian. Bila berlanjut lebih dari dua hari, periksakan ke tenaga kesehatan.' },
    ],
  },
  {
    slug: 'membersihkan-dan-menyimpan',
    judul: 'Membersihkan dan menyimpan alat dengan benar',
    ringkas: 'Langkah sederhana sebelum dan sesudah dipakai, supaya alat awet dan tetap higienis.',
    menit: 4,
    topik: 'Kebersihan',
    poin: [
      'Cuci sebelum dan sesudah dipakai, bukan sesudahnya saja.',
      'Periksa kode IPX sebelum membilas di bawah keran.',
      'Simpan terpisah — silikon bisa bereaksi bila saling menempel lama.',
    ],
    istilah: ['ipx', 'tahan-percik', 'non-berpori', 'tpe'],
    isi: [
      { p: 'Merawat alat keintiman tidak berbeda jauh dengan merawat sikat gigi: dibersihkan setiap kali dipakai, dikeringkan, dan disimpan di tempat yang bersih. Bedanya, ada satu hal yang perlu diperiksa dulu — seberapa tahan alat itu terhadap air.' },
      { h: 'Langkah membersihkan' },
      { daftar: ['Matikan alat dan lepaskan dari pengisi daya.', 'Tahan air penuh (IPX7): cuci dengan air hangat dan sabun tanpa pewangi.', 'Tahan percik: lap dengan kain lembap bersabun, lalu kain lembap bersih.', 'Keringkan dengan diangin-anginkan atau kain bebas serat.'] },
      { h: 'Yang sebaiknya dihindari' },
      { daftar: ['Alkohol dan tisu basah beralkohol — membuat silikon kering dan retak.', 'Pemutih dan pembersih lantai.', 'Mesin pencuci piring, kecuali tertulis aman di panduan.'] },
      { h: 'Menyimpan' },
      { p: 'Simpan setiap alat di kantong kainnya sendiri, di tempat kering dan tidak terkena matahari langsung. Silikon yang saling menempel dalam waktu lama bisa bereaksi dan permukaannya menjadi lengket.' },
      { perhatian: 'Alat berbahan TPE atau jelly bersifat berpori dan tidak bisa dibersihkan tuntas. Bila Anda memilikinya, pakailah bersama kondom dan ganti secara berkala.' },
    ],
  },
  {
    slug: 'membaca-label-produk',
    judul: 'Membaca label produk: IPX, dB, dan medical-grade',
    ringkas: 'Tiga baris di keterangan produk yang paling menentukan, dan cara membacanya.',
    menit: 4,
    topik: 'Memilih',
    poin: [
      'Medical-grade berarti tidak berpori — cari kata ini lebih dulu.',
      'Di bawah 45 dB umumnya tidak terdengar dari luar kamar.',
      'IPX7 boleh direndam; tahan percik hanya boleh dilap.',
    ],
    istilah: ['medical-grade', 'db', 'ipx', 'bebas-bpa'],
    isi: [
      { p: 'Setiap halaman produk kami memuat panel "Fakta Produk" yang bentuknya mirip label gizi. Kami membuatnya begitu karena alasan yang sama: supaya dua produk bisa dibandingkan dengan angka, bukan dengan kata sifat.' },
      { h: 'Bahan' },
      { p: 'Baris pertama adalah yang terpenting. Cari "silikon medical-grade" atau bahan non-berpori lain seperti kaca borosilikat. Bila yang tertulis hanya "body-safe" tanpa nama bahan, anggap informasinya belum lengkap dan tanyakan.' },
      { h: 'Kebisingan' },
      {
        tabel: {
          kepala: ['Angka', 'Kira-kira setara', 'Terdengar dari luar kamar?'],
          baris: [
            ['< 40 dB', 'Perpustakaan yang tenang', 'Hampir tidak'],
            ['40–50 dB', 'Kulkas yang menyala', 'Jarang, bila pintu tertutup'],
            ['> 50 dB', 'Percakapan biasa', 'Mungkin'],
          ],
        },
      },
      { h: 'Ketahanan air' },
      { p: 'Kode IPX menentukan cara mencuci. Salah membaca "tahan percik" sebagai "tahan air" adalah penyebab kerusakan paling umum yang kami terima di klaim garansi.' },
      { perhatian: 'Angka di katalog kami adalah contoh untuk purwarupa desain. Pada toko sungguhan, angka ini wajib berasal dari pengujian produsen.' },
    ],
  },
]

export const belajarBySlug = (slug) => BELAJAR.find((b) => b.slug === slug)
