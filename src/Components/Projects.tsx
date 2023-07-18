import {projects} from '../assets/data/data'
import ProjectItem from "./ProjectItem"
import { Project } from '../../public/models/project'

function Projects() {
  const data = projects
  return (
    <ul id="projects" className="my-24">
      {data.map((project: Project) => <ProjectItem key={project.id} project={project}/>)}
    </ul>
  )
}

export default Projects