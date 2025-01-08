import { usePortafalioStore } from '../../store/portafolio.store'

export const SocialNetwork = () => {
  const socialNetworks=usePortafalioStore(state=>state.socialNetworks)
  return (
    <div className="redes">
          {
            socialNetworks.map(socialNetwork=>
            (<a key={socialNetwork.title} href={socialNetwork.url} target={socialNetwork.title}><i className={socialNetwork.icon}></i></a>)
            )
          } 
        </div>
  )
}
