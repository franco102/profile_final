import { usePortafalioStore } from "../../store/portafolio.store"
import { accentText } from "../ui/accent"
import { SectionHeader } from "../ui/SectionHeader"

export const Skills = () => {
  const skillGroups = usePortafalioStore(state => state.skillGroups)
  const tools = usePortafalioStore(state => state.tools)

  return (
    <section id="stack" className="w-full max-w-site mx-auto px-gutter py-space-xl md:py-16">
      <div className="flex flex-col gap-space-lg">
        <SectionHeader kicker="// 02. Dominio Técnico" title="Stack Tecnológico"
          aside="Tecnologías usadas en proyectos en producción en Urbano Express, Maprosoft y Fénix Logistic." />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {skillGroups.map(group => (
            <div key={group.title} className="card p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between gap-2">
                <h3 className={`font-display text-headline-sm flex items-center gap-2 ${accentText[group.accent]}`}>
                  <span className="material-symbols-outlined">{group.icon}</span> {group.title}
                </h3>
              </div>
              <span className="font-mono text-label-sm text-outline uppercase -mt-2">{group.note}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(item => (
                  <span key={item} className="px-2.5 py-1 rounded-md bg-surface-container border border-surface-glass-border text-body-sm text-on-surface">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card p-space-lg flex flex-col gap-space-md">
          <h3 className="font-display text-headline-sm text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">construction</span> Infraestructura & Herramientas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
            {tools.map(tool => (
              <div key={tool.name} className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-body-sm text-on-surface">
                  <span className={`material-symbols-outlined ${accentText[tool.accent]}`}>{tool.icon}</span> {tool.name}
                </span>
                <span className={`font-mono text-label-sm font-bold whitespace-nowrap ${accentText[tool.accent]}`}>{tool.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
