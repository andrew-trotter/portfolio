import { Project } from '../../public/models/project'
import FeatureItem from './FeatureItem'


interface Props {
  project: Project
}

function ProjectItem(props: Props) {
  const project = props.project

  return (
    <li className="flex flex-col p-4 mb-12 gap-4 rounded-lg hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out">
      <div className="flex content-between gap-4 text-gray-400">
        <a
          href={project.repo}
          target={project.name === 'Portfolio Website' ? '' : '_blank'}
        >
          <h2 className="text-lg font-bold text-fuchsia-500">{project.name}</h2>
        </a>
        <div className="flex gap-4">
          {project.repo !== '' && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Link to ${project.name} on GitHub`}
            >
              <span className="fa-brands fa-github fa-xl hover:text-fuchsia-500  duration-300 ease-in-out"></span>
            </a>
          )}
          {project.deployment !== '' && (
            <a
              href={project.deployment}
              target={project.name === 'Portfolio Website' ? '' : '_blank'}
              rel="noreferrer"
              aria-label={`Link to ${project.name} deployed`}
            >
              <span className="fa-solid fa-globe fa-xl hover:text-fuchsia-500 duration-300 ease-in-out"></span>
            </a>
          )}
        </div>
      </div>
      {project.image !== '' && (
        <img
          className="object-fit rounded-md border border-slate-300 mx-auto max-h-[50vh] self-start"
          src={`${project.image}-small.png`}
          srcSet={`${project.image}-small.png 200w, ${project.image}-med.png 450w, ${project.image}-large.png 900w`}
          // sizes={`(max-width: 400px) 200px, (max-width: 768px) 450px, (max-width: 1024px) 900px`}
          alt={project.name}
        />
      )}
      <h3 className="text-gray-400">{project.desc}</h3>
      <div>
        {project.techs.map((tech) => (
          <FeatureItem key={tech.name} name={tech.name} />
        ))}
      </div>
    </li>
  )
}

export default ProjectItem
