import { useState } from 'react'
import { Input } from './ui/input.jsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card.jsx'
import KartuPresensi from './KartuPresensi'

export default function DaftarPresensi({ presensi, onHapus }) {
  const [pencarian, setPencarian] = useState('')
  const hasil = presensi.filter((item) =>
    item.nama.toLowerCase().includes(pencarian.toLowerCase()) || item.nim.includes(pencarian),
  )

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Daftar presensi</CardTitle>
        <CardDescription>Catatan kehadiran yang sudah ditambahkan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input aria-label="Cari nama atau NIM" placeholder="Cari nama atau NIM..." value={pencarian} onChange={(e) => setPencarian(e.target.value)} />
        {presensi.length === 0 ? (
          <div className="rounded-lg border border-dashed border-zinc-200 px-4 py-14 text-center">
            <p className="text-sm font-medium">Belum ada data presensi mahasiswa</p>
            <p className="mt-2 text-xs text-zinc-500">Tambahkan catatan melalui form presensi.</p>
          </div>
        ) : hasil.length === 0 ? (
          <p className="py-10 text-center text-sm text-zinc-500">Nama atau NIM tidak ditemukan.</p>
        ) : (
          <div className="space-y-3">
            {hasil.map((item) => <KartuPresensi key={item.id} data={item} onHapus={onHapus} />)}
          </div>
        )}
      </CardContent>
    </Card>
  )
}


