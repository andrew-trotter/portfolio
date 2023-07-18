import {projects} from '../assets/data/data'
import ProjectItem from "./ProjectItem"
import { Project } from '../../public/models/project'

function Projects() {
  const data = projects
  return (

    <div className=''>
            <h1 className="text-gray-400 font-semibold font-sans text-2xl">Projects</h1>

      <ul id="projects" className="mb-24">
        {data.map((project: Project) => <ProjectItem key={project.id} project={project}/>)}
      </ul>
    </div>
  )
}

export default Projects