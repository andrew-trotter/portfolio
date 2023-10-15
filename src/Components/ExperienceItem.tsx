import { Experience } from '../../public/models/experience'
import FeatureItem from './FeatureItem'

interface Props {
  experience: Experience
}

function ExperienceItem(props: Props) {
  const experience = props.experience

  return (
    <li className="mb-12">
      <div className="flex flex-col p-4 rounded-lg hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out">
        <div className="flex content-between gap-4">
          <a href={experience.file} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg font-bold text-fuchsia-500">
              {experience.name}
            </h2>
          </a>
          <span className="hidden sm:block">
            {experience.dateStart} - {experience.dateEnd}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row my-1 gap-2">
          <div className="flex flex-row justify-between flex-shrink-0">
            <img className="max-h-20" src={experience.img} alt="" />
            <span className="block sm:hidden">
              {experience.dateStart} - {experience.dateEnd}
            </span>
          </div>
          <p className="text-gray-400 sm:max-w-md">{experience.desc}</p>
        </div>
        <div>
          {experience.techs.map((tech) => (
            <FeatureItem key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </li>
  )
}

export default ExperienceItem
