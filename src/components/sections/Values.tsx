import { useEffect, useState } from "react"
import { sectionIds } from "./sectionIds"
import { fetchCoreValuesAndVision } from "@/actions/layoutActions"
import { PortableText } from "@portabletext/react"
import { urlFor, type ImageType } from "@/sanity/sanity-client"
import { Skeleton } from "../ui/skeleton"

type Data = {
  coreValuesContent: any
  visionContent: any
  coreValuesImage: ImageType
  visionImage: ImageType
}

const ValuesSkeleton = () => {
  return (
    <section id={sectionIds.values} className='w-full h-auto my-20 flex flex-col'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[350px] bg-accent text-accent-foreground flex flex-col gap-5 justify-center items-center p-5 py-20">
          <Skeleton className="h-8 w-32" />
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
          <Skeleton className="h-8 w-32" />
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

const Values = () => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetchCoreValuesAndVision().then(setData)
  }, [])

  if (!data) return <ValuesSkeleton />

  return (
    <section id={sectionIds.values} className='w-full h-auto  my-20 flex flex-col'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[350px] bg-accent text-accent-foreground flex flex-col gap-5 justify-center items-center p-5 py-20 ">
          <h1 className='font-bold text-2xl w-full'>Core Values</h1>
          <PortableText value={data.coreValuesContent} />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(data.coreValuesImage).url()})`
          }}
          className="value-img flex-1 hidden md:flex" />
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex-1 min-h-[350px] bg-background  flex flex-col gap-5 justify-center items-center p-5 py-20 ">
          <h1 className='font-bold text-2xl w-full'>Vision Statement</h1>
          <PortableText value={data.visionContent} />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(data.visionImage).url()})`
          }}
          className="vision-img flex-1 hidden md:flex" />
      </div>
      <div className="flex-1 min-h-[350px] bg-secondary text-secondary-foreground flex flex-col gap-2 justify-center items-center p-5 py-20 ">
        <h1 className='font-bold text-2xl w-full'>Our Beliefs</h1>
        <p className="w-full flex flex-col">
          We believe that the Bible is God's Word. It is accurate, authoritative and applicable to our everyday lives.
          <span className="font-bold text-primary"> Matthew 24:35, 2 Timothy 3:16-17, 2 Peter 1:20-2</span>
        </p>

        <p className="w-full flex flex-col">
          We believe in one eternal God who is the Creator of all things. He exists in three persons: God the Father, God the Son and God the Holy Spirit. He is totally loving and completely holy.
          <span className="font-bold text-primary">Genesis 1:1, Psalm 99:9, Isaiah 43:10-11, Matthew 28:19, John 1:1-3, 1 John 4:8</span>
        </p>

        <p className="w-full flex flex-col">
          We believe that sin has separated each of us from God and His purpose for our lives.
          <span className="font-bold text-primary">Genesis 3:1-19, Romans 3:23, Luke 13:5</span>
        </p>

        <p className="w-full flex flex-col">
          We believe that the Lord Jesus Christ, as both God and man, is the only One who can reconcile us to God. He lived a sinless and exemplary life, died on the cross in our place, and rose again to prove His victory and empower us for life.
          <span className="font-bold text-primary"> Isaiah 7:14, Acts 2:22-24, Acts 10:38-40, 2 Corinthians 5:21, 1 Peter 2:22</span>
        </p>
        <p className="w-full flex flex-col">
          We believe that in order to receive forgiveness and the 'new birth' we must repent of our sins, believe in the Lord Jesus Christ, and submit to His will for our lives.
          <span className="font-bold text-primary">John 3:3-7, Acts 16:30-31, Romans 3:22-24 </span>
        </p>

        <p className="w-full flex flex-col">
          We believe that in order to live the holy and fruitful lives that God intends for us, we need to be baptised in water and be filled with the power of the Holy Spirit. The Holy Spirit enables us to use spiritual gifts, and is accompanied by the initial evidence of speaking in tongues.
          <span className="font-bold text-primary">Matthew 28:18-20, Acts 2:36-38, Acts 10:46-47, 1 Corinthians 12:4, Ephesians 4:11-13</span>
        </p>
      </div>
    </section>
  )
}

export default Values