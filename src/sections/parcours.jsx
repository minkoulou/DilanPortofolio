const experiences = [
    {
        entreprise:'FACILATTEUR CANADA ET SERVICES',
        poste:'RESPONSABLE COMMUNICATION DIGITALE',
        periode:'2023 - Présent',
        taches:[
                "Élaboration et déploiement de la stratégie de communication digitale.",
                "Gestion quotidienne des réseaux sociaux Facebook et TikTok.",
                "Création de supports graphiques destinés aux campagnes de communication.",
                "Rédaction de contenus publicitaires adaptés aux différents canaux de communication."
               ],

    },

    {
       entreprise: 'AE ADVISORY',
       poste: 'RESPONSABLE DE COMMUNICATION',
       periode: '2025 - 2026',
       taches: [
         "Élaboration et mise en œuvre de la stratégie de communication digitale de l'entreprise.",
         "Création, gestion et animation des réseaux sociaux (Facebook, TikTok et LinkedIn).",
         "Planification des publications et animation des communautés en ligne.",
       ],
  },
    
]

export function Parcours(){
       
    return (
        <section className="bg-primary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-2xl md:text-3xl font-heading font-bold text-center pt-4">PARCOURS PROFESSIONNEL</h2>
                <div className="w-16 h-1 bg-blue-200 mx-auto mt-3 mb-12"/>

                <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
                   <span className=" md:hidden absolute left-3 top-0 w-[0.2px] h-full bg-gray-500 rond"/>

                    { experiences.map((exp)=>(
                     <div key={exp.entreprise} className="relative">
                         <span className="absolute md:-left-10 -left-7 top-0 w-4 h-4 rounded-full bg-white border-2 border-primary rond"></span>

                         <div className="bg-slate-800/50 rounded-xl p-6 mr-2">
                           <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="text-white font-bold">{exp.entreprise}</h3>
                            <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 rounded px-2 py-1">{exp.periode}</span>
                           </div>
                           <p className="text-slate-300 font-semibold text-sm mb-3">{exp.poste}</p>
                           <ul className="space-y-1">

                            {exp.taches.map((tache)=>(
                                <li key={tache} className="text-slate-400">{tache}</li>
                            ))}
                           </ul>
                         </div>
                     </div>

                    ) )}
                </div>
            </div>
        </section>
    )
}
