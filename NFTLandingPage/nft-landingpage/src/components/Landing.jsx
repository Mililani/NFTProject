import React from 'react';
import CountDown from './CountDown';
import ima from "./images/Redlock-removebg-preview.png";


/*Home Page */
const Landing = () => {
    return (
        <div className=" lg:grid grid-cols-2 gap-3 items-center">
          <div className="col-span-1 py-12  lg:py-0">
                <h1 className="2xl:text-5xl lg:text-4xl sm:text-5xl  text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-head text-whites tracking-wide">
                     Discover, collect <br />
                    <span className="text-pink">and sell CryptoPunk CryptoArt </span>
                     <span className="text-blue"> NFTs</span>
                </h1>
                     <p className="font-medium text-lightBlack mt-3">
                         The world's  and largest digital marketplace were one can 
                         obtain CyberPunks unique   non- fungible tokens (NFTs)  CryptoArts.
                     </p>
          <div className="flex-colo w-full sm:w-3/5 border border-whites py-6 px-6 bg-subMain rounded mt-10">
            <h2 className="italic font-semibold text-blue">
              Next nft minting in!!
            </h2>
            <button className="lg:border-0 border border-whites hover:skew-x-12 transitione bt-linear font-semibold text-whites text-sm py-3 px-8 rounded">
            Mint
            </button>
            <CountDown/>
          </div>
        </div>
        <div className="hero lg:block hidden">
          <img
            src={ima} 
            alt="Main"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
}

export default Landing;
