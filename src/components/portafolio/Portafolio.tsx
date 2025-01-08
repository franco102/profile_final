import { usePortafalioStore } from "../../store/portafolio.store"

 

export const Portafolio = () => {
    const portafolio=usePortafalioStore(state=>state.portafolio);
  return (
    <div id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                {
                    portafolio.map((porta,index)=>
                        <div className="proyecto" key={index}>
                            <a href={porta.url} target="_blank" >
                                <img src={porta.img} alt=""/>
                                <div className="overlay">
                                    <h3 style={{color:'white'}}>{porta.title}</h3>
                                    <p  style={{color:'white'}}>{porta.description}</p>
                                </div> 
                            </a>
                        </div>
                    )
                } 
            </div>
        </div>
    </div>
  )
}
