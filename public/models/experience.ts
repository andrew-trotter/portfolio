import {Tech} from "./project"

export type Experience = {
  id: number
  name: string
  dateStart: string
  dateEnd: string
  desc: string
  techs: Tech[]
}

