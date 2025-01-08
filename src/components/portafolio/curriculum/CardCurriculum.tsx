import { Curriculum } from "../../../type"

type CardCurriculumProps={
    item:Curriculum
}

export const CardCurriculum = ({item}:CardCurriculumProps) => {
  return (
    <div className={`item ${item.type==='education'?'izq':'der'}`}>
        <h4>{item.tittle}</h4>
        <span className="casa">{item.subTitle}</span>
        <span className="fecha">{item.date}</span>
        <p>{item.description}</p>
        <div className={item.type==='education'?'conectori':'conectord'}>
            <div className={item.type==='education'?'circuloi':'circulod'}></div>
        </div>
    </div> 
  )
}
