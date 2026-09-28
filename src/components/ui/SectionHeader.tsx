type SectionHeaderProps = {
    kicker: string
    title: string
    aside?: React.ReactNode
}

export const SectionHeader = ({ kicker, title, aside }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="flex flex-col gap-1">
                <span className="section-kicker">{kicker}</span>
                <h2 className="section-title">{title}</h2>
            </div>
            {aside && <div className="font-mono text-label-sm text-outline md:text-right max-w-md">{aside}</div>}
        </div>
    )
}
