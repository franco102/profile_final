import { usePortafalioStore } from "../../store/portafolio.store"

export const About = () => {
    const name=usePortafalioStore(state=>state.name)
    const lastname=usePortafalioStore(state=>state.lastname)
    const birthday=usePortafalioStore(state=>state.birthday)
    const phone=usePortafalioStore(state=>state.phone)
    const email=usePortafalioStore(state=>state.email)
    const address=usePortafalioStore(state=>state.address)
    const position=usePortafalioStore(state=>state.position)
    const hobbies=usePortafalioStore(state=>state.hobbies)
  return (
    <div id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p className="text-justify"><span>Hola, soy {name+' '+lastname},</span>  desarrollador full-stack apasionado por crear soluciones innovadoras que combinan funcionalidad y diseño. Tengo experiencia desarrollando aplicaciones front-end y back-end, por lo que puedo abordar los proyectos desde una perspectiva amplia. Mi objetivo es trabajar en proyectos que involucren desafíos técnicos para poder crecer profesionalmente y agregar valor con mis habilidades.
            Me gusta aprender nuevas habilidades, trabajar en equipo y ser eficiente en la resolución de problemas complejos. para encontrar una manera. Siempre estoy buscando oportunidades para desarrollarme tanto técnica como personalmente y contribuir al éxito de los proyectos en los que estoy involucrado.</p>

            <div className="fila grid grid-cols-3">
                <div className="col columns-1 md:col-span-2 sm:col-span-3">
                    <h3>Datos Personales</h3>
                    <ul >
                        <li className="flex">
                            <strong>Cumpleaños:</strong>{birthday} 
                        </li>
                        <li className="flex">
                            <strong>Teléfono:</strong>{phone} 
                        </li>
                        <li className="flex">
                            <strong>Email:</strong> {email} 
                        </li> 
                        <li className="flex">
                            <strong >Dirección:</strong> <p  >{address} </p>
                        </li>
                        <li className="flex">
                            <strong>Cargo:</strong>
                            <span>{position}</span>
                        </li>
                    </ul>
                </div>
 
                <div className="col md:col-span-1  sm:col-span-3">
                    <h3 className="text-center">Intereses</h3>
                    <div className="contenedor-intereses grid gap-1 grid-cols-3 items-center justify-center">
                        {
                            hobbies.map(hobbie=>
                                (
                                    <div className="interes" key={hobbie.title}>
                                        <i className={hobbie.icon}></i>
                                        <span>{hobbie.title}</span>
                                    </div>
                                )
                            )
                        } 
                    </div>
                </div>
            </div>
            <a href="/files/CV_FINAL.pdf" download="cv.pdf">
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </a>
        </div>
    </div>
  )
}
