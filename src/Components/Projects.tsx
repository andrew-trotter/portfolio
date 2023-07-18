import {projects} from "../data/data"
import ProjectItem from "./ProjectItem"

function Projects() {
  const data = projects
  return (
    <ul id="projects" className="my-24">
      {data.map(project => <ProjectItem key={project.id} project={project}/>)}
    </ul>
  )
}

export default Projects