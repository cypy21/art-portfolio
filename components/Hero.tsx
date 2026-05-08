'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
      <div className="text-center space-y-6 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Artistic <span className="text-accent">Vision</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
        >
          Exploring creativity through contemporary art and visual storytelling
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#gallery"
          className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
        >
          Explore Gallery
        </motion.a>
      </div>
    </section>
  )
}