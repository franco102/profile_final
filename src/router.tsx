import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { AppLayout } from './layout/AppLayout'
import { PortafolioView } from './views/PortafolioView'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<PortafolioView />} index /> 
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}