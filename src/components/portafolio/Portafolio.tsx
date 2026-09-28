import { usePortafalioStore } from "../../store/portafolio.store"
import { accentHover, accentText } from "../ui/accent"
import { SectionHeader } from "../ui/SectionHeader"

export const Portafolio = () => {
  const featured = usePortafalioStore(state => state.featured)
  const portafolio = usePortafalioStore(state => state.portafolio)

  return (
    <section id="proyectos" className="w-full max-w-site mx-auto px-gutter py-space-xl md:py-16">
      <div className="flex flex-col gap-space-lg">
        <SectionHeader kicker="// 04. Sistemas en Producción" title="Proyectos Destacados"
          aside={<span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary" />SISTEMAS EMPRESARIALES (CÓDIGO PRIVADO)</span>} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
          {featured.map(item => (
            <article key={item.title} className="group card p-space-lg flex flex-col justify-between gap-space-md hover:border-secondary/40 transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-label-sm uppercase ${accentText[item.accent]}`}>{item.kicker}</span>
                  <span className="chip text-outline bg-surface-container whitespace-nowrap">{item.badge}</span>
                </div>
                <span className={`material-symbols-outlined !text-[40px] ${accentText[item.accent]} mt-space-sm`}>{item.icon}</span>
                <h3 className={`font-display text-headline-sm text-on-surface transition-colors ${accentHover[item.accent]}`}>{item.title}</h3>
                <p className="text-body-sm md:text-body-md text-on-surface-variant">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-1 pt-space-md border-t border-surface-container-high">
                {item.stack.map(s => <span key={s} className={`chip ${accentText[item.accent]}`}>{s}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-1 pt-space-lg">
          <span className="section-kicker">// 05. Proyectos Personales</span>
          <h3 className="font-display text-headline-md text-on-surface">Apps publicadas</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md">
          {portafolio.map(p => (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer"
              className="group card overflow-hidden flex flex-col hover:border-secondary/50 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all">
              <div className="h-40 overflow-hidden bg-surface-container-high">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-space-md flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="font-display text-title-md text-on-surface group-hover:text-secondary transition-colors">{p.title}</span>
                  <span className="text-body-sm text-outline">{p.description}</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
