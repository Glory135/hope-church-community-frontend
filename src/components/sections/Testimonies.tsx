import { useEffect, useState } from 'react'
import { getTestimonies } from '@/actions/layoutActions'
import { Skeleton } from '../ui/skeleton'
import { sectionIds } from './sectionIds'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, transition } from '@/lib/animations'

type Testimony = {
  _id: string
  name: string
  imageUrl: string
  testimony: string
}

const TestimonyCardSkeleton = () => {
  return (
    <div className="w-full md:w-[48%] lg:w-[30%] p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}

const TestimoniesSkeleton = () => {
  return (
    <section id={sectionIds.testimonies} className="w-full py-20 px-5 md:px-10 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <TestimonyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTestimonies()
      .then(setTestimonies)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <TestimoniesSkeleton />

  return (
    <section id={sectionIds.testimonies} className="w-full py-20 px-5 md:px-10 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={transition}
        >
          <h2 className="text-4xl font-bold mb-4">Testimonies</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community members about their experiences and journey with us
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonies.map((testimony, index) => (
            <motion.div
              key={testimony._id}
              variants={fadeInUp}
              transition={{ ...transition, delay: index * 0.1 }}
              className="w-full p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  src={testimony.imageUrl}
                  alt={testimony.name}
                  className="h-16 w-16 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <h3 className="text-xl font-semibold">{testimony.name}</h3>
              </div>
              <p className="text-muted-foreground italic">"{testimony.testimony}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonies 