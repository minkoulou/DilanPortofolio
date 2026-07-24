import { ShieldCheck,Share2 } from "lucide-react";

const points= [
    {icon:ShieldCheck, title:'Rigueur', text:'Gestion précise des dossiers et conformité totale.'},
    {icon:Share2,title:'polyvalence', text:'Adaptation rapide aux nouveaux equipements'}
];


export function Profile(){
    return (
        <section className="bg-slate-900 w-full py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 bg-slate-700 mt-4 pt-2">
              <h2 className="text-white text-2xl font-bold font-heading border-l-4 border-blue-400 pl-4 md:col-span-1 text-wrap md:mt-6">PROFIL PROFESSIONNEL</h2>
              <div className="bg-slate-800/60 p-6 md:col-span-2 text-tertiary">
               <p> Passionné par la communication digitale, je mets la créativité au service de la
                   performance. J'accompagne entreprises, institutions et entrepreneurs dans la conception
                   de stratégies digitales, la création d'identités visuelles et le développement de
                   contenus engageants.
                </p>

               <div>
                {points.map(({icon:Icon,title,text})=>(
                   <div key={title} className="flex gap-3 mt-8">

                    <Icon className='text-secondary shrink-0' size={20} />

                    <div>
                     <p className="text-white font-semibold text-sm">{title}</p>
                     <p className="text-slate-400 text-sm">{text}</p>
                    </div>

                   </div>
                ))}
                </div> 
                   
              </div>
            </div>
        </section>
    )
}