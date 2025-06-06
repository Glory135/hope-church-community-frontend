import TitleComponent from '../TitleComponent'
import { CiLocationOn } from "react-icons/ci";
import { sectionIds } from './sectionIds';
import { useEffect, useState } from 'react';
import { getEvents, type Event } from '@/actions/layoutActions';
import { urlFor } from '@/sanity/sanity-client';
import { Skeleton } from '../ui/skeleton';

const EventCardSkeleton = () => {
  return (
    <div className="w-[350px] min-h-[450px] md:w-[45%] lg:w-[23%] flex flex-col gap-3 rounded-md shadow-lg overflow-hidden">
      <Skeleton className="w-full h-[200px]" />
      <div className="w-full p-3 flex flex-col gap-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
        </div>
        <div className="flex gap-2 items-center">
          <CiLocationOn size={25} color="oklch(67% 0.18 60)" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  )
}

const EventsSkeleton = () => {
  return (
    <section id={sectionIds.events} className='w-full h-auto my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Upcoming Events' />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5">
        {[1, 2, 3, 4].map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    getEvents().then(setEvents)
  }, [])

  if (!events.length) return <EventsSkeleton />

  return (
    <section id={sectionIds.events} className='w-full h-auto  my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Upcoming Events' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {
          events.map((singleEvent, index) => (
            <div key={index} className="w-[350px] min-h-[450px] md:w-[45%] lg:w-[23%] flex flex-col gap-3 rounded-md shadow-lg overflow-hidden">
              <img
              src={urlFor(singleEvent?.image).width(600).height(400).url()}
              alt={singleEvent.title} className='w-full h-100px object-center object-cover' />
              <div className="w-full p-3 flex flex-col gap-3">
                <h2 className="text-lg font-medium">{singleEvent.title}</h2>
                <span className='flex justify-center items-center w-fit py-1 px-3 rounded-full bg-muted/60 text-muted-foreground text-sm'>{singleEvent.date}</span>
                <p className='text-muted'>{singleEvent.description}</p>
                <div className="flex gap-2">
                  <CiLocationOn size={25} color="oklch(67% 0.18 60)" />
                  <p className='text-muted'>{singleEvent.location}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Events