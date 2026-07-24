import {GraduationCap, Award} from 'lucide-react'

const diplomes = [

    {
        icon:GraduationCap,
        periode:'2020-2023',
        titre:'LICENCE EN LETTRE',
        etablissement:'UNIVERSITÉ DE YAOUNDÉ I'
    },

    {
        icon:Award,
        periode:'2023',
        titre:'Diplôme de qualification professionnel',
        etablissement:'Inatitut de formation professionnel swb'
    }

]

export default function Diplome(){
   return (
   <section className="bg-primary px-6 py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-2xl font-bold text-center font-heading mb-10">FORMATIONS & DIPLÔMES</h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">

                {diplomes.map(({icon:Icon,periode,titre,etablissement})=>(

                   <div key={titre} className='bg-[#1D2B3F] rounded-xl p-5 flex items-center gap-4'>
                     
                     <div className='bg-slate-700/50 rounded-lg p-3 shrink-0'>
                       <Icon className='text-secondary' size={22}/>
                     </div>

                     <div>
                        <p className="text-secondary text-xs font-semi-bold">{periode}</p>
                        <p className="text-white text-sm font-semi-bold">{titre}</p>
                        <p className="text-secondary/80 text-xs font-semi-bold">{etablissement}</p>
                     </div>

                    </div>

                ))}

            </div>

        </div>
    </section>
)
} 