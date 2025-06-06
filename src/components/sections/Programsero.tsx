import { Link } from "react-router"
import { Button } from "../ui/button"
import HeroWrapper from "./HeroWrapper"
import { sectionIds } from "./sectionIds"

function ProgramsHero() {
  return (
    <HeroWrapper page="programs" id={sectionIds.programsHero}>
      <div className="flex gap-5 flex-wrap">
      <Link to={`/contact#${sectionIds.getInTouch}`}>
        <Button size={"lg"} variant={"secondary"}>
          Get In Touch
        </Button>
        </Link>
      </div>
    </HeroWrapper>
  )
}

export default ProgramsHero