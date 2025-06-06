import { Button } from "../ui/button"
import { sectionIds } from "./sectionIds"
import HeroWrapper from "./HeroWrapper";
import { Link } from "react-router";

function AboutHero() {
  return (
    <HeroWrapper page="about" id={sectionIds.aboutHero}>
      <div className="flex gap-5 flex-wrap">
        <Link to={`/contact#${sectionIds.getInTouch}`}>
          <Button size={"lg"} variant={"secondary"}>
            Get In Touch
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

export default AboutHero