import { useEffect, useState } from "react"
import TitleComponent from "../TitleComponent"
import { sectionIds } from "./sectionIds"
import { fetchJesusSection } from "@/actions/layoutActions"
import { PortableText } from '@portabletext/react'
import { urlFor, type ImageType } from "@/sanity/sanity-client"
import { Skeleton } from "../ui/skeleton"

type PortableTextContent = {
  _type: string
  children: Array<{
    _type: string
    text: string
    marks: string[]
  }>
}

type JesusData = {
  title: string
  content: PortableTextContent[]
  imageUrl: ImageType
  followingTitle?: string
  followingContent?: PortableTextContent[]
}

const JesusSkeleton = () => {
  return (
    <section id={sectionIds.jesus} className='w-full flex gap-10 my-20 flex-col lg:flex-row items-start md:items-center'>
      <div className="relative w-[95%] lg:w-[400px] h-[60vh] lg:h-[90vh] overflow-visible">
        <Skeleton className="w-full h-full rounded-r-full" />
        <div className="w-[105%] md:w-[110%] h-full absolute top-[5%] md:top-[10%] rounded-r-full left-0 -z-10 bg-muted" />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-48" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-32" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Jesus() {
  const [data, setData] = useState<JesusData | null>(null)

  useEffect(() => {
    fetchJesusSection().then(setData)
  }, [])

  if (!data) return <JesusSkeleton />

  return (
    <section id={sectionIds.jesus} className='w-full flex gap-10 my-20 flex-col lg:flex-row items-start md:items-center'>
      <div className="relative w-[95%] lg:w-[400px] h-[60vh] lg:h-[90vh] overflow-visible">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(data?.imageUrl).url()})`
          }}
          className="jesus relative w-full h-full rounded-r-full bg-accent flex justify-center items-center overflow-hidden">
          <h1 className="font-bold  text-9xl text-white text-center">{data.title}</h1>
        </div>
        <div className="w-[105%] md:w-[110%] h-full absolute top-[5%] md:top-[10%] rounded-r-full left-0  -z-10 bg-muted" />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <TitleComponent title={data.title} />
          <PortableText value={data.content} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">✝️ {data.followingTitle}</h2>
          <PortableText value={data.followingContent} />
        </div>
      </div>
    </section>
  )
}

export default Jesus