import TitleComponent from '../TitleComponent'
import { sectionIds } from './sectionIds'
import hopeImg from "../../assets/images/IMG_1501.png"
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const ContactUsForm = () => {
  return (
    <section id={sectionIds.contactForm} className='w-full relative h-auto mt-20 p-5 md:p-10'>
      <div className="w-full">
        <TitleComponent title='Contact form' />
      </div>
      <div className="w-full flex gap-5 flex-wrap justify-center">
        <form action="" className='flex-1 flex flex-col justify-center items-start min-w-[350px] gap-10 text-lg'>
          <div className="grid w-full max-w-md items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-md items-center gap-3">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
          <Button size={"lg"} className='w-full max-w-md'>Send message</Button>
        </form>
        <div className="flex-1">
          <img src={hopeImg} alt="" className='w-100% min-w-[300px] object-contain' />
        </div>
      </div>
    </section>
  )
}

export default ContactUsForm