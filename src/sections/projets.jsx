import image1 from '../assets/FACAS.jpeg'
import image2 from '../assets/advasory.jpeg'
import image3 from '../assets/Mebusco.jpeg'

const projets= [

    {
        img:image1,
        titre:'FACILITATEUR CANADA ET SERVICES',
        description:"Elaboration de la stratégie de communication digitale, création de l'identité visuelle, gestion des rseéaux sociaux ,production de contenus  graphiques et audiovisuels",
        link:'https://www.facebook.com/share/1CNnxFxgq5/',
        cta:'DECOUVRIR'
    },

    {
        img:image2,
        titre:'AE ADVISORY',
        description:"Positionnement Digital & Communication. Développement de la stratégie de communication orientée TikTok, création de contenus, conception de supports marketing.",
        link:'https://www.tiktok.com/@ae.advasory?_r=1&_t=ZS-98DGPPhdNXZ',
        cta:'DECOUVRIR',
    },

    {
        img:image3,
        titre:'MEBUSCO SARL',
        description: "Communication Digitale & Graphisme. Gestion des plateformes sociales, création de campagnes de communication, production de vidéos, conception graphique.",
        link:'https://www.facebook.com/share/17r83Fo2RE/',
        cta: 'DECOUVRIR',


    },

]
export function Projets(){
 return(
    <section className="bg-primary px-6 py-16">
        <div className="max-w-6xl mx-auto">
            <div className="mb-10">
                <h2 className="text-white text-2xl font-bold font-heading text-center">RÉALISATIONS & PROJETS</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">

                {projets.map(({img,titre,description,link,cta})=>(

                    <div key={titre} className="bg-secondary/10 rounded-xl  p-4 overflow-hidden flex flex-col">

                        <div className="rounded-lg w-full h-32 flex items-center justify-center mb-2">
                           <img src={img} alt="image_projet" className="object-cover w-full h-32 transition-all hover:scale-102 rounded-xl"/>
                        </div>

                        <h3 className="text-white font-bold mb-2 font-heading">{titre}</h3>
                        <p className="text-slate-400 text-sm flex-1 font-body">{description}</p>
                        <a href={link} className="mt-5 w-[40%] sm:w-[50%] md:w-[35%] pl-2 md:pl-1 hover:scale-105 transition-transform duration-300 rounded-sm bg-tertiary text-primary font-body btn">{cta}</a>

                    </div>
                ))}
            </div>
        </div>
    </section>
)}

