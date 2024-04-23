import Group from "../../assets/Group.png"

import { Link } from 'react-router-dom';

export function Navbarmobile(){
    return(
        <div className="flex justify-between items-center bg-black  h-[14%]  w-screen ">
            <div className="cursor-pointer ml-[8%] w-[40%] md:w-[80%]">
                <img src={Group} alt="Logo.png"/>
            </div>
            <div className="flex  items-center justify-between mr-[5%]  ">
                <Link to="/">
                    <button className="text-white font-extrabold text-[14px] cursor-pointer ">REGÍSTRATE</button>
                </Link>
            </div>
        </div>
    )
}