import { Job } from "../../../type"
import { accentBorder, accentSoftBg, accentText } from "../../ui/accent"

type CardCurriculumProps = {
  job: Job
}

export const CardCurriculum = ({ job }: CardCurriculumProps) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-space-md pl-10 md:pl-0">
      <div className="md:w-1/2 md:pr-10 md:text-right flex flex-col items-start md:items-end gap-1">
        <span className={`px-space-sm py-1 rounded font-mono text-label-sm font-bold uppercase tracking-wider ${job.current ? accentSoftBg[job.accent] : 'bg-surface-container-high text-outline'}`}>
          {job.date}{job.current && ' · Activo'}
        </span>
        <h3 className="font-display text-headline-sm md:text-headline-md text-on-surface mt-1">{job.company}</h3>
        <span className={`font-mono text-label-md ${accentText[job.accent]}`}>{job.roles.map(r => r.position.split(' · ')[0]).join(' / ')}</span>
      </div>

      <div className={`absolute left-2 md:left-1/2 top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-surface border-4 z-10 ${accentBorder[job.accent]}`} />

      <div className="md:w-1/2 md:pl-10 w-full">
        <div className="card p-space-md md:p-space-lg flex flex-col gap-space-md">
          {job.roles.map(role => (
            <div key={role.position} className="flex flex-col gap-space-xs">
              {(job.roles.length > 1 || role.position.includes(' · ')) && (
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className={`font-display text-title-md ${accentText[job.accent]}`}>{role.position}</span>
                  {role.date && <span className="font-mono text-label-sm text-outline">{role.date}</span>}
                </div>
              )}
              <ul className="flex flex-col gap-1.5">
                {role.bullets.map(b => (
                  <li key={b} className="flex gap-2 text-body-sm md:text-body-md text-on-surface-variant">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-current ${accentText[job.accent]}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {job.stack.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-space-sm border-t border-surface-container-high">
              {job.stack.map(s => <span key={s} className="chip text-outline">{s}</span>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
