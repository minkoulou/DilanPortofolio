import dilane from '../assets/dilane.jpeg'
import { Download } from 'lucide-react';

export function Hero() {
  const badges = ['COMMUNITY MANAGEMENT', 'DESIGN GRAPHIQUE', 'CONSEILS STRATÉGIQUES'];

  return (
    <section className="relative bg-primary overflow-hidden  mt-2 max-w-6xl mx-auto">
       <div
        className="hidden md:block absolute top-0 right-0 h-full w-2/5 opacity-30 "
        style={{
          background: 'linear-gradient(135deg,#0F172A 0%, #0F172A 70%, #64748b 55%, rgb(45, 195, 231) 5%',
          
        }}
      />
      <div className="relative  mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-15 md:gap-25">
        <img
          src={dilane}
          alt="Dilane Evina"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover bg-slate-200 shrink-0 novich mt-6"
        />

        <div>
          <h1 className="text-blue-200 text-3xl md:text-4xl font-bold font-heading text-center md:text-center">DILANE EVINA</h1>
          <p className="text-slate-300 font-semibold mt-2 font-inter text-center md:text-center">community manager & Graphiste</p>
      
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}

          </div>
          <div className='flex justify-center items mt-8  hover:scale-103 transition-all'>
             <a href="/cv.jpeg" download='CV-Dilane-Evina-2026.jpeg' className='text-xl font-semibold text-blue-300 bg-blue-300/5 border border-blue-400/30 rounded-xl px-3 py-1 flex gap-4'> <Download className='animate-pulse' size={25}/>Télécharger le CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

