import { Accent } from "../../type"

// Clases completas para que Tailwind las detecte en el build.
export const accentText: Record<Accent, string> = {
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    primary: 'text-primary',
    amber: 'text-code-amber',
}

export const accentBorder: Record<Accent, string> = {
    secondary: 'border-secondary shadow-[0_0_12px_rgba(76,215,246,0.7)]',
    tertiary: 'border-tertiary shadow-[0_0_12px_rgba(78,222,163,0.7)]',
    primary: 'border-primary shadow-[0_0_12px_rgba(192,193,255,0.6)]',
    amber: 'border-code-amber shadow-[0_0_12px_rgba(245,158,11,0.6)]',
}

export const accentSoftBg: Record<Accent, string> = {
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-tertiary',
    primary: 'bg-primary/10 text-primary',
    amber: 'bg-code-amber/10 text-code-amber',
}

export const accentHover: Record<Accent, string> = {
    secondary: 'group-hover:text-secondary',
    tertiary: 'group-hover:text-tertiary',
    primary: 'group-hover:text-primary',
    amber: 'group-hover:text-code-amber',
}
