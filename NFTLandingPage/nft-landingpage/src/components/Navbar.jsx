import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-300 px-2 sm:px-2 py-2.5">
            <div className="container flex flex-wrap items-center mx-auto justify-between">
                <a href className=" text-3xl line-through">Nft</a>
                 <div className="flex md:hidden md:order-2">
                    <button type="button">
                        add icon
                    </button>
                 </div>
            </div>  
        </nav>
    );
}

export default Navbar;
