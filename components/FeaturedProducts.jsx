'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Velvet Orbit',
    price: '$149',
    subtitle: 'Multi-sensory wand for intimate journeys.',
    image: '/images/p4.jpg',
    badge: 'Bestseller',
  },
  {
    name: 'SilkGlide Serum',
    price: '$42',
    subtitle: 'Water-based luxury, feather-light glide.',
    image: '/images/p3.jpg',
    badge: 'Limited Edition',
  },
  {
    name: 'PulseSync Duo',
    price: '$199',
    subtitle: 'App-enabled toy for couples. Together, apart.',
    image: '/images/p5.jpg',
    badge: 'Smart Tech',
  },
  {
    name: 'Noir Lace Set',
    price: '$89',
    subtitle: 'Sensual lingerie in timeless noir.',
    image: '/images/p7.jpg',
    badge: 'Curated Pick',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-day py-36 px-6 md:px-20">
      <div className="max-w-screen-2xl mx-auto text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif font-semibold text-slate-ink"
        >
          Intimacy, Curated.
        </motion.h2>
        <p className="text-slate-soft text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          A thoughtfully selected collection — each piece refined to heighten connection, sensation, and shared pleasure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="group bg-day rounded-3xl border border-slate-ink/12 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 z-10 bg-slate-ink text-day text-xs uppercase font-semibold px-3 py-1 rounded-full tracking-wider">
              {product.badge}
            </span>

            {/* Image */}
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-medium text-slate-ink">{product.name}</h3>
                <p className="text-sm text-slate-soft leading-snug">{product.subtitle}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold text-slate-soft">{product.price}</span>
                <button className="text-slate-soft hover:text-slate-ink transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
