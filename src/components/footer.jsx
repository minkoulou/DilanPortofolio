export function Footer(){
    return (
      <footer className="bg-primary px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex gap-2 flex-col">
            <p className="text-white font-bold text-sm font-heading text-center">DILANE EVINA</p>
            <p className="text-slate-500 text-xs text-center">© 2026 Dilane Evina — Community Manager & Graphiste</p>
        </div>

        <div className="flex gap-10 text-slate-300 text-sm">
            <a href="#" className="hover:text-white font-heading font-bold  text-blue-500 hover:white transition-all">DE Consulting</a>
            <a href="#" className="hover:text-white font-heading font-bold text-blue-500 hover:white transition-all">LinKedIn</a>
        </div>
      </footer>
    )
}