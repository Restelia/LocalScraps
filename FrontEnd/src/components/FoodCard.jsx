export default function FoodCard({ name, emoji, description, location, date }) {
  const expiry = date ? new Date(date) : null;
  const today = new Date();
  const daysUntil = expiry
    ? Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))
    : null;
  const isSoon = daysUntil !== null && daysUntil <= 2;

  return (
    <div className="bg-[#f0ede3] border-4 border-[#a8b98a] rounded-2xl p-4 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-transform cursor-pointer">

      {/* Title */}
      <h3
        className="text-2xl text-[#8a9e6b] tracking-wide text-center"
        style={{ fontFamily: "'Luckiest Guy', cursive" }}
      >
        {name}
      </h3>

      {/* Emoji */}
      <div className="text-[72px] leading-none">
        {emoji}
      </div>

      {/* Description */}
      <div className="flex flex-col items-center leading-none">
        <p className="text-sm text-center text-[#4a5a30] italic m-0 leading-none">
          "{description}"
        </p>
        <p className="text-sm font-extrabold text-[#4a5a30] flex items-center gap-1 m-0 leading-none">
          <span className="w-2 h-2 rounded-full bg-[#8a9e6b] inline-block"></span>
          {location}
        </p>
      </div>

      {/* Expiry badge */}
      {expiry && (
        <span
          className={`text-[11px] font-semibold px-2 py-[2px] rounded-full ${
            isSoon
              ? "bg-[#FAEEDA] text-[#854F0B]"
              : "bg-[#dde8c4] text-[#3b6011]"
          }`}
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {isSoon
            ? `⚠ Exp ${expiry.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}`
            : `Exp ${expiry.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}`}
        </span>
      )}

      {/* Button */}
      <button
        className="w-full mt-auto py-2 border-2 border-[#a8b98a] rounded-xl font-bold text-[#4a5a30] hover:bg-[#c4d4a0] transition-colors"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        View Listing
      </button>
    </div>
  );
}