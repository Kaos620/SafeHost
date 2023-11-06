import { Header } from "../components/header";
import { MultiLevelSidebar } from "../components/sidebar";
import { ConteudoRegistrarDoador } from "./registrarDoador_Content";


export function RegistrarDoador() {
    return (
        <>
            <Header/>
            <div className="flex h-[92vh] w-auto">
                <MultiLevelSidebar />
                <ConteudoRegistrarDoador/>
            </div>
        </>
    )
}