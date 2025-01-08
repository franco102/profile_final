import { usePortafalioStore } from "../../store/portafolio.store"

 

export const Header = () => {
    const name=usePortafalioStore(state=>state.name)
    const mostrarOcultarMenu=usePortafalioStore(state=>state.mostrarOcultarMenu)
    const seleccionar=usePortafalioStore(state=>state.seleccionar)
    const listLink=usePortafalioStore(state=>state.listLink)
  return (
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#">{name}</a>
            </div>
            <nav id="nav">
                <ul>
                    {
                        listLink.map(Link=>
                        (<li key={Link.url}><a href={`#${Link.url}`} onClick={seleccionar}>{Link.title}</a></li>)
                        )
                    } 
                </ul>
            </nav>
            <div className="nav-responsive"  onClick={mostrarOcultarMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>
  )
}
