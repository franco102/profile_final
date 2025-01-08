 
import { Outlet } from 'react-router-dom'
import { Header } from '../components/app-layout/Header' 
import { Footer } from '../components/app-layout/Footer'
import { useEffect } from 'react';
import { usePortafalioStore } from '../store/portafolio.store';
import { ToastContainer } from 'react-toastify';

export const AppLayout = () => {
  const efectoHabilidades=usePortafalioStore(state=>state.efectoHabilidades)
  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', efectoHabilidades);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', efectoHabilidades);
    };
  }, []);
  return (
    <>
        <Header/> 
        <Outlet />
        <Footer/>
        <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
    </>
  )
}
