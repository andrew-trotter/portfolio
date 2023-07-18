import Socials from './Socials'

function Footer() {
  return (
    <div className="flex justify-between text-gray-400 font-medium">
      <div className="lg:hidden block">
        <Socials />
      </div>
      <p className='ml-auto'>
        Made by Andrew Trotter using{' '}
        <span className="text-gray-300">React</span> and{' '}
        <span className="text-gray-300">Tailwind CSS</span>.
      </p>
    </div>
  )
}

export default Footer
