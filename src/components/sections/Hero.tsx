import { Button } from "../ui/button"
import { sectionIds } from "./sectionIds"
import HeroWrapper from "./HeroWrapper";
import { Link } from "react-router";

function Hero() {
  return (
    <HeroWrapper page="home" id={sectionIds.homeHero}>
      <div className="flex gap-5 flex-wrap">
        <Link to={`/contact#${sectionIds.getInTouch}`}>
          <Button size={"lg"} variant={"secondary"}>
            Join Us This Sunday
          </Button>
        </Link>
        <Link to={`/activities#${sectionIds.recordedSermons}`}>
          <Button size={"lg"} variant={"default"}>
            Watch Online
          </Button>
        </Link>
        <Link to={`/programs#${sectionIds.programsSection}`}>
          <Button size={"lg"} variant={"link"}>
            Get Involved
          </Button>
        </Link>
      </div>
    </HeroWrapper>)
}

export default Hero