import { usePortafalioStore } from "../../store/portafolio.store"
import { SectionHeader } from "../ui/SectionHeader"
import { CardCurriculum } from "./curriculum/CardCurriculum"

export const Curriculum = () => {
  const jobs = usePortafalioStore(state => state.jobs)
  return (
    <section id="experiencia" className="w-full bg-surface-container-lowest py-space-xl md:py-16 dot-grid">
      <div className="max-w-site mx-auto px-gutter flex flex-col gap-space-lg">
        <SectionHeader kicker="// 03. Trayectoria en Producción" title="Experiencia Laboral" />
        <div className="relative flex flex-col gap-space-lg before:absolute before:top-4 before:bottom-4 before:left-2 md:before:left-1/2 before:w-0.5 before:bg-surface-container-highest">
          {jobs.map(job => <CardCurriculum key={job.company} job={job} />)}
        </div>
      </div>
    </section>
  )
}
