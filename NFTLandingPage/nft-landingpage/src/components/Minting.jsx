import React from 'react';
import Topheading from "./Topheading";


/*Minting Process */
const Minting = () => {
    return (
        <div className="w-full  md:py20 bg-blue-50 p-6 md:py-20">
             <Topheading title={"Steps to Mint an NFT"}/>
             <div className="flex flex-wrap justify-center">
                
             <div className=" flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src="images/file-removebg-preview.png" alt="" class="h-20 m-6"/>
                <h2 class="text-center px-2 pb-5">Create The Digital File</h2>  
             </div>

             <div className=" flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src="images/funds-removebg-preview.png" alt="" class="h-20 m-6"/>
                <h2 class="text-center px-2 pb-5">Fund Your Crypto Wallet</h2>  
             </div>

             <div className=" flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src="images/waallet-removebg-preview.png" alt="" class="h-20 m-6"/>
                <h2 class="text-center px-2 pb-5">Connect The Wallet To A Marketplace</h2>  
             </div>

             <div className=" flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src="images/upload-removebg-preview.png" alt="" class="h-20 m-6"/>
                <h2 class="text-center px-2 pb-5">Upload The File</h2>  
             </div>

             <div className=" flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                <img src="images/market-removebg-preview.png" alt="" class="h-20 m-6"/>
                <h2 class="text-center px-2 pb-5">Put it up for Sale</h2>  
             </div>

            </div>    
        </div>
    );
}

export default Minting;
