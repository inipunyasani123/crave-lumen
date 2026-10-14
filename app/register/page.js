import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Daftar — Positive Crave',
  description: 'Buat akun Positive Crave hanya dengan surel. Kami tidak menanyakan usia, jenis kelamin, atau kondisi kesehatan.',
  alternates: { canonical: 'https://crave-lumen.pintuweb.id/register' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="daftar" />
}
