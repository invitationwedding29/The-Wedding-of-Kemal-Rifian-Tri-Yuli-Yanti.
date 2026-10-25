# Modern Minimalist Wedding Invitation

Website undangan pernikahan digital modern, romantis, responsif, dan ringan yang dibangun menggunakan **React.js + Vite** dengan pendekatan **Vanilla CSS** dan komposisi warna estetika **70:20:10**.

---

## 🎨 Aturan Palet Warna 70:20:10
- **70% Ivory (`#F7F3EC`)**: Latar belakang utama halaman, ruang lapang (*whitespace*), dan section.
- **20% Sage Green (`#87947A`)**: Elemen kartu pendukung, ornamen aksen, ikon sekunder, dan badge.
- **10% Deep Brown (`#59483D`)**: Tombol utama (*Call to Action*), judul mempelai, garis pemisah, dan elemen interaktif.

---

## ✨ Fitur Unggulan
1. **Cover / Halaman Pembuka Interaktif**:
   - Personalisasi nama tamu otomatis melalui query URL: `https://website-undangan.com/?to=Bapak%20Andi`.
   - Transisi pembukaan halus dan mengaktifkan musik latar tanpa autoplay paksa.
2. **Hero & Hitung Mundur Real-Time**:
   - Menghitung hari, jam, menit, detik menuju hari pernikahan.
   - Penanganan otomatis ketika hari H telah terlewati.
3. **Profil Mempelai & Rangkaian Acara**:
   - Informasi mempelai pria dan wanita beserta nama kedua orang tua.
   - Kartu terpisah untuk Akad Nikah & Resepsi.
   - Tombol **"Tambah ke Google Calendar"** fungsional untuk memudahkan tamu menyimpan jadwal.
4. **Peta & Petunjuk Arah**:
   - Google Maps iframe embed dan tombol langsung rute arah.
5. **Love Story & Galeri Foto**:
   - Timeline perjalanan cinta.
   - Grid galeri foto dengan Lightbox interaktif (mendukung navigasi panah keyboard dan tombol ESC).
6. **RSVP & Buku Tamu (Ucapan)**:
   - Formulir RSVP dengan validasi nama, konfirmasi status (Hadir/Tidak Hadir/Ragu), serta batasan jumlah tamu.
   - Daftar ucapan dengan badge status kehadiran.
   - Tersimpan secara persisten di LocalStorage (mode demo), dengan arsitektur async siap integrasi ke Supabase/Firebase.
7. **Amplop Digital (Tanda Kasih)**:
   - Informasi nomor rekening dengan tombol satu kali klik salin (*copy to clipboard*) dan notifikasi toast.
8. **Navigasi Bawah Sticky & Pemutar Musik Mengambang**:
   - Navigasi mobile-friendly dengan tombol sentuh yang nyaman.
   - Kontrol putar/jeda audio dengan animasi rotasi ikon.

---

## ⚙️ Kustomisasi Data Cepat (Single Source of Truth)
Seluruh informasi mempelai, tanggal acara, lokasi, foto, cerita, hingga nomor rekening dipusatkan dalam satu file:
👉 **`src/config/weddingConfig.js`**

Anda cukup mengedit file tersebut untuk mengubah seluruh data undangan tanpa perlu menyentuh komponen JSX.

---

## 🚀 Panduan Instalasi & Menjalankan

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan di Mode Pengembangan (Localhost)
```bash
npm run dev
```
Buka browser di alamat `http://localhost:3000` atau URL yang ditampilkan di terminal.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap diunggah ke Vercel, Netlify, atau GitHub Pages dari folder `dist/`.

---

## 🔌 Rencana Integrasi Backend (Opsional)
Untuk menghubungkan RSVP dan ucapan ke server online:
1. Hubungkan `src/services/dataService.js` ke penyedia backend seperti **Supabase** atau **Firebase Firestore**.
2. Masukkan URL dan kredensial publik pada file `.env` (contoh di `.env.example`).
