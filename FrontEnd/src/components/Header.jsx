import { useState } from "react";
import MessagesPanel from "./MessagesPanel";

export default function Header() {
  const [showMessages, setShowMessages] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between border-4 border-[#a8b98a] rounded-2xl px-5 py-3 mb-3 bg-[#f0ede3]">
        <div className="flex-1" />

        <h1
          className="flex-1 text-center text-4xl text-[#8a9e6b] tracking-widest"
          style={{ fontFamily: "'Luckiest Guy', cursive" }}
        >
          Local Scraps
        </h1>

        {/* Right side — now NOT touching the right wall */}
        <div className="flex-1 flex justify-end pr-3">
          <button
            onClick={() => setShowMessages(!showMessages)}
            className="
              relative 
              rounded-xl 
              border-0
              w-14 
              h-14 
              flex 
              items-center 
              justify-center 
              hover:bg-[#c4d4a0] 
              transition-colors
            "
          >
            {/* Bell */}
            <span className="text-[30px] leading-none">🔔</span>

            {/* Badge position */}
            <span
              className="
                absolute
                top-0
                right-0
                translate-x-1/2
                -translate-y-1/2
                bg-red-500 
                text-white 
                text-[10px] 
                font-bold 
                rounded-full 
                w-5 
                h-5 
                flex 
                items-center 
                justify-center
                shadow
              "
            >
              1
            </span>
          </button>
        </div>
      </div>

      {showMessages && (
        <MessagesPanel onClose={() => setShowMessages(false)} />
      )}
    </>
  );
}