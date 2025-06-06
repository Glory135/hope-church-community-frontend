import Logo from "../Logo"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
import { sectionIds } from "./sectionIds";
import { useEffect, useState } from "react";
import { getInfo, getSocials, type Info, type Socials } from "@/actions/layoutActions";
import { PortableText } from "@portabletext/react";


const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<Socials | null>(null)
  const [info, setInfo] = useState<Info | null>(null)

  useEffect(() => {
    getSocials().then(setSocialLinks)
    getInfo().then(setInfo)
  }, [])

  const year = new Date().getFullYear()
  return (
    <section className='w-full relative h-auto min-h-[20vh]  flex flex-wrap gap-x-20 gap-y-10 items-start bg-black  text-white p-5 md:py-10  md:px-32 justify-between'>
      <div className="flex flex-col gap-5">
        <Logo color="white" />
        <p className="text-muted">
          &copy; Hope Church Community {year}
        </p>
      </div>
      <div className="flex flex-col gap-1 sm:px-10">
        <h2 className="text-lg font-bold">Socials</h2>
        <div className="flex gap-3">
          <Link to={socialLinks?.facebook?.link || "#"}><TiSocialFacebookCircular size={30} color="oklch(67% 0.18 60)" /></Link>
          <Link to={socialLinks?.instagram?.link || "#"}><FaInstagram size={30} color="oklch(67% 0.18 60)" /></Link>
          <Link to={socialLinks?.twitter?.link || "#"}><FaXTwitter size={30} color="oklch(67% 0.18 60)" /></Link>
          <Link to={socialLinks?.youtube?.link || "#"}><FaYoutube size={30} color="oklch(67% 0.18 60)" /></Link>
        </div>
      </div>
      <div className=" min-w-[200px] flex flex-col gap-1">
        <h2 className="text-lg font-bold">Quick Links</h2>
        <Link className="hover:text-primary" to={`/#${sectionIds.homeHero}`}>Home</Link>
        <Link className="hover:text-primary" to={`/about#${sectionIds.aboutHero}`}>About Us</Link>
        <Link className="hover:text-primary" to={`/programs#${sectionIds.programsSection}`}>Get Involved</Link>
        <Link className="hover:text-primary" to={`/contact#${sectionIds.getInTouch}`}>Get In Touch</Link>
        <Link className="hover:text-primary" to={`/about#${sectionIds.story}`}>Our Story</Link>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">Address</h2>
        <div className="text-muted">
          <PortableText value={info?.address} />
        </div>
      </div>
    </section>
  )
}

export default Footer