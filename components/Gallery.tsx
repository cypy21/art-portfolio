'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const artworks = [
  {
    id: 1,
    title: 'Abstract Harmony',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1577720643272-265f434f7be5?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Digital Dreams',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Urban Landscape',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1578314675288-ffbc8fb1a3f0?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Minimalist Form',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1578926314433-c6161df60628?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Color Expression',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Modern Perspective',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1577720643272-265f434f7be5?w=800&h=600&fit=crop',
  },
]

const categories = ['All', 'Abstract', 'Digital', 'Photography', 'Sculpture']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Featured <span className="text-accent">Artwork</span>
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent text-primary'
                  : 'border border-accent/50 text-accent hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-secondary cursor-pointer"
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={800}
                height={600}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {artwork.title}
                  </h3>
                  <p className="text-accent text-sm">{artwork.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}