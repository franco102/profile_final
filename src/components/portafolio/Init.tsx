import { usePortafalioStore } from "../../store/portafolio.store"
import { SocialNetwork } from "./SocialNetwork"

 

export const Init = () => {
  const name=usePortafalioStore(state=>state.name)
  const lastname=usePortafalioStore(state=>state.lastname)
  return (  
    <div id="inicio" className="inicio" style={{backgroundImage:'linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1)),url(img/profile_bg.svg)'}}>
        <div className="contenido-banner mx-auto"> 
            <div className="contenedor-img">
                <img src="img/profile.jpg" alt="profile Franco" className="rounded-lg"/>
            </div>
            <h1 className="uppercase    text-3xl">{name+' '+lastname}</h1>
            <p className="sm:text-xs md:text-lg xs:text-xs">Ingeniero de Sistemas - Experto Full-Stack</p> 
            <SocialNetwork/>  
        </div>
    </div> 
  )
}
