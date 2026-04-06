export default function FoodCard({ name, emoji, description, location }) {
  return (
    <div className="bg-[#f0ede3] border-4 border-[#a8b98a] rounded-2xl p-4 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-transform">
      <h3 className="text-xl text-[#8a9e6b] tracking-wide" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
        {name}
      </h3>
      <div className="text-6xl leading-none">{emoji}</div>
      <p className="text-sm text-center text-[#4a5a30] italic">"{description}"</p>
      <p className="text-sm font-extrabold text-[#4a5a30]">{location}</p>
      <button className="w-full mt-auto py-2 border-2 border-[#a8b98a] rounded-xl font-bold text-[#4a5a30] hover:bg-[#c4d4a0] transition-colors"
        style={{ fontFamily: "'Nunito', sans-serif" }}>
        More Info
      </button>
    </div>
  );
}