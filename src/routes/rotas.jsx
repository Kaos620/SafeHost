import { Route, Routes } from 'react-router-dom'

import { Doador } from '../pages/doador';
import { Estoque } from '../pages/estoque';
import { LogIn } from '../components/login/log_in';
import { Home } from '../pages/home';
import { Cliente } from '../pages/cliente';
import { DefaultLayout } from '../layout/layout';

export function AppRoutes() {

    return (
        // <AuthProvider>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path='/' element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/doador" element={<Doador />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/estoque" element={<Estoque />} />
                </Route>
            </Routes>
        // </AuthProvider>
    )
}