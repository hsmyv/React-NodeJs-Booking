import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({isIndex}){
    return (
        <div className={`py-4 px-8 flex flex-col min-h-screen ${isIndex ? '' : 'max-w-4xl'} mx-auto`}>
            <Header/>
            <Outlet/>

        </div>
    )
}