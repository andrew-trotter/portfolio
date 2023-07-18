import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

// type NavItem = {
//   name: string
//   id: string
//   href: string
// }

function Nav() {
  const navigation = [
    { name: 'About', id:'nav-about', href: '#about' },
    { name: 'Experiences', id:'nav-experiences', href: '#experiences' },
    { name: 'Projects', id:'nav-projects',href: '#projects' },
  ]
  const [active, setActive] = useState('')
  const [path, setPath] = useState('')

  function handleNav(href: string, id: string) {
    setActive(id)
    setPath(href)
  }

  // add "active" state for handling nav buttons styling active button
  // Add onFocus() event for changing state, not onClick. 
  // after testing, onFocus delays rendering until the next onFocus event. Need to research

  useEffect(() => {
    const href = path.substring(
      path.lastIndexOf('#') + 1
    )

    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [path])

  return (
    <nav className="hidden lg:flex my-16 text-gray-600">
      <ul className="flex flex-col gap-4">
        {navigation.map((navItem) => {
          return (
            <NavLink
              key={navItem.name}
              id={navItem.id}
              to={navItem.href}
              onFocus={() => handleNav(navItem.href, navItem.id)}
              className= {active === navItem.id ? "ml-4 text-slate-200 bg-slate-600 bg-opacity-50 shadow-2xl p-2 rounded-lg w-fit hover:shadow-2xl duration-300 ease-in-out hover:text-slate-200" : "p-2 rounded-lg w-fit  hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out hover:text-slate-200"}
            >
              <li className="">{navItem.name}</li>
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
