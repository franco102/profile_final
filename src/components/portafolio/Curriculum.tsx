import { usePortafalioStore } from "../../store/portafolio.store"
import { CardCurriculum } from "./curriculum/CardCurriculum"

export const Curriculum = () => {
    const curriculum=usePortafalioStore(state=>state.curriculum)
  return (
    <div id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    {
                        curriculum.filter(education=>education.type==='education').map((education,index)=><CardCurriculum item={education} key={index}/>)
                    }
                    
                </div>

                <div className="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    {
                        curriculum.filter(job=>job.type==='job').map((job,index)=><CardCurriculum item={job} key={index}/>)
                    }
                </div>
            </div>
        </div>
    </div >
  )
}
