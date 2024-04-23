import Group from "../../assets/Group.png"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function NavBar(){
    return(
        <div className="flex justify-between items-center relative  bg-black  h-[14%]  w-full">
            <div className="cursor-pointer ml-[8%]">
                <Link to="/">
                    <img src={Group} alt="Logo.png"/>
                </Link>
                
            </div>
            <div className="flex  items-center justify-between  mr-[8%] w-[30%]">
                <Link to="/">
                    <h1 className="text-white font-extrabold text-[14px] cursor-pointer ">REGÍSTRATE</h1>
                </Link>
                
                <div className="flex gap-2 mr-2">

                    <figure className="rounded-full border-2 w-[33px] h-[33px] border-golden flex justify-center items-center cursor-pointer">
                        <FaFacebookF color="#84754E" />
                    </figure>

                    <figure className="rounded-full border-2 w-[33px] h-[33px] border-golden flex justify-center items-center cursor-pointer">
                        <FaInstagram color="#84754E" size="18px"/>
                    </figure>

                    <figure className="rounded-full border-2 w-[33px] h-[33px] border-golden flex justify-center items-center cursor-pointer">
                        <FaYoutube color="#84754E" size="18px"/>
                    </figure>
                      
                </div>
            </div>
        </div>
    )
}