import { usePortafalioStore } from "../../store/portafolio.store"
import { SectionHeader } from "../ui/SectionHeader"

export const About = () => {
  const email = usePortafalioStore(state => state.email)
  const phone = usePortafalioStore(state => state.phone)
  const whatsapp = usePortafalioStore(state => state.whatsapp)
  const location = usePortafalioStore(state => state.location)
  const softSkills = usePortafalioStore(state => state.softSkills)
  const education = usePortafalioStore(state => state.education)

  return (
    <section id="sobre-mi" className="w-full bg-surface-container-lowest py-space-xl md:py-16 dot-grid">
      <div className="max-w-site mx-auto px-gutter flex flex-col gap-space-lg">
        <SectionHeader kicker="// 01. Perfil & Formación" title="Sobre Mí"
          aside={<>ESTADO: <span className="text-tertiary">ACTIVO EN PRODUCCIÓN · LOGÍSTICA & MINERÍA</span></>} />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-space-md">
          <div className="md:col-span-2 card p-space-lg flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined">badge</span>
                <span className="font-mono text-label-md font-bold uppercase">Perfil profesional</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Ingeniero de Sistemas con más de 4 años de experiencia como Desarrollador Full Stack y Analista de Base de Datos
                en los sectores logística y minería. Especializado en diseño de APIs REST, modelado y optimización de bases de
                datos relacionales y NoSQL, stored procedures, búsquedas vectoriales y modernización de datos.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Cubro el ciclo completo: backend, frontend, contenerización con Docker y Kubernetes, y despliegue en AWS y Azure con CI/CD.
              </p>
            </div>
            <div className="flex flex-col gap-space-sm pt-space-md border-t border-surface-container-high">
              {education.map(ed => (
                <div key={ed.title} className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">{ed.icon}</span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-space-sm">
                    <span className="text-body-sm text-on-surface font-semibold">{ed.title} <span className="text-outline font-normal">· {ed.institution}</span></span>
                    <span className="font-mono text-label-sm text-outline whitespace-nowrap">{ed.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-space-lg flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-md">
              <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Datos de contacto</span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-label-sm text-outline">Email</span>
                <a className="text-body-sm text-secondary font-medium break-all hover:underline" href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-label-sm text-outline">Teléfono / WhatsApp</span>
                <a className="text-body-sm text-tertiary font-bold hover:underline" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">{phone}</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-label-sm text-outline">Ubicación</span>
                <span className="text-body-sm text-on-surface">{location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-label-sm text-outline">Idiomas</span>
                <span className="text-body-sm text-on-surface">Español (nativo) · Inglés (avanzado, en curso)</span>
              </div>
            </div>
            <a className="w-full py-space-sm rounded-lg bg-tertiary text-on-tertiary font-mono text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-tertiary-fixed transition-colors"
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola Alan, vi tu portafolio y me gustaría conversar.')}`} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp" /> Escribir por WhatsApp
            </a>
          </div>

          <div className="card p-space-lg flex flex-col gap-space-sm">
            <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Competencias</span>
            <div className="flex flex-col gap-2">
              {softSkills.map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2 rounded-lg bg-surface-container text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary !text-[18px]">{s.icon}</span> {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
