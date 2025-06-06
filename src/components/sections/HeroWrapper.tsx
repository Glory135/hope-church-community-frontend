import { getHeroByPage } from '@/actions/layoutActions';
import { urlFor, type ImageType } from '@/sanity/sanity-client';
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

type Thero = {
  backgroundImage: ImageType,
  heading: string,
  subheading: string
}

const HeroSkeleton = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='hero-section w-full h-auto md:h-screen flex items-center justify-center p-5 bg-muted'>
      <div className="flex flex-col gap-5 lg:text-center lg:items-center text-white my-[20vh] md:m-0">
        <Skeleton className="h-16 w-3/4 lg:w-1/2" />
        <Skeleton className="h-8 w-1/2 lg:w-1/3" />
        {children}
      </div>
    </section>
  )
}

const HeroWrapper = ({ page, children, id }: { page: string, children: React.ReactNode, id: string }) => {
  const [hero, setHero] = useState<Thero | null>(null);

  useEffect(() => {
    if (!hero) {
      getHeroByPage(page).then(setHero);
    }
  }, [hero, setHero, page]);

  if (!hero) return <HeroSkeleton>{children}</HeroSkeleton>;

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, #837a5f87, rgba(0, 0, 0, 0.571)), url(${urlFor(hero.backgroundImage).url()})`
      }}
      id={id}
      className='hero-section w-full h-auto md:h-screen flex items-center justify-center p-5'>
      <div className="flex flex-col gap-5 lg:text-center lg:items-center text-white my-[20vh] md:m-0">
        <h1 className="font-bold text-5xl lg:text-7xl text-wrap">{hero?.heading}</h1>
        <p className="text-2xl">{hero?.subheading}</p>
        {children}
      </div>
    </section>
  )
}

export default HeroWrapper