import React from "react";


const socialClass =
  "w-10 h-10 border-2 text-sm flex-colo text-whites mx-2 border-pink rounded-full";

function Subs() {
  return (
    <div className="my-12">
      
      <div className="mt-12">
        <div className="flex overflow-hidden bg-subMain border rounded border-whites">
          <input
            type="email"
            className="bg-subMain w-4/6 md:w-5/6 px-6 sm:py-5 py-3 text-pink placeholder:text-lightBlack"
            placeholder="E-mail"
          />
          <button className="w-2/6 md:w-1/6 bg-whites text-pink font-bold text-sm rounded">
            Send
          </button>
        </div>
        <p className="font-medium text-sm text-center italic text-lightBlack mt-3">
          By sending us your email you will get notfication when new NFT drops
        </p>
        <div className="flex-rows mt-6 pb-12">
          <a href="https://github.com/Mililani" className={socialClass}>
          <i class="fab fa-github"></i>
          </a>
          <a href="https://t.me/mililani_rakhetsi" className={socialClass}>
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="https://m.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w" className={socialClass}>
          <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Subs
