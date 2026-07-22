const competences=[
    {label:'Strategie de Communication digitale', niveau:95},
    {label:'Design Graphique & Branding', niveau:85},
    {label:'Community Management', niveau:90}
];

const langues=[
    {label:'Français', niveau:'LANGUE MATERNELLE'},
    {label:'Anglais', niveau:'DÉBUTANT'}
]

const qualites = ['CRÉATIVITÉ STRATÉGIQUE', 'RIGUEUR ORGANISATIONNELLE', "ESPRIT D'ANALYSE", 'ORIENTATION RÉSULTATS'];

export function Competences(){
      return(
        <section className="bg-primary px-4 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-white text-xl font-bold mb-6">COMPÉTENCES TECHNIQUES</h2>

                    <div className="space-y-5">

                        {competences.map((c)=>(
                            <div key={c.label}>

                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-white font-semibold font-heading">{c.label}</span>
                                    <span className="text-tertiary">{c.niveau}%</span>
                                </div>

                                <div className="h-2 bg-primary rounded-full overflow-hidden border border-white">
                                   <div className="h-full bg-secondary rounded-full" style={{width:`${c.niveau}%`}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-xl font-bold mb-6">LANGUES</h2>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {langues.map((l)=>(
                            <div className="bg-slate-800/60 rounded-xl text-center py-4 " key={l.label}>
                                 <p className="text-white font-body font-semibold text-sm">{l.label}</p>
                                 <p className="text-slate-400 text-xs mt-1 font-body">{l.niveau}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-white text-xl font-bold font-heading mb-4">QUALITÉS</h2>
                    <div className=" gap-4 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2">
                        {qualites.map((q)=>(
                            <span className="text-xs text-center font-semibold text-[#5278CF] bg-[#1A2A4A] border border-secondary rounded-xl px-1 py-2 font-body">{q}</span>
                            
                            ))}
                    </div>
                </div>
            </div>
        </section>
      )
}