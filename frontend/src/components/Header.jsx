export default function Header() {
  return (
    <div className="flex items-center justify-between border-4 border-[#a8b98a] rounded-2xl px-5 py-3 mb-3 bg-[#f0ede3]">
      <div className="flex-1" />
      <h1 className="flex-1 text-center text-4xl text-[#8a9e6b] tracking-widest" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        Local Scraps
      </h1>
      <div className="flex-1 flex justify-end">
        <button className="border-2 border-[#a8b98a] rounded-xl px-3 py-2 text-xl text-[#8a9e6b] hover:bg-[#c4d4a0] transition-colors">
          🔔
        </button>
      </div>
    </div>
  );
}