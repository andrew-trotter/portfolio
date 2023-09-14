import '@fortawesome/fontawesome-free/css/all.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
config.autoAddCss = false

function Socials() {
  return (
    <div className="flex gap-4 text-gray-400 justify-self-end">
      <a href="https://github.com/andrew-trotter" target="_blank" rel="noreferrer" aria-label='Link to my Github'><span className="fa-brands fa-github fa-xl hover:text-fuchsia-500 duration-300 ease-in-out"></span></a>
      <a href="https://www.linkedin.com/in/andrewjtrotter//" target="_blank" rel="noreferrer" aria-label='Link to my Linkedin'><span className="fa-brands fa-linkedin fa-xl hover:text-fuchsia-500 duration-300 ease-in-out"></span></a>
    </div>
  )
}

export default Socials
