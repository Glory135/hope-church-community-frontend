import worshioimg from "../../assets/images/worship-img7.jpg";
import TitleComponent from "../TitleComponent";
import { FaRegClock, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { sectionIds } from "./sectionIds";
import { useEffect, useState } from "react";
import { getInfo, getSocials, type Info, type Socials } from "@/actions/layoutActions";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";
import { Skeleton } from "../ui/skeleton";

const SocialLinkSkeleton = () => {
  return (
    <div className="w-[45%] flex flex-wrap gap-3">
      <div className="w-[30px] h-[30px] rounded-full bg-muted" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

const LocationSocialsSkeleton = () => {
  return (
    <section id={sectionIds.getInTouch} className='w-full relative h-auto min-h-screen md:mt-20 flex gap-10 items-center !bg-[#a1a1a1s]'>
      <div className="absolute -z-10 w-[70%] md:w-[50%] h-[40%] md:h-[70%] bg-muted/50 bottom-0 left-0" />
      <div className="flex-1 hidden md:flex justify-center items-center">
        <Skeleton className="w-[500px] h-[300px] rounded-lg" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col p-5">
          <TitleComponent title="Get in touch with us & let's talk." className="" />
          <div className="flex flex-wrap gap-5 gap-y-10 justify-between py-10 md:px-10">
            <SocialLinkSkeleton />
            <SocialLinkSkeleton />
            <SocialLinkSkeleton />
            <SocialLinkSkeleton />
          </div>
        </div>
      </div>
    </section>
  )
}

const LocationSocials = () => {
  const [socialLinks, setSocialLinks] = useState<Socials | null>(null)
  const [info, setInfo] = useState<Info | null>(null)

  useEffect(() => {
    getSocials().then(setSocialLinks)
    getInfo().then(setInfo)    
  }, [])

  if (!info) return <LocationSocialsSkeleton />
  return (
    <section id={sectionIds.getInTouch} className='w-full relative h-auto min-h-screen  md:mt-20 flex gap-10 items-center !bg-[#a1a1a1s]'>
      <div className="absolute -z-10 w-[70%] md:w-[50%] h-[40%] md:h-[70%] bg-muted/50 bottom-0 left-0" />
      <div className="flex-1 hidden md:flex justify-center items-center">
        <img src={worshioimg} className="w-[500px] h-auto rounded-lg" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col p-5">
          <TitleComponent title="Get in touch with us & let's talk." className="" />
          <div className="flex flex-wrap gap-5 gap-y-10 justify-between py-10 md:px-10">
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <FaInstagram size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <Link to={socialLinks?.instagram?.link || "#"} className="text-lg">Instagram
                </Link>
                <div className="">
                  {
                    socialLinks?.instagram?.username && (<Link to={socialLinks?.instagram?.link || "#"} className="text-muted">socialLinks?.instagram?.username</Link>)
                  }
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <FaFacebookF size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <Link to={socialLinks?.facebook?.link || "#"} className="text-lg">Facebook
                </Link>
                <div className="">
                  {
                    socialLinks?.facebook?.username && (<Link to={socialLinks?.facebook?.link || "#"} className="text-muted">socialLinks?.facebook?.username</Link>)
                  }
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <FaXTwitter size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <Link to={socialLinks?.twitter?.link || "#"} className="text-lg">X(Twitter)
                </Link>
                <div className="">
                  {
                    socialLinks?.twitter?.username && (<Link to={socialLinks?.twitter?.link || "#"} className="text-muted">socialLinks?.twitter?.username</Link>)
                  }
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <FaYoutube size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <Link to={socialLinks?.youtube?.link || "#"} className="text-lg">YouTube
                </Link>
                <div className="">
                  {
                    socialLinks?.youtube?.username && (<Link to={socialLinks?.youtube?.link || "#"} className="text-muted">socialLinks?.youtube?.username</Link>)
                  }
                </div>
              </div>
            </div>
            <div className="w-[45%]  flex flex-wrap gap-3 ">
              <FaRegClock size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg">Church Hours</h3>
                <div className="">
                  {
                    info?.churchHours ? (
                      <div className="text-muted">
                      <PortableText value={info?.churchHours}/>
                      </div>
                    ) : (
                      <><p className="text-muted">-----</p>
                        <p className="text-muted">------</p>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <IoLocationOutline size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg">Our Address
                </h3>
                <div className="">
                  {
                    info?.address ? (
                      <div className="text-muted">
                      <PortableText value={info?.address}/>
                      </div>
                    ) : (
                      <>
                        <p className="text-muted">-------------</p>
                        <p className="text-muted">-------------</p>
                      </>
                    )
                  }

                </div>
              </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-3 ">
              <FaPhoneAlt size={30} color="oklch(67% 0.18 60)" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg">Get In touch
                </h3>
                <div className="">
                  <p className="text-muted">{info?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSocials