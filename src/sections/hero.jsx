import dilane from '../assets/dilane.jpeg'

export function Hero() {
  const badges = ['COMMUNITY MANAGEMENT', 'DESIGN GRAPHIQUE', 'CONSEILS STRATÉGIQUES'];

  return (
    <section className="relative bg-slate-800 overflow-hidden hero mt-2 max-w-6xl mx-auto">
       <div
        className="hidden md:block absolute top-0 right-0 h-full w-2/5 opacity-30 "
        style={{
          background: 'linear-gradient(135deg,#1e293b 0%, #0F172A 50%, #64748b 55%, #64748b 5%',
          
        }}
      />
      <div className="relative  mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-15 md:gap-25">
        <img
          src={dilane}
          alt="Dilane Evina"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover bg-slate-200 shrink-0 X"
        />

        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold font-heading text-center md:text-left">DILANE EVINA</h1>
          <p className="text-slate-300 font-semibold mt-2 font-inter text-center md:text-left">community manager & Graphiste</p>
      

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
        </div>
      </div>
    </section>
  );
}

