import acgimg from "../../assets/images/acg.png"
import { Button } from "../ui/button"
import { FaLongArrowAltRight } from "react-icons/fa";
import { sectionIds } from "./sectionIds";

const AGC = () => {
  return (
    <section id={sectionIds.acg} className='w-full h-auto gap-5 my-20 flex flex-col md:flex-row p-5'>
      <div className="flex-1 flex justify-center items-center">
        <img src={acgimg} alt="Acts Global" className="object-center" />
      </div>
      <div className="flex-1 flex justify-center md:justify-start items-center">
        <div className="flex items-center md:items-start text-center md:text-start flex-col gap-3 max-w-[550px]">
          <h2 className="font-bold text-2xl">ACTS Global Churches</h2>
          <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dignissimos ea magni officia, temporibus, error fugit odio mollitia accusamus minima numquam maxime non inventore enim libero, illo nisi dolore consequuntur in nesciunt iure rerum veritatis! Velit neque voluptatum, at cumque facere labore fugiat praesentium dolore voluptate, iure iusto voluptates necessitatibus!</p>
          <Button size={"lg"} className="w-fit !px-20 py-7 mt-5">Learn More <FaLongArrowAltRight size={25}/> </Button>
        </div>
      </div>
    </section>
  )
}

export default AGC