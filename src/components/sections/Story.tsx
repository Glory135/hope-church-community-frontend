import { urlFor, type ImageType } from "@/sanity/sanity-client"
import TitleComponent from "../TitleComponent"
import { sectionIds } from "./sectionIds"
import { useEffect, useState } from "react"
import { fetchStorySection } from "@/actions/layoutActions"
import { PortableText } from "@portabletext/react"
import { Skeleton } from "../ui/skeleton"

type StoryData = {
  title: string
  content: any
  image: ImageType
}

const StorySkeleton = () => {
  return (
    <section id={sectionIds.story} className='w-full h-auto gap-10 my-20 flex flex-col lg:flex-row-reverse items-end md:items-center'>
      <div className="relative w-[95%] lg:w-[400px] h-[60vh] lg:h-[90vh] overflow-visible">
        <Skeleton className="w-full h-full rounded-l-full" />
        <div className="w-[105%] md:w-[110%] h-full absolute top-[5%] md:top-[10%] rounded-l-full right-0 -z-10 bg-muted" />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <Skeleton className="h-8 w-48" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </div>
    </section>
  )
}

const Story = () => {
  const [data, setData] = useState<StoryData | null>(null)

  useEffect(() => {
    fetchStorySection().then(setData)
  }, [])

  if (!data) return <StorySkeleton />

  return (
    <section id={sectionIds.story} className='w-full h-auto gap-10 my-20 flex flex-col lg:flex-row-reverse  items-end md:items-center '>
      <div className="relative w-[95%] lg:w-[400px] h-[60vh] lg:h-[90vh] overflow-visible">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(data.image).url()})`
          }}
          className="story-img relative w-full h-full rounded-l-full bg-accent flex justify-center items-center overflow-hidden">
          <h1 className="font-bold text-9xl text-white text-center capitalize">OUR STORY</h1>
        </div>
        <div className="w-[105%] md:w-[110%] h-full absolute top-[5%] md:top-[10%] rounded-l-full right-0  -z-10 bg-muted" />
      </div>
      {/* <div className="story-img min-h-[50ch] md:min-h-[80vh] min-w-[350px] flex justify-center items-center overflow-hidden p-0 md:p-5 rounded-tr-[100px] rounded-bl-[100px]">
        <h1 className='text-6xl md:text-8xl font-bold md:-rotate-90 text-white uppercase text-nowrap '>Our Story</h1>
      </div> */}
      <div className="flex-1 flex flex-col gap-5 p-5 ">
        <TitleComponent title={data.title} />
        <PortableText value={data.content} />
      </div>
    </section>
  )
}

export default Story