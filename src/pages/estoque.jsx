import { Header } from "../components/header";
import SideBarEstoque  from "../components/produto/sidebar_estoque";
import { Produtos } from "../components/produto/produto_tabela";

export function Estoque() {
    return (
        <>
            <Header/>
            <div className="flex">
                <SideBarEstoque/>
                <Produtos/>
            </div>
        </>
    )
}