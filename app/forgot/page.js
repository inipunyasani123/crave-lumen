import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Lupa Kata Sandi',
  description:
    'Atur ulang kata sandi akun Positive Crave. Tautan berlaku 30 menit.',
  path: '/forgot',
  index: false,
})

export default function Page() {
  return <AkunForm mode="lupa" />
}
