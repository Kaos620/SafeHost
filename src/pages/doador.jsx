import { Header } from "../components/header";
import { SideBarPessoa } from "../components/pessoa/sidebar_pessoa";
import { Doadores } from "../components/pessoa/doador_tabela";

export function Doador() {
    return (
        <>
            <Header/>
            <div className="flex">
                <SideBarPessoa />
                <Doadores/>
            </div>
        </>
    )
}