import React from 'react';
import ima from "./images/—Pngtree—a businessman wearing vr headsets_7650332.png";


const Landing = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-400 via-blue-900 to-gray-900 py-20 md:py-24 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 container mx-auto">
                <div className='flex flex-col gap-4'>
                    <h1 className=" text-3xl text-center md:text-left md:text-6xl  text-white">
                    Discovery{" "} 
                    <span className="underline decoration-solid">
                    Collect & Sell
                    </span>{" "} 
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600">Extraodinary</span> {" "}
                    <span className="underline decoration-solid">
                    NFTs
                    </span>  
                    </h1>
                    <p className="md:pt-2 px-2 md:text-2xl text-center  md:text-left "> 
                        theuhii iuiuyiuf ijiuuyy iuiuyiugog higyufugiugu iugiufugiui yuuuygiyg iufuy ut uyufutf  uguyfu yufuftu fufuf fyuff
                    </p>
                    <div className="flex justify-between w-3/4 px-5" >
                        <div className="text-white text-center">
                            <h1 className="text-xl md:text-3xl">
                                $5457
                            </h1>
                            <p className="text-sm md:text-base"> trade</p>
                        </div>
                        <div className="text-white text-center">
                            <h1 className="text-xl md:text-3xl">
                                $5457
                            </h1>
                            <p className="text-sm md:text-base"> trade</p>
                        </div>
                        <div className="text-white text-center">
                            <h1 className="text-xl md:text-3xl">
                                $5457
                            </h1>
                            <p className="text-sm md:text-base"> trade</p>
                        </div>
                    </div>
                </div>
                    <div className="animate-bounce hidden md:block ">
                    <img src={ima} alt="" />
                    </div>
                </div>
            </div>  
         
        </>
    );
}

export default Landing;
