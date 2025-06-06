import { Link } from 'react-router'
import { sectionIds } from './sectionIds'
import { useEffect, useState } from 'react'
import { getOnlineServices } from '@/actions/layoutActions'
import { Skeleton } from '../ui/skeleton'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, transition } from '@/lib/animations'
import { shortenText } from '@/utils'

type OnlineService = {
  _id: string
  title: string
  description: string
  link: string
}

const ServiceCardSkeleton = () => {
  return (
    <div className="w-full md:w-[48%] min-h-[200px] lg:w-[30%] py-5 px-10 rounded-lg bg-white text-black text-center flex flex-col gap-2 justify-center items-center shadow-md">
      <Skeleton className="h-8 w-3/4" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}

const OnlineServicesSkeleton = () => {
  return (
    <section id={sectionIds.onlineServices} className='w-full h-auto min-h-[300px] my-10 flex gap-10 flex-col items-center py-20 px-5 md:px-10 dark bg-popover text-popover-foreground'>
      <div className="w-full md:w-1/2 text-center">
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-center">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <ServiceCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const OnlineServices = () => {
  const [services, setServices] = useState<OnlineService[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getOnlineServices()
      .then(setServices)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <OnlineServicesSkeleton />

  return (
    <section id={sectionIds.onlineServices} className='w-full h-auto min-h-[300px] my-10 flex gap-10 flex-col items-center py-20 px-5 md:px-10 dark bg-popover text-popover-foreground'>
      <motion.div 
        className="w-full md:w-1/2 text-center"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        transition={transition}
      >
        <h1 className='text-4xl font-bold mb-1'>Some Of Our Online Services</h1>
        <p className='text-lg'>Here Are Some of our amazing online services you can try today!</p>
      </motion.div>
      <motion.div 
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            variants={fadeInUp}
            transition={{ ...transition, delay: index * 0.1 }}
            // whileHover={{ scale: 1.02, y: -5 }}
            className="w-full  min-h-[200px] rounded-lg bg-white text-black shadow-md hover:bg-white/80 transition-colors"
          >
            <Link 
              to={service.link} 
              className="w-full h-full py-5 px-10 text-center flex flex-col gap-2 justify-center items-center"
            >
              <h3 className='font-semibold text-xl'>{service.title}</h3>
              <p className='text-sm'>{shortenText(service.description, 300)}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default OnlineServices