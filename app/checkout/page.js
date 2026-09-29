import { Suspense } from 'react'
import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Selesaikan pemesanan Anda. Dikirim dalam kemasan polos bersama kartu cara merawat.',
  alternates: { canonical: 'https://crave-lumen.vercel.app/checkout' },
  robots: { index: false, follow: true },
}

// useSearchParams (?produk=…) butuh batas Suspense agar halaman tetap bisa diprerender.
export default function CheckoutRoute() {
  return (
    <Suspense fallback={<section className="min-h-screen bg-day" />}>
      <CheckoutPage />
    </Suspense>
  )
}
