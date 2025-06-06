import { Link } from "react-router"
import { Button } from "../ui/button"
import HeroWrapper from "./HeroWrapper"
import { sectionIds } from "./sectionIds"

function ActivitiesHero() {

  return (
    <HeroWrapper page="activities" id={sectionIds.activitiesHero}>
      <div className="flex gap-5 flex-wrap">
        <Link to={`/programs#${sectionIds.programsSection}`}>
          <Button size={"lg"} variant={"secondary"}>
            Get Involved
          </Button>
        </Link>
        <Link to={`/activities#${sectionIds.recordedSermons}`}>
          <Button size={"lg"} variant={"default"}>
            Watch Online
          </Button>
        </Link>
      </div>
    </HeroWrapper>
  )
}

export default ActivitiesHero