import {Mail,Phone,MapPin} from 'lucide-react';

const contacts= [
    {icon:Mail , lines:['Dilaneevina93@gmail.com'],href:'Dilaneevina93@gmail.com'},
    {icon:Phone , lines:['+237 650 67 61 00' , '+237 657 73 29 12'] , href:'+237 650 67 61 00'},
    {icon:MapPin , lines:['Yaoundé, Cameroun'] , href:'https://google.com'}
] ;

export function Contact (){
    return (
        <section className="bg-[#1A2A4A] px-6 py-16 loranie">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-white text-2xl font-heading font-bold mb-3">Prêt à collaborer ?</h2>
                <p className="text-secondary mb-10">
                    Je suis à  votre disposition pour toute opportunité profesionnelle relative à la gestion de vos plateformes digitales.
                </p>

                <div className="space-y-5">
                    {contacts.map(({icon:Icon,lines,href},i)=>(
                       <div key={i} className='flex items-center gap-4'>

                         <div className="bg-slate-700/60 rounded-lg p-3">
                          <Icon className="text-tertiary" size={18} />
                         </div>

                         <div className='flex gap-2 flex-col hover:scale-110 transition-all'>
                            {lines.map((line)=>(
                                <a href={href} target="_blank" className="text-white hover:text-secondary font-semibold text-sm">{line}</a>
                            ))}
                         </div>

                       </div>

                    ))}
                </div>
            </div>
        </section>
    )
}