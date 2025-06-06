import acgimg from "../../assets/images/acg.png"
import { Button } from "../ui/button"
import { FaLongArrowAltRight } from "react-icons/fa";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router";

const AGC = () => {
  return (
    <section id={sectionIds.acg} className='w-full h-auto gap-5 my-20 flex flex-col md:flex-row p-5'>
      <div className="flex-1 flex justify-center items-center">
        <img src={acgimg} alt="Acts Global" className="object-center" />
      </div>
      <div className="flex-1 flex justify-center md:justify-start items-center">
        <div className="flex items-center md:items-start text-center md:text-start flex-col gap-3 max-w-[550px]">
          <h2 className="font-bold text-2xl">ACTS Global Churches</h2>
          <p className="text-muted">Acts Global Churches is a second generation name for the Apostolic Church Australia. The National Leadership Team responded to a very strong conviction with regard to a fresh vision that perpetuates the original Apostolic Vision to “Belt the Globe.”</p>
          <p className="text-muted">Acts Global Churches will continue the current structure, responsibility and practice in Australia while at the same time developing and responding to international requests for covering, mentoring and fathering.</p>
          <p className="text-muted">This initiative will focus on churches and movements in developed nations along with our current focus in growing greater connection in developing countries.</p>
          <Link to={"https://www.actsglobal.church/"} target="__blank"> <Button size={"lg"} className="w-fit !px-20 py-7 mt-5">Learn More <FaLongArrowAltRight size={25} /> </Button></Link>
        </div>
      </div>
    </section>
  )
}

export default AGC