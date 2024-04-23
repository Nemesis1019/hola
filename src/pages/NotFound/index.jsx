import { useMediaQuery } from "@mui/material"
import { Navbarmobile } from '../../components/Nav_bar_mobile'
import { NavBar } from '../../components/Nav_bar'

export function Notfound(){
    return(
        <div className="flex flex-col w-full h-screen items-center ">
            {useMediaQuery('(min-width: 650px)')?<NavBar/>:<Navbarmobile/>}
            <h1 className="text-[60px] mt-[20%]">Page not found</h1>
        </div>
    )
}