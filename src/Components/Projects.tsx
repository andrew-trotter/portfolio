import { projects } from '../assets/data/data'
import ProjectItem from './ProjectItem'
import { Project } from '../../public/models/project'

function Projects() {
  const data = projects
  return (
    <div id="projects">
      <h1 className="text-gray-400 font-sans text-2xl mb-4">
        Projects
      </h1>

      <ul className="mb-24">
        {data.map((project: Project) => (
          project.display &&
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects
