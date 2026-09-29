import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave untuk melihat pesanan dan pengingat isi ulang.',
  alternates: { canonical: 'https://crave-lumen.vercel.app/masuk' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="masuk" />
}
