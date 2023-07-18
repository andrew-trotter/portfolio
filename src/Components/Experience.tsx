import { experiences } from '../data/data'
import ExperienceItem from './ExperienceItem'
import resume from '../data/resume.pdf'

function Experience() {
  const data = experiences

  // TODO: replace PDF with updated portfolio link after deployment
  return (
    <div>
      <ul id="experiences" className="my-14">
        {data.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </ul>

      
        <p className="flex group text-gray-400 p-4 justify-start">
          <a href={resume} target="_blank" rel="noopener noreferrer" className=' group-hover:text-fuchsia-500 group-hover:ease-in-out duration-300'>
            My Resume
          </a>
          <span className="material-symbols-outlined ml-1 group-hover:ease-in-out group-hover:text-fuchsia-500 group-hover:ml-3 duration-300">arrow_right_alt</span>
        </p>
      </div>
    
  )
}

export default Experience
