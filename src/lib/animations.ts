export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 }
}

export const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 60, opacity: 0 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const transition = {
  duration: 0.8,
  ease: [0.21, 0.47, 0.32, 0.98]
} 