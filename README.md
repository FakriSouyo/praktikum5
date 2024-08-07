# Pokedex React App

Aplikasi Pokedex sederhana yang dibangun menggunakan React dan PokeAPI.

## Memulai

Untuk memulai dengan proyek ini, ikuti langkah-langkah berikut:

1. Clone repositori ini:
   ```
   git clone https://github.com/FakriSouyo/praktikum5.git
   ```

2. Pindah ke direktori proyek:
   ```
   cd praktikum5
   ```

3. Instal dependensi:
   ```
   npm install
   ```

## Skrip yang Tersedia

Dalam direktori proyek, Anda dapat menjalankan:

### `npm start`

Menjalankan aplikasi dalam mode pengembangan.
Buka [http://localhost:3000](http://localhost:3000) untuk melihatnya di browser Anda.
Halaman akan dimuat ulang ketika Anda membuat perubahan.
Anda mungkin juga akan melihat kesalahan lint di konsol.

### `npm test`

Meluncurkan test runner dalam mode watch interaktif.
Lihat bagian tentang menjalankan tes untuk informasi lebih lanjut.

### `npm run build`

Membangun aplikasi untuk produksi ke folder `build`.
Ini menggabungkan React dalam mode produksi dan mengoptimalkan build untuk performa terbaik.
Build diminifikasi dan nama file mencakup hash.
Aplikasi Anda siap untuk dideploy!

## Fitur

- Menampilkan daftar Pokemon dengan gambar dan informasi dasar
- Pencarian Pokemon berdasarkan nama
- Paginasi untuk navigasi melalui daftar Pokemon
- Menampilkan statistik Pokemon (HP, ATK, DEF) dengan bar visual

## Belajar Lebih Lanjut

Anda dapat mempelajari lebih lanjut di [dokumentasi Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Untuk mempelajari React, lihat [dokumentasi React](https://reactjs.org/).

## Penjelasan Konten

Aplikasi ini adalah Pokedex sederhana yang menggunakan React dan PokeAPI. Berikut adalah penjelasan singkat tentang komponen utama dan fungsionalitasnya:

- State Management: Aplikasi menggunakan hooks useState untuk mengelola berbagai state seperti daftar Pokemon, status loading, error, pencarian, halaman saat ini, dan total halaman.
- Fetching Data: Aplikasi menggunakan PokeAPI untuk mengambil data Pokemon. Fungsi fetchPokemon digunakan untuk mengambil data berdasarkan halaman saat ini.
- Pagination: Implementasi paginasi sederhana dengan tombol "Sebelumnya" dan "Selanjutnya" untuk navigasi melalui daftar Pokemon.
- Search Functionality: Pengguna dapat mencari Pokemon berdasarkan nama menggunakan input pencarian.
- Pokemon Display: Setiap Pokemon ditampilkan dengan gambar, nama, tipe, dan statistik dasar (HP, ATK, DEF) yang divisualisasikan menggunakan bar.
- Error Handling: Aplikasi menangani dan menampilkan pesan error jika terjadi masalah saat mengambil data.
- Loading State: Menampilkan indikator loading saat data sedang diambil.
