import PageWrapper from '@/components/PageWrapper'
import AGC from '@/components/sections/AGC'
import Events from '@/components/sections/Events'
import GetInvolved from '@/components/sections/GetInvolved'
import Hero from '@/components/sections/Hero'
import Jesus from '@/components/sections/Jesus'
import LocationSocials from '@/components/sections/LocationSocials'
import Story from '@/components/sections/Story'
import Team from '@/components/sections/Team'
import Values from '@/components/sections/Values'
import Testimonies from '@/components/sections/Testimonies'
import AnimatedPageSection from '@/components/ui/AnimatedPageSection'
import { scaleIn, slideIn } from '@/lib/animations'

function HomePage() {
  return (
    <PageWrapper>
      {/* <AnimatedPageSection variant={fadeIn}> */}
        <Hero />
      {/* </AnimatedPageSection> */}

      <AnimatedPageSection variant={slideIn}>
        <Jesus />
      </AnimatedPageSection>

      <AnimatedPageSection >
        <Values />
      </AnimatedPageSection>

      <AnimatedPageSection  variant={scaleIn}>
        <AGC />
      </AnimatedPageSection>

      <AnimatedPageSection variant={slideIn}>
        <Story />
      </AnimatedPageSection>

      <AnimatedPageSection >
        <Testimonies />
      </AnimatedPageSection>

      <AnimatedPageSection >
        <Team />
      </AnimatedPageSection>

      <AnimatedPageSection >
        <Events />
      </AnimatedPageSection>

      <AnimatedPageSection >
        <GetInvolved />
      </AnimatedPageSection>

      <AnimatedPageSection    >
        <LocationSocials />
      </AnimatedPageSection>
    </PageWrapper>
  )
}

export default HomePage