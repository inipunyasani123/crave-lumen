import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Lupa Kata Sandi — Positive Crave',
  description: 'Atur ulang kata sandi akun Positive Crave. Tautan berlaku 30 menit.',
  alternates: { canonical: 'https://crave-lumen.pintuweb.id/forgot' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="lupa" />
}
