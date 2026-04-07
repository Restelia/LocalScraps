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
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setShowMessages(!showMessages)}
            className="relative border-2 border-[#a8b98a] rounded-xl px-3 py-2 text-xl text-[#8a9e6b] hover:bg-[#c4d4a0] transition-colors"
          >
            🔔
            {/* Notification badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>

      {/* Messages Panel */}
      {showMessages && (
        <MessagesPanel onClose={() => setShowMessages(false)} />
      )}
    </>
  );
}