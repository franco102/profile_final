import { Init } from '../components/portafolio/Init'
import { About } from '../components/portafolio/About'
import { Skills } from '../components/portafolio/Skills'
import { Curriculum } from '../components/portafolio/Curriculum'
import { Contact } from '../components/portafolio/Contact'
import { Portafolio } from '../components/portafolio/Portafolio'

export const PortafolioView = () => {
  return (
    <>
      <Init/>
      <About/>
      <Skills/>
      <Curriculum/>
      <Portafolio/>
      <Contact/>
    </>
  )
}
