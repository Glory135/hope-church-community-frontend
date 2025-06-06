import PageWrapper from '@/components/PageWrapper'
import LocationSocials from '@/components/sections/LocationSocials'
import ProgramsHero from '@/components/sections/Programsero'
import ProgramsSection from '@/components/sections/ProgramsSection'
import AnimatedPageSection from '@/components/ui/AnimatedPageSection'

const ProgramsPage = () => {
  return (
    <PageWrapper>
      {/* <AnimatedPageSection> */}
      <ProgramsHero />
      {/* </AnimatedPageSection> */}

      <AnimatedPageSection>
        <ProgramsSection />
      </AnimatedPageSection>

      <AnimatedPageSection>
        <LocationSocials />
      </AnimatedPageSection>
    </PageWrapper>
  )
}

export default ProgramsPage