export type Project = {
  id: number
  display: boolean
  name: string
  desc: string
  repo: string
  deployment: string
  image: string
  techs: Tech[]
  flags: string[]
}

export type Tech = {
  name: string
}