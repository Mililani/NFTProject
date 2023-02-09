import React from 'react';
import { useState } from 'react';
import {BiMenu,BiArrowToTop} from "react-icons/bi";


const Navbar = () => {
 
    const [visible,setVisible]= useState(true)

    return (
        <nav className="bg-blue-300 px-2 sm:px-2 py-2.5">
            <div className="container flex flex-wrap items-center mx-auto justify-between">
                <a href className=" text-3xl line-through">NFT</a>
                 <div className="flex md:hidden md:order-2">
                    <button type="button " onClick={()=> setVisible(!visible)}>
                        {visible ? <BiMenu size={20}/> : <BiArrowToTop size={20}/>}
                    </button>
                 </div>
                 <div className={`${visible ? `hidden` : ``} justify-between  items-center w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-xl ">
                        <li className="py-2 md:py-0">
                            <a href="google.com" className="py-4 pr-6 pl-0 hover:opacity-80 transition-all">home</a> </li>
                        <li className="py-2 md:py-0"><a href="https://styled-icons.dev" className="py-4 pr-6 pl-0 hover:opacity-80 transition-all">About</a></li>
                        <li className="py-2 md:py-0"><a href="https://styled-icons.dev" className="py-4 pr-6 pl-0 hover:opacity-80 transition-all">Minting Process</a></li>
                        <li className="py-2 md:py-0"><a href="https://styled-icons.dev" className="py-4 pr-6 pl-0 hover:opacity-80 transition-all">Button</a></li>
                    </ul>
                 </div>
            </div>  
        </nav>
    );
}

export default Navbar;
