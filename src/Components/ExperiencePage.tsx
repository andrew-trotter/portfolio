import { experiences } from '../assets/data/data'
import ExperienceItem from './ExperienceItem'
import resume from '../assets/data/andrew trotter SoT resume software developer.pdf'
import { Experience } from '../../public/models/experience'

function ExperiencePage() {
  const data = experiences

  // TODO: replace PDF with updated portfolio link after deployment
  // TODO: add start date and end date
  return (
    <div id="experiences" className="text-gray-400 font-sans mb-12">
      <h1 className="text-2xl mb-4">Experiences</h1>
      <ul  className="">
        {data.map((experience: Experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </ul>

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="flex group p-4 w-fit justify-start "
        aria-label='Link to my resume (PDF, 3.9 MB)'
      >
        <p className="text-fuchsia-500 group-hover:ease-in-out duration-300  ">
          My Resume
        </p>
        <span className="material-symbols-outlined ml-1 group-hover:ease-in-out group-hover:-rotate-45 group-hover:text-fuchsia-500 duration-300">
          arrow_right_alt
        </span>
      </a>
    </div>
  )
}

export default ExperiencePage
