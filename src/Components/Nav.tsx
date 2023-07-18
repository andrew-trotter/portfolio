import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Projects', href: '#projects' },
  ]

  const [path, setPath] = useState('')

  function handleNav(input: string) {
    setPath(input)
  }

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1,
    )

    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [path])

  return (
    <nav className="my-16 text-gray-600">
      <ul className="flex flex-col gap-4">
        {navigation.map((navItem) => {
          return (
            <li
              key={navItem.name}
              className="p-2 rounded-lg w-fit focus:ml-4 hover:bg-slate-500 hover:bg-opacity-10 hover:shadow-2xl duration-300 ease-in-out hover:text-slate-200"
            >
              <NavLink
                to={navItem.href}
                onClick={() => handleNav(`${navItem.href}`)}
                className={(props) => {
                  return `${props.isActive ? 'isActive ' : ''}`;
                }}
              >
                {navItem.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
