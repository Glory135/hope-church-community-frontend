import TitleComponent from '../TitleComponent'
import { sectionIds } from './sectionIds'
import { useEffect, useState } from 'react'
import { getPrograms, type Programs } from '@/actions/layoutActions'
import { urlFor } from '@/sanity/sanity-client'
import { shortenText } from '@/utils'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { Skeleton } from '../ui/skeleton'

const ProgramCardSkeleton = () => {
  return (
    <div className="min-w-[350px] max-w-[450px] min-h-[450px] flex flex-col gap-3 rounded-md shadow-lg overflow-hidden bg-black text-white">
      <Skeleton className="w-full h-[300px]" />
      <div className="w-full p-5 flex flex-col gap-3">
        <Skeleton className="h-8 w-1/3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}

const GetInvolvedSkeleton = () => {
  return (
    <section id={sectionIds.getInvolved} className='w-full h-auto my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Get Involved' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {[1, 2, 3].map((_, index) => (
          <ProgramCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const GetInvolved = () => {
  const [programs, setPrograms] = useState<Programs | null>(null)
  const [programsList, setProgramsList] = useState<Record<string, any>[]>([])

  useEffect(() => {
    getPrograms().then(setPrograms)
  }, [])

  useEffect(() => {
    setProgramsList([
      {
        title: "Hubs",
        description: programs?.hubs?.description,
        image: programs?.hubs?.image,
        link: `/programs#${sectionIds.getInvolved}`
      },
      {
        title: "Youth",
        description: programs?.youth?.description,
        image: programs?.youth?.image,
        link: `/programs#${sectionIds.getInvolved}`
      },
      {
        title: "children",
        description: programs?.children?.description,
        image: programs?.children?.image,
        link: `/programs#${sectionIds.getInvolved}`
      },
    ])
  }, [programs])

  if (!programs) return <GetInvolvedSkeleton />

  return (
    <section id={sectionIds.getInvolved} className='w-full h-auto  my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Get Involved' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {
          programsList.map((singleprogram, index) => (
            <div key={index} className="min-w-[350px] max-w-[450px] min-h-[450px] flex flex-col gap-3 rounded-md shadow-lg overflow-hidden bg-black text-white">
              {
                singleprogram?.image && (<img src={urlFor(singleprogram?.image).width(600).height(400).url()} alt={singleprogram.title} className='w-full h-[300px] object-center object-cover' />)
              }

              <div className="w-full p-5 flex flex-col gap-3">
                <h2 className="text-xl font-medium uppercase">{singleprogram.title}</h2>
                <p className=''>{shortenText(singleprogram?.description ? singleprogram?.description[0]?.children[0]?.text : "", 150)}</p>
                <Link to={singleprogram?.link}>
                  <Button variant={"link"}> Learn More </Button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default GetInvolved