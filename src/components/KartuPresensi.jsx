import { Card, CardContent } from './ui/card.jsx'
import { Badge } from './ui/badge.jsx'
import { Button } from './ui/button.jsx'

const warnaStatus = {
  Hadir: 'bg-emerald-50 text-emerald-800',
  Izin: 'bg-blue-50 text-blue-800',
  Sakit: 'bg-amber-50 text-amber-800',
  Alpa: 'bg-red-50 text-red-800',
}

export default function KartuPresensi({ data, onHapus }) {
  const tanggal = new Date(`${data.tanggal}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <Card className="gap-0 rounded-lg py-4 shadow-none">
      <CardContent className="space-y-3 px-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="break-words font-medium">{data.nama}</h3>
          <p className="mt-1 break-all text-xs text-zinc-500">NIM {data.nim}</p>
        </div>
        <Badge variant="secondary" className={warnaStatus[data.status]}>{data.status}</Badge>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-zinc-500">{tanggal}</p>
        <Button type="button" variant="ghost" size="sm" className="text-red-700 hover:bg-red-50 hover:text-red-800" aria-label={`Hapus presensi ${data.nama} tanggal ${tanggal}`} onClick={() => onHapus(data.id)}>Hapus</Button>
      </div>
    </CardContent>
    </Card>
  )
}



