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
        <div className="px-4 py-3 border-r-4 border-[#a8b98a] min-w-[140px]">
          <span
            className="text-[#8a9e6b] font-extrabold text-lg"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            Messages:
          </span>
        </div>

        {/* Active conversation header */}
        <div className="flex items-center gap-3 px-4 py-3 flex-1">
          <span className="text-2xl">{selected.emoji}</span>
          <span
            className="text-[#8a9e6b] font-extrabold text-xl"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            {selected.name} - {selected.item}
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="px-4 py-3 text-[#8a9e6b] hover:bg-[#c4d4a0] transition-colors font-bold text-lg"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex" style={{ minHeight: "260px" }}>
        {/* Sidebar - conversation list */}
        <div className="border-r-4 border-[#a8b98a] min-w-[140px] flex flex-col">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelected(conv)}
              className={`flex items-center justify-between px-4 py-3 border-b-2 border-[#a8b98a] text-left transition-colors font-extrabold text-[#4a5a30]
                ${selected.id === conv.id ? "bg-[#c4d4a0]" : "hover:bg-[#dde8c4]"}`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <span>{conv.name}</span>
              <div className="flex items-center gap-1">
                {conv.unread > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
                {selected.id === conv.id && (
                  <span className="text-[#8a9e6b]">→</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex flex-col flex-1">
          {/* Messages */}
          <div className="flex-1 flex flex-col gap-3 p-4 overflow-y-auto">
            <p
              className="text-center text-[#a8b98a] text-sm font-bold"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {selected.date}
            </p>

            {selected.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.fromMe ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[#8a9e6b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">👤</span>
                </div>

                {/* Bubble */}
                <div
                  className={`rounded-2xl px-4 py-2 max-w-[60%] text-sm font-semibold text-[#4a5a30]
                    ${msg.fromMe ? "bg-[#8a9e6b] text-white" : "bg-[#dde8c4]"}`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {msg.text}
                </div>

                {/* Time */}
                <div
                  className="text-xs text-[#a8b98a] self-end font-bold flex flex-col"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <span>{msg.fromMe ? "sent" : "recv"}</span>
                  <span>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 border-t-4 border-[#a8b98a] px-3 py-2">
            <button className="text-[#8a9e6b] text-xl hover:opacity-70 transition-opacity">
              📎
            </button>
            <input
              className="flex-1 border-2 border-[#a8b98a] rounded-xl px-3 py-2 bg-[#f0ede3] outline-none text-[#4a5a30] font-semibold text-sm"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              placeholder={`Message ${selected.name}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-[#8a9e6b] text-white border-2 border-[#a8b98a] rounded-xl px-4 py-2 font-bold text-lg hover:bg-[#6b7d52] transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}