# Presensi Mahasiswa

Aplikasi latihan React dasar untuk mencatat kehadiran mahasiswa. Menggunakan Vite, Tailwind CSS, dan komponen shadcn/ui dalam JavaScript (JSX).

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Cara menggunakan

1. Isi nama, NIM (angka), tanggal, dan status kehadiran.
2. Klik **Tambah presensi**. Catatan muncul di daftar dan ringkasan ikut berubah.
3. Cari catatan dengan nama atau NIM.
4. Klik **Hapus** untuk menghapus catatan.

NIM yang sama hanya dapat dicatat sekali pada tanggal yang sama. Tanggal berbeda diperbolehkan. Data hanya disimpan di state selama halaman terbuka, sehingga hilang ketika halaman dimuat ulang. Tahap ini belum menggunakan backend atau database.

## Struktur yang perlu dipelajari

```text
src/
  App.jsx                      # State daftar, fungsi tambah dan hapus
  components/
    Header.jsx                 # Judul aplikasi
    RingkasanPresensi.jsx       # Menghitung total setiap status
    KartuRingkasan.jsx          # Widget angka yang bisa dipakai ulang
    FormPresensi.jsx            # Controlled input dan submit
    DaftarPresensi.jsx          # Pencarian, map, dan kondisi data kosong
    KartuPresensi.jsx           # Menampilkan satu catatan dari props
    ui/                        # Komponen dasar shadcn/ui
  lib/utils.js                 # Penggabungan class komponen shadcn
  index.css                    # Tailwind dan warna aplikasi
```

Alur data: `FormPresensi` memanggil prop `onTambah`, lalu `App` memperbarui state `presensi`. State tersebut dikirim melalui props ke ringkasan dan daftar. Daftar memakai `.map()` untuk menampilkan kartu dengan `key={item.id}`. Tombol hapus mengirim ID kembali ke `App`, kemudian `.filter()` membuang catatan tersebut.

Satu catatan berisi `id`, `nama`, `nim`, `tanggal`, dan `status`. Ringkasan menghitung catatan presensi, bukan jumlah mahasiswa unik.

## Komponen dan dokumentasi

UI memakai Button, Input, Card, Badge, Label, dan NativeSelect dari shadcn/ui. NativeSelect tetap memakai value dan onChange seperti select biasa. Tidak memakai router, form library, atau state manager tambahan.

- React state: https://react.dev/learn/state-a-components-memory
- React props: https://react.dev/learn/passing-props-to-a-component
- React list: https://react.dev/learn/rendering-lists
- Tailwind + Vite: https://tailwindcss.com/docs/installation/using-vite
- shadcn + Vite: https://ui.shadcn.com/docs/installation/vite
- Button: https://ui.shadcn.com/docs/components/button
- Input: https://ui.shadcn.com/docs/components/input
- Card: https://ui.shadcn.com/docs/components/card
- Badge: https://ui.shadcn.com/docs/components/badge
