import TitleComponent from '../TitleComponent'
import { sectionIds } from './sectionIds'
import { useEffect, useState } from 'react'
import { getTeamMembersQuery } from '@/actions/layoutActions'
import { client } from '@/sanity/sanity-client'
import { Skeleton } from '../ui/skeleton'

type TeamMember = {
  _id: string
  name: string
  role: string
  imageUrl: string
}

const TeamMemberSkeleton = () => {
  return (
    <div className='w-[250px] overflow-hidden rounded-tr-[50px] rounded-bl-[50px] min-h-[300px] border'>
      <Skeleton className="w-full h-[220px]" />
      <div className="p-2 w-full flex flex-col gap-1 text-center">
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>
    </div>
  )
}

const TeamSkeleton = () => {
  return (
    <section id={sectionIds.team} className='w-full h-auto my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Meet The Team' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <TeamMemberSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    client.fetch(getTeamMembersQuery).then((data) => {
      setTeam(data)
    })
  }, [])

  if (!team.length) return <TeamSkeleton />

  return (
    <section id={sectionIds.team} className='w-full h-auto  my-20 flex gap-10 flex-col items-center px-10'>
      <div className="w-full">
        <TitleComponent title='Meet The Team ' />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {
          team.map((member, index) => (
            <div key={index} className='w-[250px] overflow-hidden rounded-tr-[50px] rounded-bl-[50px] min-h-[300px]  border'>
              <img src={member.imageUrl} alt={member.name} className='w-full h-[220px] object-center object-cover' />
              <div className="p-2 w-full flex flex-col gap-1 text-center">
                <h4 className='text-lg'>{member.name}</h4>
                <p className='text-muted'>{member.role}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Team