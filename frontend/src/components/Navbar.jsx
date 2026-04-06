export default function Navbar({ activePage, setActivePage }) {
  const pages = ["shop", "sell", "user"];

  return (
    <nav className="flex gap-3 mb-3">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={`flex-1 py-3 border-4 border-[#a8b98a] rounded-2xl text-lg tracking-widest transition-colors capitalize
            ${activePage === page
              ? "bg-[#8a9e6b] text-white"
              : "bg-[#f0ede3] text-[#4a5a30] hover:bg-[#c4d4a0]"
            }`}
          style={{ fontFamily: "'Luckiest Guy', cursive" }}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}