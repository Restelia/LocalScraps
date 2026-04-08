export default function Navbar({ activePage, setActivePage }) {
  const pages = [
    { id: "shop", label: "Shop" },
    { id: "sell", label: "Sell" },
    { id: "user", label: "Profile" },
  ];

  return (
    <nav className="flex gap-4 mb-4 w-full">
      {pages.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActivePage(id)}
          className={`flex-1 rounded-2xl border-4 font-extrabold tracking-widest transition-colors
            ${
              activePage === id
                ? "bg-[#8a9e6b] text-white border-[#6b7d52]"
                : "bg-[#f0ede3] text-[#4a5a30] border-[#a8b98a] hover:bg-[#c4d4a0]"
            }`}
          style={{
            fontFamily: "'Luckiest Guy', cursive",
            fontSize: "1.5rem",     
            lineHeight: 1.1,          
            paddingTop: "1.25rem", 
            paddingBottom: "1.25rem", 
          }}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}