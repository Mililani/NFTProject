import React from 'react';
import { useState } from 'react';

/*Navigation */
const navMobile =
  "text-whites font-semibold tracking-widest text-sm my-6 lg:my-0 lg:mx-6 hover:text-blue transitione";
const Navbar = () => {
    
  const [show, setShow] = useState(true)
    return (
        <footer className="grid grid-cols-4 justify-center items-center relative">
        <a href="/" className="lg:col-span-1 col-span-2">
          <img src="/images/" alt="PunkLogo" className="w-32" />
        </a>
        <div className="col-span-2 flex lg:hidden justify-end">
          <button
            onClick={() => setShow(!show)}
            className={` bt-linear font-semibold text-whites text-md py-3 px-5 rounded`}
          >
            <i className={`${show ? "far fa-bars" : "far fa-times"}`}></i>
          </button>
        </div>
  
        <div
          className={`${
            show ? "hidden" : "block"
          } bgSmall left-0 px-4 right-0 absolute top-12 lg:px-0 lg:relative lg:top-0 lg:col-span-3 lg:flex gap-10 justify-end items-center`}
        >
          <ul className="lg:flex">
            <li className={navMobile}>
              <a href="google.com">HOME</a>
            </li>
            <li className={navMobile}>
              <a href="google.com">ABOUT US</a>
            </li>
            <li className={navMobile}>
              <a href="google.com">Market</a>
            </li>
          </ul>
          <button className="lg:border-0 border border-whites hover:skew-x-12 transitione bt-linear font-semibold text-whites text-sm py-3 px-8 rounded">
          <i class="fas fa-wallet"></i> CONNECT wallet
          </button>
        </div>
      </footer>
    );
}

export default Navbar;
