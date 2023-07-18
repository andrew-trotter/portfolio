import '@fortawesome/fontawesome-free/css/all.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function Socials() {
  return (
    <div className="flex gap-4 text-gray-400 justify-self-end">
      <a href="https://github.com/andrew-trotter" target="_blank" rel="noreferrer" ><span className="fa-brands fa-github fa-xl hover:text-fuchsia-500 duration-300 ease-in-out"></span></a>
      <a href="https://www.linkedin.com/in/andrew-trotter-1918a0102/" target="_blank" rel="noreferrer" ><span className="fa-brands fa-linkedin fa-xl hover:text-fuchsia-500 duration-300 ease-in-out"></span></a>
    </div>
  )
}

export default Socials
