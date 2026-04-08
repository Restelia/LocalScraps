import { useState } from "react";
import FoodCard from "../components/FoodCard";

const ITEMS = [
  { id: 1, name: "Cauliflower", emoji: "🥦", description: "Great for chickens and small animals", location: "Schaumburg, IL", date: "2026-04-05" },
  { id: 2, name: "Pumpkin", emoji: "🎃", description: "Great for chickens and small animals", location: "Schaumburg, IL", date: "2026-04-04" },
  { id: 3, name: "Carrot", emoji: "🥕", description: "Great for chickens and small animals", location: "Schaumburg, IL", date: "2026-04-06" },
  { id: 4, name: "Apple", emoji: "🍎", description: "Fresh from the backyard tree", location: "Naperville, IL", date: "2026-04-03" },
  { id: 5, name: "Corn", emoji: "🌽", description: "Dried corn, great for birds", location: "Elgin, IL", date: "2026-04-02" },
  { id: 6, name: "Lettuce", emoji: "🥬", description: "Slightly wilted but still good", location: "Aurora, IL", date: "2026-04-01" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const filtered = ITEMS
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div>
      {/* Search + Sort */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex items-center flex-1 border-4 border-[#a8b98a] rounded-2xl px-4 py-2 bg-[#f0ede3] gap-2 min-w-[200px]" style={{ lineHeight: 2.5 }}>
          <span>🔍</span>
          <input
            className="border-none outline-none bg-transparent font-[Nunito] text-base text-[#4a5a30] w-full placeholder-[#aab890]"
            placeholder="Search for scraps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 font-extrabold text-[#4a5a30] border-4 border-[#a8b98a] bg-[#f0ede3]" style={{ lineHeight: 2.5 }}>
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border-4 border-[#a8b98a] rounded-2xl bg-[#8a9e6b] text-white outline-none cursor-pointer tracking-wide"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
        {filtered.map(item => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}