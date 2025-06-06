import PageWrapper from '@/components/PageWrapper'
import ActivitiesHero from '@/components/sections/ActivitiesHero'
import Events from '@/components/sections/Events'
import GetInvolved from '@/components/sections/GetInvolved'
import LocationSocials from '@/components/sections/LocationSocials'
import OnlineServices from '@/components/sections/OnlineServices'
import RecordedSermons from '@/components/sections/RecordedSermons'
import AnimatedPageSection from '@/components/ui/AnimatedPageSection'

const ActivitiesPAge = () => {
  return (
    <PageWrapper>
      {/* <AnimatedPageSection variant={fadeIn}> */}
        <ActivitiesHero />
      {/* </AnimatedPageSection> */}
      <AnimatedPageSection >
        <Events />
      </AnimatedPageSection>
      <OnlineServices />
      <AnimatedPageSection >
        <RecordedSermons />
      </AnimatedPageSection>
      <AnimatedPageSection >
        <GetInvolved />
      </AnimatedPageSection>
      <AnimatedPageSection >
        <LocationSocials />
      </AnimatedPageSection>
    </PageWrapper>
  )
}

export default ActivitiesPAge