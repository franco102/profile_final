import { Outlet } from 'react-router-dom'
import { Header } from '../components/app-layout/Header'
import { Footer } from '../components/app-layout/Footer'
import { ToastContainer } from 'react-toastify';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        theme="dark"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  )
}
