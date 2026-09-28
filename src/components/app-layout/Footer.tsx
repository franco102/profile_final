import { usePortafalioStore } from "../../store/portafolio.store"
import { SocialNetwork } from "../portafolio/SocialNetwork"

export const Footer = () => {
  const name = usePortafalioStore(state => state.name)
  const lastname = usePortafalioStore(state => state.lastname)
  const listLink = usePortafalioStore(state => state.listLink)
  const email = usePortafalioStore(state => state.email)

  return (
    <footer className="w-full bg-surface border-t border-surface-glass-border">
      <div className="max-w-site mx-auto px-gutter py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl">
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-surface-container-high border border-surface-glass-border text-secondary font-mono text-label-sm font-bold">&gt;_</span>
              <span className="font-display text-headline-sm text-on-surface">{name} {lastname}</span>
            </div>
            <p className="text-body-sm text-on-surface-variant max-w-md">
              Desarrollador Full Stack y Analista de Base de Datos. APIs REST, modernización de datos y despliegue en la nube.
            </p>
            <span className="inline-flex items-center gap-1.5 w-fit px-space-sm py-space-xs rounded bg-surface-container-high border border-surface-glass-border font-mono text-label-sm text-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />DISPONIBLE
            </span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-md text-on-surface uppercase tracking-wider">Navegación</span>
            {listLink.map(l => (
              <a key={l.url} href={`#${l.url}`} className="text-body-sm text-outline hover:text-secondary transition-colors">{l.title}</a>
            ))}
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-label-md text-on-surface uppercase tracking-wider">Redes</span>
            <a href={`mailto:${email}`} className="text-body-sm text-outline hover:text-secondary transition-colors break-all">{email}</a>
            <SocialNetwork />
          </div>
        </div>
        <div className="pt-space-lg border-t border-surface-glass-border/60 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <p className="font-mono text-label-sm text-outline">© {new Date().getFullYear()} {name} {lastname}</p>
          <a href="#inicio" className="font-mono text-label-sm text-outline hover:text-secondary flex items-center gap-1">
            Volver arriba <span className="material-symbols-outlined !text-[16px]">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
