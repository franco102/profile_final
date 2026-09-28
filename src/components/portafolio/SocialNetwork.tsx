import { usePortafalioStore } from '../../store/portafolio.store'

export const SocialNetwork = () => {
  const socialNetworks = usePortafalioStore(state => state.socialNetworks)
  return (
    <div className="flex items-center gap-space-sm">
      {socialNetworks.map(s => (
        <a key={s.title} href={s.url} target="_blank" rel="noreferrer" aria-label={s.title} title={s.title}
          className="w-9 h-9 rounded-lg bg-surface-container-high border border-surface-glass-border flex items-center justify-center text-outline hover:text-secondary hover:border-secondary/60 transition-colors">
          <i className={s.icon} />
        </a>
      ))}
    </div>
  )
}
