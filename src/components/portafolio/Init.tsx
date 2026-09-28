import { usePortafalioStore } from "../../store/portafolio.store"

const heroStack = [
  { name: 'PostgreSQL', cls: 'text-secondary' },
  { name: 'Informix', cls: 'text-secondary' },
  { name: 'AWS Aurora', cls: 'text-code-amber' },
  { name: 'Docker', cls: 'text-code-amber' },
  { name: 'Kubernetes', cls: 'text-code-amber' },
  { name: 'Laravel', cls: 'text-tertiary' },
  { name: 'FastAPI', cls: 'text-tertiary' },
  { name: 'React / Next.js', cls: 'text-primary' },
  { name: 'MongoDB', cls: 'text-secondary' },
]

const metrics = [
  { value: '4+ años', label: 'Experiencia', cls: 'text-secondary' },
  { value: '2', label: 'Sectores: logística & minería', cls: 'text-tertiary' },
  { value: '13', label: 'Apps publicadas', cls: 'text-primary' },
]

export const Init = () => {
  const name = usePortafalioStore(state => state.name)
  const lastname = usePortafalioStore(state => state.lastname)
  const location = usePortafalioStore(state => state.location)
  const cvEs = usePortafalioStore(state => state.cvEs)
  const cvEn = usePortafalioStore(state => state.cvEn)

  return (
    <section id="inicio" className="relative w-full max-w-site mx-auto px-gutter py-space-xl md:py-16 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high w-fit shadow-md">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75 animate-ping" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-tertiary" />
            </span>
            <span className="font-mono text-label-sm text-tertiary uppercase tracking-widest font-semibold">Disponible para nuevas oportunidades</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-label-md text-secondary tracking-widest uppercase">Full Stack Developer // Database Analyst</span>
            <h1 className="font-display text-display-mobile md:text-display text-on-surface mt-2 tracking-tight">
              {name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary">{lastname}</span>
            </h1>
            <p className="font-display text-headline-sm text-on-surface-variant mt-3 font-medium">
              Ingeniero de Sistemas · Universidad Nacional del Callao (Tercio Superior)
            </p>
          </div>

          <p className="text-body-lg text-outline max-w-2xl">
            Desarrollo APIs REST, modernizo bases de datos y despliego en la nube. Actualmente lidero la migración de
            <span className="text-on-surface font-semibold"> Informix a PostgreSQL en AWS Aurora</span> en Urbano Express, e integro sistemas con
            <span className="text-on-surface font-semibold"> LG, Ripley y Mercado Libre</span>.
          </p>

          <div className="flex flex-wrap items-center gap-space-sm pt-2">
            <a href="#proyectos" className="inline-flex items-center gap-2 px-space-lg py-space-md rounded-xl bg-secondary text-on-secondary-fixed font-display text-headline-sm font-bold shadow-[0_0_24px_rgba(76,215,246,0.35)] hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined">terminal</span> Ver Proyectos
            </a>
            {[
              { href: cvEs, file: 'CV_Alan_Franco_Silva_ES.pdf', label: 'Descargar CV', lang: 'ES' },
              { href: cvEn, file: 'CV_Alan_Franco_Silva_EN.pdf', label: 'Download CV', lang: 'EN' },
            ].map(cv => (
              <a key={cv.lang} href={cv.href} download={cv.file}
                className="inline-flex items-center gap-2 px-space-lg py-space-md rounded-xl bg-surface-container-high border border-surface-glass-border text-on-surface font-display text-headline-sm font-semibold hover:bg-surface-container-highest hover:border-secondary/50 transition-all">
                <span className="material-symbols-outlined">download</span> {cv.label}
                <span className="font-mono text-label-sm text-secondary px-1.5 py-0.5 rounded bg-secondary/10">{cv.lang}</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-space-sm pt-space-md">
            {metrics.map(m => (
              <div key={m.label} className="p-space-md rounded-xl bg-surface-container-low border border-surface-glass-border/60 flex flex-col gap-1">
                <span className={`font-display text-headline-sm md:text-headline-md font-bold ${m.cls}`}>{m.value}</span>
                <span className="font-mono text-label-sm text-outline uppercase tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-surface-container-low border border-surface-glass-border/60 overflow-hidden shadow-2xl p-space-md">
            <div className="relative h-80 md:h-[26rem] w-full rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover object-top" src="/img/profile_2026.jpg" alt={`${name} ${lastname}`} />
              <div className="absolute bottom-3 left-3 right-3 p-space-sm rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="font-mono text-label-sm text-on-surface font-semibold">{location} // Remoto</span>
                </span>
                <span className="font-mono text-label-sm text-secondary tracking-widest">UTC-5</span>
              </div>
            </div>
            <div className="pt-space-md flex flex-wrap gap-1.5">
              {heroStack.map(s => <span key={s.name} className={`chip ${s.cls}`}>{s.name}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
