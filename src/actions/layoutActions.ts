import { client, type ImageType } from "@/sanity/sanity-client";

export async function getHeroByPage(page = 'home') {
  const query = `*[_type == "hero" && page == $page][0]`;
  return await client.fetch(query, { page });
}

export async function fetchJesusSection() {
  return client.fetch(`
    *[_type == "jesusSection"][0]{
      title,
      content,
      "imageUrl": image.asset->url,
      followingTitle,
      followingContent
    }
  `)
}

export async function fetchCoreValuesAndVision() {
  return client.fetch(`
    *[_type == "coreValuesAndVision"][0]{
      coreValuesContent,
      visionContent,
      coreValuesImage {
        asset->{
          _id,
          url
        }
      },
      visionImage {
        asset->{
          _id,
          url
        }
      }
    }
  `)
}


export async function fetchStorySection() {
  return client.fetch(`
    *[_type == "storySection"][0]{
      title,
      content,
      image {
        asset->{
          _id,
          url
        }
      }
    }
  `)
}


export const getTeamMembersQuery = `
  *[_type == "teamMember"] | order(_createdAt desc)[0...10] {
    _id,
    name,
    role,
    "imageUrl": image.asset->url
  }
`

export interface Event {
  _id: string
  title: string
  date: string
  description: string
  location: string
  image: ImageType
}


export const getEvents = async (): Promise<Event[]> => {
  const query = `*[_type == "event"] | order(_createdAt desc)[0...8] {
  _id,
  title,
  date,
  description,
  location,
  image {
    asset->{
      _id,
      url
    }
  }
}`

  const data = await client.fetch<Event[]>(query)
  return data
}

export interface Programs {
  hubs: {
    description: Array<any>
    image: ImageType
  }
  youth: {
    description: Array<any>
    image: ImageType
  }
  children: {
    description: Array<any>
    image: ImageType
  }
}

export const getPrograms = async (): Promise<Programs> => {
  const query = `*[_type == "programs"][0]{
    hubs {
      description,
      image {
    asset->{
      _id,
      url
    }
  }
    },
    youth {
      description,
      image {
    asset->{
      _id,
      url
    }
  }
    },
    children {
      description,
      image {
    asset->{
      _id,
      url
    }
  }
    }
  }`

  const data = await client.fetch<Programs>(query)
  return data
}


export interface SocialPlatform {
  link: string
  username?: string
}

export interface Socials {
  instagram: SocialPlatform
  facebook: SocialPlatform
  twitter: SocialPlatform
  youtube: SocialPlatform
}

export const getSocials = async (): Promise<Socials> => {
  const query = `*[_type == "socials"][0]{
    instagram,
    facebook,
    twitter,
    youtube
  }`
  const data = await client.fetch<Socials>(query)
  return data
}

export interface Info {
  churchHours: any
  phone: string
  address: any
}

export const getInfo = async (): Promise<Info> => {
  const query = `*[_type == "info"][0]{
    "churchHours": churchHours,
    phone,
    "address": address
  }`;
  const data = await client.fetch<Info>(query)
  return data
}

export const getSermonsQuery = `*[_type == "sermon"] | order(date desc)[0...9] {
  _id,
  title,
  description,
  youtubeUrl,
  date,
  preacher
}`

export const getSermons = async () => {
  return client.fetch(getSermonsQuery)
}

export const getOnlineServicesQuery = `*[_type == "onlineService"] | order(_createdAt desc)[0...9] {
  _id,
  title,
  description,
  link
}`

export const getOnlineServices = async () => {
  return client.fetch(getOnlineServicesQuery)
}

export const getTestimoniesQuery = `*[_type == "testimony"] | order(_createdAt desc)[0...6] {
  _id,
  name,
  "imageUrl": image.asset->url,
  testimony
}`

export const getTestimonies = async () => {
  return await client.fetch(getTestimoniesQuery)
}
