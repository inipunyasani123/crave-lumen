import HeroSection from '@/components/HeroSection'
import Glossary from '@/components/Glossary'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import BelajarTeaser from '@/components/BelajarTeaser'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

/* Beranda Lumen: istilah dijelaskan lebih dulu, barang belakangan. Kamus
   lengkap di /kamus, perbandingan di /koleksi, penjelasan di /belajar. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <Glossary />
      <CategoryGrid />
      <FeaturedProducts />
      <BelajarTeaser />
      <USPSection />
      <TestimonialsCarousel />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
