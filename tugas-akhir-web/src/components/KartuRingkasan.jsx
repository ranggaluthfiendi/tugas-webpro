import { Card, CardContent, CardDescription } from './ui/card.jsx'

// Widget yang sama bisa dipakai ulang dengan judul dan nilai berbeda.
export default function KartuRingkasan({ judul, nilai }) {
  return (
    <Card className="shadow-none">
      <CardContent>
        <CardDescription>{judul}</CardDescription>
        <p className="mt-2 text-3xl font-semibold">{nilai}</p>
      </CardContent>
    </Card>
  )
}
