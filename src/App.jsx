// import { useState } from 'react'

// import dilanImg from './assets/dilane.jpeg'
import './index.css'
import {NavBar} from './components/nav-bar.jsx'
import { Hero } from './sections/hero.jsx'
import { Profile } from './sections/profile.jsx'
import { Parcours } from './sections/parcours.jsx'
import { Projets } from './sections/projets.jsx'
import { Competences } from './sections/competences.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <div className="w-full h-screen bg-primary">
     <NavBar />
     <Hero/>
     <Profile/>
     <Parcours/>
     <Projets />
     <Competences />
   </div>  
   </>
  )
}

export default App
