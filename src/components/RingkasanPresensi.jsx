import KartuRingkasan from './KartuRingkasan.jsx'

export default function RingkasanPresensi({ presensi }) {
  const ringkasan = [
    { label: 'Total catatan', jumlah: presensi.length },
    { label: 'Hadir', jumlah: presensi.filter((item) => item.status === 'Hadir').length },
    { label: 'Izin / Sakit', jumlah: presensi.filter((item) => item.status === 'Izin' || item.status === 'Sakit').length },
    { label: 'Alpa', jumlah: presensi.filter((item) => item.status === 'Alpa').length },
  ]

  return (
    <section aria-label="Ringkasan presensi" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ringkasan.map((item) => (
        <KartuRingkasan key={item.label} judul={item.label} nilai={item.jumlah} />
      ))}
    </section>
  )
}



