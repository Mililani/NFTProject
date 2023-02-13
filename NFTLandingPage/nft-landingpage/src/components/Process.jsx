import React from 'react';
import OwlCarousel from "react-owl-carousel";
import Topheading from "./Topheading";



const TopNfts = [
    {
      id: "1",
      name: "Ape Gon",
      price: "ETH 9.31",
      image: "/images/2Ape.png",
    },
    {
      id: "2",
      name: "Killua",
      price: "ETH 12.31",
      image: "/images/cryptopunk.png",
    },
    {
      id: "3",
      name: "Pixel Mint",
      price: "ETH 19.01",
      image: "/images/images.png",
    },
    {
      id: "4",
      name: "Lava Labs",
      price: "ETH 0.41",
      image: "/images/lavaLabs.jpg",
    },
    {
      id: "5",
      name: "Easy loi",
      price: "ETH 1.31",
      image: "/images/Redlock.jpg",
    },
    {
      id: "6",
      name: "Roberto Li",
      price: "ETH 12.31",
      image: "/images/Rober.png",
    },
    {
      id: "7",
      name: "Hoodling ",
      price: "ETH 89.01",
      image: "/images/UnderHod.png",
    },
    {
      id: "8",
      name: "White Emmie",
      price: "ETH 0.41",
      image: "/images/wjit.png",
    },
  ];






const Process = () => {


/*NFt OwlCarousel Page */
    return (
        <div className="my-12 md:py-20 ">
        <Topheading title={"TOP CyberPunk Animal NFTs"}/>
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay={true}
          autoplaySpeed={2000}
          smartSpeed={1000}
          autoplayTimeout={3000}
          responsive={{
            0: {
              margin: 2,
              items: 1,
            },
            640: {
              items: 2,
              margin: 10,
            },
            1024: {
              items: 3,
              margin: 20,
            },
            1536: {
              items: 4,
              margin: 30,
            },
          }}
        >
          {TopNfts.map((t) => (
            <div
              key={t.id}
              className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
            >
              <div className="relative w-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-64 object-cover"
                />
                <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                  <h2 className="font-semibold text-whites">{t.name}</h2>
                  <div className="mt-2 text-lg font-black tracking-wider text-whites">
                    {t.price}
                  </div>
                </div>
              </div>
  
              <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
                Read More
              </button>
            </div>
          ))}
        </OwlCarousel>
      </div>

 );
}

export default Process;
