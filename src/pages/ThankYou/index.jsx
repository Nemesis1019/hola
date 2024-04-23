import { NavBar } from '../../components/Nav_bar'
import { Navbarmobile } from '../../components/Nav_bar_mobile'
import icon_waze from '../../assets/icon_waze.png'

import jauria_mack from '../../assets/jauria_mack.png'
import data from "../../data/data.json"
import thankspage_bg from "../../assets/thankspage_bg.webp"

import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useMediaQuery } from "@mui/material"

import './index.css'


export function Thankyou(){
    
    return(
      <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center filtro-imagen" style={{backgroundImage: `url(${thankspage_bg})`,preload:true}}></div>
            <div className="relative z-10 bg-cover bg-center">
              <div className="flex flex-col justify-between items-center h-screen ">
                {useMediaQuery('(min-width: 650px)')?<NavBar/>:<Navbarmobile/>}
                <div className="w-full h-auto flex flex-col items-center  gap-5 ">
                  <div className="font-extrabold text-white text-[15px] sm:text-[25px] md:text-[40px]  ">
                        {data.thankspage.thanks}
                  </div>
                  <div className="w-[80%] md:w-[45%]  flex flex-col justify-center items-center text-white ">
                      <p className="text-center text-bold text-[12px] md:text-[16px]">
                        {data.thankspage.address}
                      </p>
                  </div>
                  <div className="flex flex-col w-[80%] md:w-[35%] gap-2">
                    <hr className="border-t border-white border-2 w-[100%]"/>
                    <div className="flex  items-center justify-between  w-full  gap-2 ">
                      <figure className="bg-white rounded-full w-[39px] h-[39px] flex justify-center items-center cursor-pointer">
                          <CiLocationOn color="black" size="32px"/>
                      </figure>
                      <h1 className="font-extrabold text-[16px] md:text-[24px] text-white ">
                        {data.thankspage.reward}
                      </h1>
                      <figure className="flex justify-center items-center md:w-[10%] md:h-[10%] cursor-pointer">
                        <img src={icon_waze} alt='icon_waze.png'/>
                      </figure>
                    </div>
                    <hr className="border-t border-white border-2 w-[100%]"/>
                  </div>
                    
                  <div className="bg-red h-auto  w-[80%] md:w-[64%] flex flex-col justify-center items-center"> 
                    <p className="text-white font-sans text-xs md:text-[16px] w-[90%] text-center my-[12px]">
                      {data.thankspage.advice}
                    </p>
                  </div>

                  <figure className="w-[70%] md:w-[30%] mb-6">
                    <img src={jauria_mack} alt="jauria_mack.png"/>
                  </figure>
                </div>
                <div className="bg-golden w-screen h-[8%] flex justify-end items-center gap-2  ">
                  <figure className="rounded-full border-2 w-[33px] h-[33px] border-white flex justify-center items-center cursor-pointer">
                    <FaFacebookF color="white" size="18px" />
                  </figure>
                  <figure className="rounded-full border-2 w-[33px] h-[33px] border-white flex justify-center items-center cursor-pointer">
                    <FaInstagram color="white" size="18px"/>
                  </figure>
                  <figure className="rounded-full border-2 w-[33px] h-[33px] mr-[8%] border-white flex justify-center items-center cursor-pointer">
                      <FaYoutube color="white" size="18px"/>
                  </figure>        
                </div>
              </div>
            </div>
      </div>
      
        
        
        
        
        
    )
}