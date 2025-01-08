import { usePortafalioStore } from "../../store/portafolio.store"
import { PercentageSkill } from "./skill/PercentageSkill"

 
export const Skills = () => {
  const skills=usePortafalioStore(state=>state.skills)
  return (
    <div className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila grid grid-cols-3">
                <div className="col col-span-3">
                    <h3>Technical Skills</h3>
                    <div className="grid gap-2 grid-cols-3 col-span-3">
                    {
                        skills.filter(technical=>technical.type==='technical').map((skill)=><PercentageSkill key={skill.name} skill={skill}/>)
                    } 

                    </div>
                </div>
                <div className="col col-span-3">
                    <h3>Professional Skills</h3>
                    {
                        skills.filter(professional=>professional.type==='professional').map(skill=><PercentageSkill key={skill.name} skill={skill}/>)
                    } 
                </div>
            </div>
        </div>
    </div>
  )
}
