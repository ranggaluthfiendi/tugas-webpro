import { useState } from 'react'
import { Button } from './ui/button.jsx'
import { Input } from './ui/input.jsx'
import { Label } from './ui/label.jsx'
import { NativeSelect, NativeSelectOption } from './ui/native-select.jsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card.jsx'

function tanggalHariIni() {
  const hariIni = new Date()
  const tahun = hariIni.getFullYear()
  const bulan = String(hariIni.getMonth() + 1).padStart(2, '0')
  const hari = String(hariIni.getDate()).padStart(2, '0')
  return `${tahun}-${bulan}-${hari}`
}

export default function FormPresensi({ onTambah, pesan }) {
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [tanggal, setTanggal] = useState(tanggalHariIni)
  const [status, setStatus] = useState('Hadir')

  function handleSubmit(event) {
    event.preventDefault()
    const berhasil = onTambah({ nama: nama.trim(), nim: nim.trim(), tanggal, status })
    if (berhasil) {
      setNama('')
      setNim('')
    }
  }

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Tambah presensi</CardTitle>
        <CardDescription>Isi data kehadiran mahasiswa.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama mahasiswa</Label>
            <Input id="nama" placeholder="Contoh: Rangga Luthfiendi" value={nama} onChange={(e) => setNama(e.target.value)} required pattern=".*\S.*" maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nim">NIM</Label>
            <Input id="nim" placeholder="Contoh: 103022400021" value={nim} onChange={(e) => setNim(e.target.value)} required inputMode="numeric" pattern="[0-9]+" maxLength={20} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tanggal">Tanggal</Label>
            <Input id="tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status kehadiran</Label>
            <NativeSelect id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <NativeSelectOption>Hadir</NativeSelectOption>
              <NativeSelectOption>Izin</NativeSelectOption>
              <NativeSelectOption>Sakit</NativeSelectOption>
              <NativeSelectOption>Alpa</NativeSelectOption>
            </NativeSelect>
          </div>
          <Button type="submit" className="w-full">Tambah presensi</Button>
          <p role="status" className="text-sm text-zinc-600">{pesan}</p>
        </form>
      </CardContent>
    </Card>
  )
}



