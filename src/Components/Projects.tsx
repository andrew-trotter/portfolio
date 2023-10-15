import { projects } from '../assets/data/data'
import ProjectItem from './ProjectItem'
import { Project } from '../../public/models/project'

function Projects() {
  const data = projects
  let wip: Project
  return (
    <div id="projects">
      <h1 className="text-gray-400 font-sans text-2xl mb-4">
        Projects
      </h1>

      <ul className="mb-24">
        {data.map((project: Project) => {
          if (project.flags.includes('wip')) {
            wip = project
          }
          return (
          (project.display && !project.flags.includes('wip')) &&
          <ProjectItem key={project.id} project={project} />
        )})}
        <h1 className="text-gray-400 font-sans text-2xl mb-4">What's Next?</h1>
        <ProjectItem project={wip} />
      </ul>

    </div>
  )
}

export default Projects
