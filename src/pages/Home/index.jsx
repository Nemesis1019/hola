import { NavBar } from '../../components/Nav_bar'
import homepage_bg from '../../assets/homepage_bg.png'
import years_mack from '../../assets/100years_mack.png'
import first_winners from '../../assets/first_winners.png'
import cap_image from '../../assets/cap_image.png'
import owner_mack from '../../assets/owner_mack.png'
import icon_card from '../../assets/icon_card.png'
import icon_gift from '../../assets/icon_gift.png'
import icon_discount from '../../assets/icon_discount.png'
import { Navbarmobile } from '../../components/Nav_bar_mobile'
import data from "../../data/data.json"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useMediaQuery } from "@mui/material"
import { Link } from 'react-router-dom';

export function Home (){

    return (
        
        <div id="principal_container" className="flex flex-col">
            {useMediaQuery('(min-width: 650px)')?<NavBar/>:<Navbarmobile/>}
            <div id="container_page1" >
                <div className="w-full relative h-screen bg-cover bg-no-repeat bg-left sm:bg-cover" style={{backgroundImage: `url(${homepage_bg})`}}>
                    <div className="relative h-[20%] top-[50%] inset-0 bg-cover bg-no-repeat bg-left  bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="bg-black absolute top-[69%] ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="flex flex-col justify-center items-center ml-7 gap-5 text-white">
                                <figure className="w-[90%]">
                                    <img src={owner_mack} alt="owner_mack.png"/>
                                </figure>
                                <p className="text-justify w-[90%] mb-[20px] mr-[5px]  text-[15px] md:text-[19px]">
                                    Este año estamos rindiendo tributo a nuestra marca 
                                    <strong> Mack la cual lleva 100 años rodando por las carreteras de Colombia </strong>
                                    y queremos hacerte parte de esta celebración.
                                </p>
                                <p className="text-justify w-[90%] mb-[20px] mr-[5px] text-[15px] md:text-[19px]">
                                    Si eres dueño de un camión Mack
                                    <strong> ¡YA GANASTE!, SOLO REGÍSTRATE Y RECLAMA TUS PREMIOS.</strong> 
                                </p>
                            </div>
                            <figure className="w-full flex justify-center items-center">
                                <img src={cap_image} className="w-[70%] " alt="gorra.png"/>
                            </figure>
                        </div>

                        <div id="container_page2" className="bg-gray flex flex-col  gap-[60px]  w-full h-full bg-cover bg-no-repeat ">
                            <div className="w-full flex flex-col items-center gap-[5px] mt-6  ">
                                <h1 className="font-extrabold text-[24px]  md:text-[42px]">
                                    {data.homepage.register}
                                </h1>
                                <h3 className="font-semibold text-[16px]" >
                                    {data.homepage.data}
                                </h3>
                                <h3>
                                    {data.homepage.person}
                                </h3>
                            </div>
                            <div className=" flex flex-col  md:grid md:grid-cols-2 ml-[5%] mr-[5%] gap-[5%]  ">
                                <div className="flex flex-col gap-[50px]">
                                    <figure>
                                        <img src={first_winners} alt="first_winners.png"/>
                                    </figure>
                                    <div className="flex flex-col gap-[25px]">
                                        <div className="flex gap-[4%]">
                                            <figure >
                                                <img src={icon_gift} alt='icon_gift.png'/>
                                            </figure>
                                            <p className="font-semibold text-letters_color text-[16px] ">*Una gorra emblemática Mack.</p>
                                        </div>
                                        <div className="flex gap-[4%]">
                                            <figure >
                                                <img src={icon_discount} alt='icon_discount.png'/>
                                            </figure>
                                            <p className="text-letters_color text-[16px] w-[85%] " >
                                                <strong>**25% dedescuento en repuestos instalados </strong> 
                                                en taller el día que reclames tu premio o 
                                                <strong> 15% de descuento en repuestos </strong>
                                                comprados por mostrador el día que reclames tu premio.
                                            </p>
                                        </div>
                                        <div className="flex gap-[4%]">
                                            <figure className="w-[50px] h-[25px]">
                                                <img  src={icon_card} alt='icon_card.png'/>
                                            </figure>
                                            <p className="font-semibold text-letters_color text-[16px] ">
                                                ***Una tarjeta de miembro Jauría Mack para acceder a descuentos especiales. (Aplica para el año 2023)
                                             </p>
                                        </div>
                                                
                                    </div>
                                    <figure className="w-full flex justify-center">
                                        <img className="w-[70%]" src={years_mack} alt="Logo.png"/>
                                    </figure>
                                    <div className="text-[11px]">
                                        <p className="font-extrabold"> 
                                            {data.homepage.only_colombia}
                                        </p>
                                        <p>
                                            {data.homepage.reward}
                                        </p>
                                    </div>        
                                </div>
                                <div className="flex flex-col  ">
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div className="flex flex-col gap-1 ">
                                            <label className="font-extrabold" htmlFor="name">Nombres *</label>
                                            <input id="name" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="font-extrabold" htmlFor="lastname">Apellidos *</label>
                                            <input id="lastname" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="font-extrabold" htmlFor="number">Número de Celular</label>
                                            <input id="number" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="font-extrabold" htmlFor="id_number">Cédula *</label>
                                            <input id="id_number" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div> 
                                    </div>
                                    <div className="flex flex-col gap-4 mt-2">
                                        <div className="flex flex-col gap-1">
                                                <label className="font-extrabold" htmlFor="truck">Placa del Camión *</label>
                                                <input id="truck" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                                <label className="font-extrabold" htmlFor="email">Correo electrónico *</label>
                                                <input id="email" className="border-2 border-golden bg-input_color h-[30px]"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                                <label className="font-extrabold" >¿En que taller deseas reclamar tu premio? *</label>
                                                <select className="border-2 border-golden bg-input_color h-[30px]">
                                                    <option value="default"></option>
                                                </select>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                                <label className="font-extrabold" htmlFor="terms">Autorización para el uso y tratamiento de datos e información personal</label>
                                                <textarea id="terms" className="border-2 border-golden text-letters_color text-justify bg-gray text-[9px] font-semibold pl-[12px] pr-[12px] pt-[5px]" rows="4" cols="40" defaultValue={data.homepage.text_area}></textarea>       
                                        </div>
                                    </div>
                                    
                                    <div className="flex  gap-[10%] items-center mt-[2%]">
                                        <div className="flex w-[110px]  gap-[5%]">
                                            <input id="agree" type="checkbox" className="border-2 border-goldenr bg-gris "/>
                                            <label className="font-bold text-golden" htmlFor="agree">Acepto</label>
                                        </div>
                                        <div className="flex w-[110px]  gap-[5%]">
                                            <input id="not_acept" type="checkbox" className="border-2 border-golden bg-gris rounded-full"/>
                                            <label className="font-bold text-golden" htmlFor="not_acept">No acepto</label>
                                        </div>
                                    </div>
                                    <Link to="/thanks" className="w-ful mt-[4%]">
                                        <button className="bg-black h-[35px] font-extrabold shadow-lg w-full text-white">ENVIAR</button>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="bg-golden flex justify-center gap-[5%] h-[23%] ">
                                <p className="text-[4px] md:text-[8px] w-[73%] text-white font-sans text-justify my-[8px]">
                                  {data.homepage.terms}
                                </p>
                                <div className="flex gap-2 mt-[4%] mr-[8%]">
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
                </div>
            </div>   
        </div>
    )
}