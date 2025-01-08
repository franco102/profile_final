import { usePortafalioStore } from "../../store/portafolio.store"
import { SocialNetwork } from "../portafolio/SocialNetwork"

 

export const Footer = () => {
  const name=usePortafalioStore(state=>state.name)
  const lastname=usePortafalioStore(state=>state.lastname)
  return (
    <footer>
        <a href="#inicio" className="arriba">
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <SocialNetwork/>
        <div className="flex justify-center mb-4">
          <span className="text-white font-extrabold">Copyright &copy; <strong className="current-year">{new Date().getFullYear()}</strong>, Diseñado &amp; Desarrollado <strong>by</strong> {name+' '+lastname} </span>
        </div>
    </footer>
  )
}
