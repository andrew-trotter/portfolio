export type Project = {
  id: number
  display: boolean
  name: string
  desc: string
  repo: string
  deployment: string
  image: string
  techs: Tech[]
}

export type Tech = {
  name: string
}