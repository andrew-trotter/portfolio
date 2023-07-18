import { Experience } from '../../models/experience'
import FeatureItem from './FeatureItem'

interface Props {
  experience: Experience
}

function ExperienceItem(props: Props) {
  const experience = props.experience

  return (
    // TODO: added frosted glass background on hover
        // TODO: add start and end date
    <li className=" my-12 ">
      <div className="flex gap-4 p-4 rounded-lg hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out">
        <div>
          <h4 className="text-lg font-bold text-fuchsia-500">{experience.name}</h4>
          <p className='text-gray-400 ml-4 my-1'>{experience.desc}</p>
          {experience.techs.map((tech) => (
            <FeatureItem key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </li>
  )
}

export default ExperienceItem
