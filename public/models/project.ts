export type Project = {
  id: number
  name: string
  desc: string
  image: string
  techs: Tech[]
}

export type Tech = {
  name: string
}