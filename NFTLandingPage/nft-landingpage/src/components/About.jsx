import React from 'react';
import ima from "./images/—Pngtree—nft cyberpunk robot machine monster_8818241.png";


const About = () => {
    return (
        <div className=" lg:grid grid-cols-2 gap-3 items-center">
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
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Cyber Punk </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>

    </div>
    
  </div>
    );
}

export default About;
