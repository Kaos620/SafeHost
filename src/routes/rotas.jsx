import { Route, Routes } from 'react-router-dom'
import { Doacoes } from '../components/produto/doacao_tabela';
import { Doador } from '../pages/doador';
import { Estoque } from '../pages/estoque';
import { LogIn } from '../components/login/log_in';
import { Home } from '../pages/home';
import { Cliente } from '../pages/cliente';
import { DefaultLayout } from '../layout/layout';
import { Cadastrar } from '../components/login/registrar';

export function AppRoutes() {

    return (
        // <AuthProvider>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/cadastrar_usuario" element={<Cadastrar/>}/>
                <Route path='/' element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/doador" element={<Doador />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/estoque" element={<Estoque />} />
                    <Route path ="/doacao" element= {<Doacoes/>}/>
                </Route>
            </Routes>
        // </AuthProvider>
    )
}