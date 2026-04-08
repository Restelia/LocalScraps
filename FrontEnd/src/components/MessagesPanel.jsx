import { useState } from "react";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Carlos",
    item: "Cauliflower",
    emoji: "🥦",
    unread: 0,
    date: "3/12/2026",
    messages: [
      {
        id: 1,
        text: "Hi, I was wondering if I could pick up the carrot peels today at 4?",
        time: "10:45am",
        fromMe: false,
      },
    ],
  },
  {
    id: 2,
    name: "John",
    item: "Potato Peels",
    emoji: "🥔",
    unread: 1,
    date: "3/12/2026",
    messages: [
      {
        id: 1,
        text: "Hey! Is the listing still available?",
        time: "11:00am",
        fromMe: false,
      },
    ],
  },
];

export default function MessagesPanel({ onClose }) {
  const [selected, setSelected] = useState(CONVERSATIONS[0]);
  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState(CONVERSATIONS);

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMsg = { id: Date.now(), text: input, time, fromMe: true };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === selected.id ? { ...c, messages: [...c.messages, newMsg] } : c
      )
    );
    setSelected((prev) => ({ ...prev, messages: [...prev.messages, newMsg] }));
    setInput("");
  };

  return (
    <div className="border-4 border-[#a8b98a] rounded-2xl overflow-hidden mb-4 bg-[#f0ede3]">
      {/* Top bar */}
      <div className="flex items-center border-b-4 border-[#a8b98a]">
        {/* Messages label */}
        <div className="px-6 py-6 border-r-4 border-[#a8b98a] min-w-[160px]">
          <span
            className="text-[#8a9e6b] font-extrabold text-2xl"
            style={
              { 
                fontFamily: "'Luckiest Guy', cursive",
                lineHeight: "40px", // vertically center text
              }
            }
          >
            Messages:
          </span>
        </div>

        {/* Active conversation header */}
        <div className="flex items-center gap-4 px-6 py-6 flex-1">
          <span className="text-3xl">{selected.emoji}</span>
          <span
            className="text-[#8a9e6b] font-extrabold text-2xl"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            {selected.name} - {selected.item}
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="px-6 py-6 text-[#8a9e6b] hover:bg-[#c4d4a0] transition-colors font-bold text-2xl border-0"
          style={{ marginRight: "0.5rem", fontSize: "1.25rem" }}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex" style={{ minHeight: "325px" }}>
        {/* Sidebar - conversation list */}
        <div className="border-r-4 border-[#a8b98a] min-w-[160px] flex flex-col">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelected(conv)}
              className={`flex items-center justify-between px-5 py-6 border-b-2 border-[#a8b98a] text-left transition-colors font-extrabold text-lg
                ${selected.id === conv.id ? "bg-[#c4d4a0]" : "hover:bg-[#dde8c4]"}`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <span>{conv.name}</span>
              <div className="flex items-center gap-2">
                {conv.unread > 0 && (
                  <span className="bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
                {selected.id === conv.id && (
                  <span className="text-[#8a9e6b] text-lg">→</span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {/* Chat area */}
        <div className="flex flex-col flex-1">
          {/* Messages */}
          <div className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto">
            <p
              className="text-center text-[#a8b98a] text-base font-bold mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {selected.date}
            </p>

            {selected.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-4 ${msg.fromMe ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#8a9e6b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">👤</span>
                </div>

                {/* Bubble */}
                <div
                  className={`flex items-end justify-between max-w-[70%] rounded-3xl px-5 py-4 text-base font-semibold
                    ${msg.fromMe ? "bg-[#8a9e6b] text-white" : "bg-[#dde8c4] text-[#4a5a30]"}`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {/* Message text */}
                  <div className="flex-1 pr-3">{msg.text}</div>

                  {/* Time */}
                  <div className="text-xs text-[#a8b98a] font-bold flex-shrink-0">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Input bar */}
          <div className="flex items-center gap-3 border-t-4 border-[#a8b98a] px-4 py-4">
            {/* Attachment button */}
            <button
              className="text-[#8a9e6b] text-3xl hover:opacity-70 transition-opacity flex items-center justify-center"
              style={{
                height: "40px",   // same as input and send button
                width: "40px",    // make it square
              }}
            >
              📎
            </button>

            {/* Message input */}
            <input
              className="flex-1 border-2 border-[#a8b98a] rounded-xl px-5 text-[#4a5a30] font-semibold text-2xl"
              style={{
                fontFamily: "'Nunito', sans-serif",
                height: "40px",        // match height
                fontSize: "1.1rem",
              }}
              placeholder={`Message ${selected.name}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Send button */}
            <button
              onClick={sendMessage}
              className="bg-[#8a9e6b] text-white border-2 border-[#a8b98a] rounded-xl font-bold text-2xl hover:bg-[#6b7d52] transition-colors"
              style={{
                height: "40px",        // match height
                width: "60px",         // square shape
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}