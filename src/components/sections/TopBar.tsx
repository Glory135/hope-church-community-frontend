import { Link, useLocation } from 'react-router'
import Logo from '../Logo'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import useScrollPosition from '@/hooks/useScrollPosition';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"
import { sectionIds } from './sectionIds';

const navItems = {
  "Home": [
    {
      link: `/#${sectionIds.homeHero}`,
      label: "Home",
    },
    {
      link: `/#${sectionIds.jesus}`,
      label: "Who Is Jesus",
    },
    {
      link: `/#${sectionIds.values}`,
      label: "Core Values",
    },
    {
      link: `/#${sectionIds.acg}`,
      label: "ACG",
    },
    {
      link: `/#${sectionIds.story}`,
      label: "Our Story",
    },
    {
      link: `/#${sectionIds.team}`,
      label: "Our Team",
    },
    {
      link: `/#${sectionIds.events}`,
      label: "Upcoming Events",
    },
  ],
  "About": [
    {
      link:`/about#${sectionIds.aboutHero}`,
      label: "About Us",
    },
    {
      link: `/about#${sectionIds.story}`,
      label: "Our Story",
    },
    {
      link: `/about#${sectionIds.values}`,
      label: "Core Values",
    },
  ],
  "Activities": [
    {
      link: `/activities#${sectionIds.activitiesHero}`,
      label: "Activities",
    },
    {
      link: `/activities#${sectionIds.events}`,
      label: "Upcoming Events",
    },
    {
      link: `/activities#${sectionIds.onlineServices}`,
      label: "Onlne Services",
    },
    {
      link: `/activities#${sectionIds.events}`,
      label: "Recorded Sermons",
    },
  ],
  "Programs": [
    {
      link: `/programs#${sectionIds.programsHero}`,
      label: "Programs",
    },
    {
      link: `/programs#${sectionIds.programsSection}`,
      label: "Hubs",
    },
    {
      link: `/programs#${sectionIds.programsSection}`,
      label: "Youth Ministry",
    },
    {
      link: `/programs#${sectionIds.programsSection}`,
      label: "Children Ministry",
    },
  ],
  // "Giving": [
  //   {
  //     link: "/giving",
  //     label: "Give Online",
  //   },
  //   {
  //     link: "/giving/#ways-to-give",
  //     label: "Ways to Give",
  //   },
  // ],
  "Contact": [
    {
      link: `/contact#${sectionIds.getInTouch}`,
      label: "Contact Us",
    },
    {
      link: `/contact#${sectionIds.getInTouch}`,
      label: "Get In Touch",
    },
  ]
};

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollPosition = useScrollPosition();

  const { pathname } = useLocation();

	useEffect(() => {
		setMenuOpen(false)
	}, [pathname]);

  return (
    <>
      <section className={`w-full h-20 fixed top-0 left-0 z-50 backdrop-blur-md transition-all ease-in-out  ${scrollPosition > 100 && !menuOpen
        ? 'bg-white/70 shadow-md'
        : 'bg-white'
        }`}>
        <div className='max-w-[1440px] h-full mx-auto flex justify-between items-center gap-5 px-5 '>
          <Logo color='black' />

          {/* Desktop nav */}
          <NavigationMenu viewport={false} className='hidden md:flex'>
            <NavigationMenuList>
              {
                Object.entries(navItems).map(([section, navItem]) => {
                  return (
                    <NavigationMenuItem key={section}>
                      <NavigationMenuTrigger className='!bg-transparent hover:underline' >{section}</NavigationMenuTrigger>
                      <NavigationMenuContent className='dark'>
                        <ul className="grid min-w-[200px] gap-4">
                          <li>
                            {
                              navItem.map((itm, index) => (
                                <NavigationMenuLink key={index} asChild>
                                  <Link to={itm.link}>{itm.label}</Link>
                                </NavigationMenuLink>
                              ))
                            }
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })
              }
            </NavigationMenuList>
          </NavigationMenu>

          {menuOpen ?
            (
              <IoMdClose size={25} className='md:hidden' onClick={() => setMenuOpen(false)} />
            ) : (
              <MenuIcon className='md:hidden' onClick={() => setMenuOpen(true)} />
            )
          }

        </div>
        {
          menuOpen && (
            <motion.div
              initial={{ height: 0, y: "-100%", opacity: .5 }}
              animate={{ height: "auto", y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: .05 }}
              className="md:hidden absolute top-[100%] z-30 left-0 right-0 w-full bg-white min-h-[400px] h-auto p-5 shadow-lg">
              <ul className='w-full flex flex-col justify-center items-center'>
                {
                  Object.entries(navItems).map(([section, navItem]) => {
                    return (
                      <li key={section} className='w-[90%] p-5 border-b flex justify-center items-center'>
                        <Link to={navItem[0].link}>
                          {section}
                        </Link>
                      </li>
                    )
                  }
                  )}

              </ul>
            </motion.div>
          )
        }
      </section>
    </>
  )
}

export default TopBar