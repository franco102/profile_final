export type LinkPortafolio = {
    url: string
    title: string
}

export type SocialNetwork = {
    url: string
    icon: string
    title: string
}

export type Accent = 'secondary' | 'tertiary' | 'primary' | 'amber'

export type SkillGroup = {
    title: string
    icon: string
    accent: Accent
    note: string
    items: string[]
}

export type Tool = {
    name: string
    icon: string
    accent: Accent
    tag: string
}

export type Role = {
    position: string
    date: string
    bullets: string[]
}

export type Job = {
    company: string
    date: string
    current: boolean
    accent: Accent
    roles: Role[]
    stack: string[]
}

export type Education = {
    title: string
    institution: string
    date: string
    icon: string
}

export type FeaturedSystem = {
    kicker: string
    badge: string
    title: string
    description: string
    accent: Accent
    icon: string
    stack: string[]
}

export type Portafolio = {
    img: string
    title: string
    description: string
    url: string
}

export type FormEmail = {
    name: string
    email: string
    subject: string
    message: string
    phone: string
}
