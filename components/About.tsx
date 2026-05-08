'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-gray-300"
          >
            <p>
              Welcome to my artistic portfolio. I'm a passionate artist exploring
              the boundaries of contemporary art, digital expression, and visual
              storytelling.
            </p>
            <p>
              With over a decade of experience in various mediums, I focus on
              creating thought-provoking pieces that challenge perceptions and
              inspire conversations.
            </p>
            <p>
              My work has been exhibited internationally and I continue to push
              the limits of creative expression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-accent font-semibold mb-2">Experience</h3>
              <p className="text-gray-400">10+ years in contemporary art</p>
            </div>
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-accent font-semibold mb-2">Exhibitions</h3>
              <p className="text-gray-400">30+ international exhibitions</p>
            </div>
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-accent font-semibold mb-2">Collections</h3>
              <p className="text-gray-400">Featured in private & public collections</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}