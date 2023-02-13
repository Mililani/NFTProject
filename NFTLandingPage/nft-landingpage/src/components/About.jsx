import React from 'react';
import ima from "./images/ape.png";


const About = () => {
    return (
   <div className=" lg:grid grid-cols-2 gap-3 items-center md:py-20">
     <div className="hero lg:block hidden">
      <img
        src={ima} 
        alt="Main"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="col-span-1 py-12  lg:py-0">
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>About</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>CryptoPunk</h1>
          <p>
          The CryptoPunks are 24x24 pixel art images, generated algorithmically.
           Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. 
          Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status (here's an example).
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><a href="https://www.larvalabs.com/cryptopunks">Learn more</a></button>
    </div>

    </div>
    
  </div>
    );
}

export default About;
