export type Project = {
  id: number
  display: boolean
  name: string
  desc: string
  url: string
  image: string
  techs: Tech[]
}

export type Tech = {
  name: string
}