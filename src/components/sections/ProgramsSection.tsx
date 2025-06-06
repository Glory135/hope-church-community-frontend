import { useEffect, useState } from 'react'
import { sectionIds } from './sectionIds'
import { getPrograms, type Programs } from '@/actions/layoutActions'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/sanity-client'
import { Skeleton } from '../ui/skeleton'

const ProgramSectionSkeleton = () => {
  return (
    <section id={sectionIds.programsSection} className='w-full h-auto flex flex-col'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[350px] bg-secondary text-secondary-foreground flex flex-col gap-5 justify-center items-center p-5 py-20">
          <Skeleton className="h-10 w-32" />
          <div className="space-y-3 w-full max-w-[600px]">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
        <Skeleton className="flex-1 hidden md:block" />
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex-1 min-h-[350px] bg-background flex flex-col gap-5 justify-center items-center p-5 py-20">
          <Skeleton className="h-10 w-32" />
          <div className="space-y-3 w-full max-w-[600px]">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
        <Skeleton className="flex-1 hidden md:block" />
      </div>
    </section>
  )
}

const ProgramsSection = () => {
  const [programs, setPrograms] = useState<Programs | null>(null)

  useEffect(() => {
    getPrograms().then(setPrograms)
  }, [])

  if (!programs) return <ProgramSectionSkeleton />

  return (
    <section id={sectionIds.programsSection} className='w-full h-auto flex flex-col'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[350px] bg-secondary text-secondary-foreground flex flex-col gap-5 justify-center items-center p-5 py-20 ">
          <h1 className='font-bold text-4xl w-full'>Hubs</h1>
          <PortableText value={programs?.hubs.description} />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(programs?.hubs.image).url()})`
          }}
          className="hub-program-img flex-1 hidden md:flex" />
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div
          className="flex-1 min-h-[350px] bg-background  flex flex-col gap-5 justify-center items-center p-5 py-20 ">
          <h1 className='font-bold text-4xl w-full'>Youth Ministry</h1>
          <PortableText value={programs?.youth.description} />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(programs?.youth.image).url()})`
          }} className="youth-program-img flex-1 hidden md:flex" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[350px] bg-accent text-accent-foreground flex flex-col gap-5 justify-center items-center p-5 py-20 ">
          <h1 className='font-bold text-4xl w-full'>Children Ministry</h1>
          <PortableText value={programs?.children.description} />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(programs?.children.image).url()})`
          }}
          className="children-program-img flex-1 hidden md:flex" />
      </div>
    </section>
  )
}

export default ProgramsSection