/* ============================================================================
   Kamus konsep "Lumen" — istilah yang muncul di keterangan produk, dijelaskan
   datar dan tanpa sindiran. Dipakai oleh /kamus, panel istilah di halaman
   produk, dan bagian "Kamus Ringkas" di beranda.
   ========================================================================== */

export const KAMUS = [
  { slug: 'abs', kata: 'ABS', arti: 'Plastik keras yang biasa dipakai untuk gagang dan tombol. Tidak bersentuhan langsung dengan area intim pada alat yang dirancang dengan benar.', kenapa: 'Aman sebagai gagang, tapi bukan untuk permukaan yang masuk ke tubuh.' },
  { slug: 'bebas-bpa', kata: 'Bebas BPA', arti: 'Tanpa bisphenol-A, senyawa pada sebagian plastik yang dihindari untuk produk yang bersentuhan lama dengan kulit.', kenapa: 'Penanda paling dasar saat membandingkan dua produk, semurah apa pun.' },
  { slug: 'bluetooth', kata: 'Bluetooth & aplikasi', arti: 'Sambungan nirkabel antara alat dan ponsel. Pada alat yang baik, aplikasinya tidak meminta akun media sosial dan tidak menyimpan riwayat pemakaian.', kenapa: 'Alat yang tersambung internet juga soal privasi data, bukan hanya fitur.' },
  { slug: 'db', kata: 'dB (desibel)', arti: 'Satuan tingkat suara. 40 dB kira-kira setara ruang perpustakaan yang tenang; 60 dB setara percakapan biasa.', kenapa: 'Penting bila tinggal bersama keluarga atau berdinding tipis.' },
  { slug: 'ftalat', kata: 'Ftalat', arti: 'Zat pelentur pada plastik lunak murah (misalnya PVC "jelly"). Banyak negara membatasinya untuk produk yang bersentuhan dengan tubuh.', kenapa: 'Tanda bahaya: bau plastik tajam dan permukaan berminyak.' },
  { slug: 'gliserin', kata: 'Gliserin', arti: 'Pemanis dan pelembap yang sering ada di pelumas. Pada sebagian orang dapat memicu iritasi atau infeksi jamur.', kenapa: 'Pelumas kami tidak memakainya; periksa label bila Anda sensitif.' },
  { slug: 'ipx', kata: 'Kode IPX', arti: 'Angka ketahanan terhadap air. IPX4 tahan percikan, IPX6 tahan semburan, IPX7 boleh direndam sebentar.', kenapa: 'Menentukan cara mencuci: dibilas di keran atau hanya dilap.' },
  { slug: 'kemasan-polos', kata: 'Kemasan polos', arti: 'Kotak cokelat tanpa cetakan, tanpa logo, dan tanpa keterangan isi selain "perlengkapan pribadi".', kenapa: 'Nama merek juga tidak muncul di resi maupun mutasi rekening.' },
  { slug: 'lateks', kata: 'Lateks', arti: 'Bahan karet alami pada sebagian besar kondom. Rusak bila terkena minyak, termasuk minyak pijat dan losion.', kenapa: 'Pakai pelumas berbahan air atau silikon bersama kondom lateks.' },
  { slug: 'masa-garansi', kata: 'Masa garansi', arti: 'Rentang waktu penggantian bila alat rusak bukan karena pemakaian yang keliru.', kenapa: 'Klaim tetap dilayani dalam kemasan polos yang sama.' },
  { slug: 'medical-grade', kata: 'Medical-grade', arti: 'Bahan yang lolos syarat kontak dengan tubuh: tidak berpori, tidak menyerap, dan bisa dibersihkan sampai benar-benar bersih.', kenapa: 'Bahan berpori menyimpan sisa dan bakteri meski sudah dicuci.' },
  { slug: 'non-berpori', kata: 'Non-berpori', arti: 'Permukaan tanpa rongga mikroskopis. Silikon, kaca borosilikat, dan baja tahan karat termasuk di sini; TPE dan jelly tidak.', kenapa: 'Satu-satunya jenis bahan yang benar-benar bisa dibersihkan tuntas.' },
  { slug: 'osmolalitas', kata: 'Osmolalitas', arti: 'Ukuran kepekatan zat terlarut dalam pelumas. Bila terlalu tinggi, pelumas menarik cairan dari sel kulit dan bisa membuat iritasi.', kenapa: 'WHO menyarankan di bawah 1.200 mOsm/kg; jarang dicantumkan toko lain.' },
  { slug: 'pelumas-berbahan-air', kata: 'Pelumas berbahan air', arti: 'Pelumas dengan air sebagai bahan utama. Mudah dibilas dan aman dipakai bersama alat berbahan silikon maupun kondom lateks.', kenapa: 'Pilihan paling aman bila ragu.' },
  { slug: 'pelumas-berbahan-silikon', kata: 'Pelumas berbahan silikon', arti: 'Pelumas yang lebih tahan lama dan tidak mudah kering, tapi sulit dibilas.', kenapa: 'Dapat merusak permukaan alat berbahan silikon — jangan dicampur.' },
  { slug: 'pewangi', kata: 'Pewangi', arti: 'Zat aroma tambahan. Membuat produk terasa lebih menyenangkan, tapi termasuk penyebab iritasi yang paling umum.', kenapa: 'Untuk kulit sensitif, pilih yang tanpa pewangi.' },
  { slug: 'ph', kata: 'pH', arti: 'Tingkat keasaman. Area intim perempuan umumnya ber-pH 3,8–4,5; pelumas dengan pH jauh di atasnya dapat mengganggu keseimbangan alami.', kenapa: 'Pelumas kami ber-pH 4,5.' },
  { slug: 'tahan-percik', kata: 'Tahan percik', arti: 'Boleh terkena air saat dibersihkan, tapi tidak untuk direndam. Berbeda dengan tahan air penuh (IPX7).', kenapa: 'Salah membaca keduanya adalah penyebab kerusakan yang paling sering.' },
  { slug: 'tpe', kata: 'TPE', arti: 'Karet termoplastik yang lebih murah dan terasa sangat lembut, tetapi berpori.', kenapa: 'Tidak bisa dibersihkan tuntas; sebaiknya dipakai dengan kondom dan diganti berkala.' },
]

export const istilahBySlug = (slug) => KAMUS.find((k) => k.slug === slug)
