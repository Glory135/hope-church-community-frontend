import PageWrapper from '@/components/PageWrapper'
import AboutHero from '@/components/sections/AboutHero'
import AGC from '@/components/sections/AGC'
import LocationSocials from '@/components/sections/LocationSocials'
import Story from '@/components/sections/Story'
import Team from '@/components/sections/Team'
import Values from '@/components/sections/Values'
import AnimatedPageSection from '@/components/ui/AnimatedPageSection'
import { scaleIn, slideIn } from '@/lib/animations'

const AboutPage = () => {
  return (
    <PageWrapper>
      {/* <AnimatedPageSection variant={fadeIn}> */}
        <AboutHero />
      {/* </AnimatedPageSection> */}
      
      <AnimatedPageSection variant={slideIn}>
        <Story />
      </AnimatedPageSection>
      
      <AnimatedPageSection >
        <Values />
      </AnimatedPageSection>
      
      <AnimatedPageSection variant={scaleIn}>
        <AGC />
      </AnimatedPageSection>
      
      <AnimatedPageSection >
        <Team />
      </AnimatedPageSection>
      
      <AnimatedPageSection >
        <LocationSocials />
      </AnimatedPageSection>
    </PageWrapper>
  )
}

export default AboutPage