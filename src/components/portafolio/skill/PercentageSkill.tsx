import { Skills } from "../../../type"

type PercentageSkillProps ={
    skill:Skills
}

export const PercentageSkill = ({skill}:PercentageSkillProps) => {
  return (
    <div className="skill" key={skill.name}>
        <span>{skill.name}</span>
        <div className="barra-skill">
            <div className="progreso" style={{ '--width': `${skill.percentage}%` } as React.CSSProperties}>
                <span>{skill.percentage}%</span>
            </div>
        </div>
    </div>
  )
}
