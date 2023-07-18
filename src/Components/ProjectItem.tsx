import { Project } from '../../models/project'
import FeatureItem from './FeatureItem'

interface Props {
  project: Project
}

function ProjectItem(props: Props) {
  const project = props.project

  return (
    // TODO: added frosted glass background on hover
    <li className=" my-12 ">
      <div className="flex gap-4 p-4 rounded-lg hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out">
        <img
          className="object-scale-down ml-2 mt-2 self-start"
          src={project.image}
          alt={project.name}
        />
        <div>
          <h4 className="text-lg font-bold text-fuchsia-500">{project.name}</h4>
          <h5 className="text-gray-400">{project.desc}</h5>

          {project.techs.map((tech) => (
            <FeatureItem key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
