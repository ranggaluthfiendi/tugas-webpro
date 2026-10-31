import { useState } from 'react'
import Header from './components/Header'
import RingkasanPresensi from './components/RingkasanPresensi'
import FormPresensi from './components/FormPresensi'
import DaftarPresensi from './components/DaftarPresensi'

function App() {
  const [presensi, setPresensi] = useState([])
  const [pesan, setPesan] = useState('')

  function tambahPresensi(data) {
    const sudahAda = presensi.some(
      (item) => item.nim === data.nim && item.tanggal === data.tanggal,
    )

    if (sudahAda) {
      setPesan('NIM ini sudah memiliki presensi pada tanggal tersebut.')
      return false
    }

    setPresensi([...presensi, { ...data, id: crypto.randomUUID() }])
    setPesan('Presensi berhasil ditambahkan.')
    return true
  }

  function hapusPresensi(id) {
    setPresensi(presensi.filter((item) => item.id !== id))
    setPesan('Catatan presensi berhasil dihapus.')
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
      <Header />
      <RingkasanPresensi presensi={presensi} />
      <div className="grid items-start gap-6 md:grid-cols-[320px_1fr]">
        <FormPresensi onTambah={tambahPresensi} pesan={pesan} />
        <DaftarPresensi presensi={presensi} onHapus={hapusPresensi} />
      </div>
      <p className="text-center text-xs text-zinc-500">
        Data tersimpan sementara selama halaman terbuka. Memuat ulang halaman akan mengosongkan data.
      </p>
    </main>
  )
}

export default App

