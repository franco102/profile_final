import { useState } from "react"
import { usePortafalioStore } from "../../store/portafolio.store"

export const Header = () => {
    const name = usePortafalioStore(state => state.name)
    const listLink = usePortafalioStore(state => state.listLink)
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-glass-border/60 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            <div className="h-20 max-w-site mx-auto px-gutter flex items-center justify-between gap-space-md">
                <a href="#inicio" className="flex items-center gap-space-sm" onClick={() => setOpen(false)}>
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container-high border border-surface-glass-border text-secondary font-display text-headline-sm shadow-[0_0_12px_rgba(76,215,246,0.2)]">&lt;/&gt;</span>
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-headline-sm text-on-surface tracking-tight">
                            {name} <span className="text-secondary font-mono text-label-sm font-normal">// dev</span>
                        </span>
                        <span className="font-mono text-label-sm text-outline tracking-wider uppercase mt-1">Ingeniero de Sistemas</span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-lowest/60 border border-surface-glass-border/40">
                    {listLink.map(link => (
                        <a key={link.url} href={`#${link.url}`}
                            className="px-space-md py-space-sm text-body-md font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors rounded-lg">
                            {link.title}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-space-sm">
                    <a href="#contacto"
                        className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm font-mono text-label-md bg-secondary text-on-secondary-fixed font-bold rounded-lg shadow-[0_0_16px_rgba(76,215,246,0.3)] hover:bg-secondary-container transition-all uppercase tracking-wide">
                        Contactar
                    </a>
                    <button type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}
                        className="lg:hidden w-10 h-10 rounded-lg bg-surface-container-high border border-surface-glass-border flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {open && (
                <nav className="lg:hidden border-t border-surface-glass-border/60 bg-surface/95 backdrop-blur-xl">
                    <ul className="max-w-site mx-auto px-gutter py-space-sm flex flex-col">
                        {listLink.map(link => (
                            <li key={link.url}>
                                <a href={`#${link.url}`} onClick={() => setOpen(false)}
                                    className="block py-3 text-body-md font-semibold text-on-surface-variant hover:text-secondary border-b border-surface-glass-border/40 last:border-0">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}
