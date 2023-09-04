import {Tech} from "./project"

export type Experience = {
  id: number
  name: string
  file: string
  dateStart: string
  dateEnd: string
  img: string
  desc: string
  techs: Tech[]
}

