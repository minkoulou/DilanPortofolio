import { useState } from "react"
export function NavBar(){
     
    const [isOpen,setisOpen]=useState(false)

    const handlerToggle =()=>{
        setisOpen(prev=> !prev);
    }
    return(
      <div className='fixed top-0 w-full right-0 z-10 bg-primary '>
        <section className="w-full h-[13%] flex bar max-w-6xl  mx-auto">

             {/* LOGO */}

            <article className="w-[20%] flex items-center">
                <p className="logod text-sm lg:text-xl text-blue-100 font-heading ml-2 lg:ml-8 mt-2 mb-2 logo">DILANE EVINA</p>
            </article>

            <nav className="hidden sm:w-[60%] sm:flex sm:justify-center items-center md:gap-8 lg:gap-15 sm:gap-8 md:w-[80%]">
                <a href="#Profile" className="font-bold text-gray-500 font-heading hover:underline  hover:text-blue-200 transition-colors duration-200">Profil</a>
                <a href="#skills" className="font-bold text-gray-500 font-heading hover:underline  hover:text-blue-200 transition-colors duration-200 ">Experiences</a>
                <a href="#projets" className="font- font-bolbold text-gray-500 font-heading hover:underline hover:text-blue-200 transition-colors duration-200">Projets</a>
                <a href="#formations" className="font-bold text-gray-500 font-heading hover:underline hover:text-blue-200 transition-colors duration-200">Formations</a>
            </nav> 

                {/* navigation pour les appreils mobiles  */}

            {isOpen &&  (<nav className="flex flex-col z-10 absolute right-1 rounded-bl-xl rounded-br-xl top-14 tel w-40 p-4 sm:hidden gap-4">
          
                <a href="#Profile" className="font-bold text-blue-300 font-heading hover:scale-95 transition-all duration-400 ">Profil</a>
                <a href="#skills" className="font-bold text-blue-300 font-heading hover:scale-95 transition-all duration-400 ">Experiences</a>
                <a href="#projets" className="font-bold text-blue-300 font-heading hover:scale-95 transition-all duration-400 ">Projets</a>
                <a href="#formations" className="font-bold text-blue-300 font-heading hover:scale-95 transition-all duration-400 ">Formations</a>
                <a href="#contact" className="font-bold text-blue-300 font-heading hover:scale-95 transition-all duration-400 ">Contact</a> 

            </nav>)}

            <article className="sm:hidden  flex flex-col items-end gap-2 mt-3 pr-2 mb-2 w-[80%]" onClick={handlerToggle}>

                <span className={'w-6 h-[0.25px] bg-white transition-transform duration-300 ' + (isOpen ?'rotate-45 translate-y-2':'')}></span>
                <span className={'w-6 h-[0.25px] bg-white transition-transform duration-300 ' + (isOpen ? 'opacity-0': '')}></span>
                <span className={'w-6 h-[0.25px] bg-white transition-transform duration-300 ' + (isOpen ?'-rotate-50 -translate-y-2':'')}></span> 

            </article>

            {/*Button de contacts  */}

         <article className="hidden w-[20%] md:w-[30%] lg:w-[20%] sm:flex  sm:justify-end  sm:items-center pr-1 lg:pr-6 lg:pl-4">
            <a href='tel:+237657732912' className="text-center hover:scale-105  font-bold text-heading text-blue-100  transition-all md:w-[70%] lg:w-[70%] sm:w-[80%] h-[60%] mr-2 md:mr-0 rounded-xl bg-secondary border-primary">contact</a>
         </article>

        </section>
      </div>
    )
}

