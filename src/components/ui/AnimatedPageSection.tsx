import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp, transition } from '@/lib/animations'

interface AnimatedPageSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  variant?:Record<string, any>
}

const AnimatedPageSection = ({ children, className = '', delay = 0, id, variant }: AnimatedPageSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variant ? variant : fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...transition, delay, duration: "0.5" }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedPageSection 