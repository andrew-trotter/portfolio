import Nav from "./Nav"


function Header() {
  return(
    <div className="flex flex-col lg:h-screen">
      <div className="align">
        <hgroup>
          <h1 className="text-5xl mb-2 font-bold">Andrew Trotter</h1>
          <h2 className="text-2xl font-medium mb-2">Software Developer</h2>
        </hgroup>
        <p className="text-gray-400 w-3/4 mr-9"></p>
      </div>
      <Nav />
      
    </div>
  )
}

export default Header