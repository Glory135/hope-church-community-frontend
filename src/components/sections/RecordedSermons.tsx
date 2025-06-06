import { useEffect, useState } from 'react'
import TitleComponent from '../TitleComponent'
import { sectionIds } from './sectionIds'
import { Skeleton } from '../ui/skeleton'
import { getSermons } from '@/actions/layoutActions'

type Sermon = {
  _id: string
  title: string
  description: string
  youtubeUrl: string
  date: string
  preacher: string
}

const SermonCardSkeleton = () => {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] aspect-video rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

const RecordedSermonsSkeleton = () => {
  return (
    <section id={sectionIds.recordedSermons} className='w-full h-auto my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Recorded Sermons' />
      </div>
      <div className="flex flex-wrap w-full justify-center gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <SermonCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const RecordedSermons = () => {
  const [sermons, setSermons] = useState<Sermon[]>([])

  useEffect(() => {
    getSermons().then(setSermons)
  }, [])

  if (!sermons.length) return <RecordedSermonsSkeleton />

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <section id={sectionIds.recordedSermons} className='w-full h-auto my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Recorded Sermons' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {sermons.map((sermon) => (
          <div key={sermon._id} className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-3 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(sermon.youtubeUrl)}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-medium">{sermon.title}</h3>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{sermon.preacher}</span>
                <span>{new Date(sermon.date).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{sermon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecordedSermons 