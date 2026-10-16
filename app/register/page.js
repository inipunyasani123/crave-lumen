import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Daftar',
  description:
    'Buat akun Positive Crave hanya dengan surel. Kami tidak menanyakan usia, jenis kelamin, atau kondisi kesehatan.',
  path: '/register',
  index: false,
})

export default function Page() {
  return <AkunForm mode="daftar" />
}
