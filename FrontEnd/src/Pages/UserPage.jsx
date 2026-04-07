const user = {
  name: "Phil M.",
  rating: "-",
  memberSince: "March 2026",
  aboutMe: "I love chickens",
  currentListings: ["Potato Peels"],
};

export default function UserPage() {
  return (
    <div className="flex gap-6 mt-2">
      {/* Left - Profile Picture */}
      <div className="flex items-center justify-center border-4 border-[#a8b98a] rounded-2xl w-48 min-h-56 flex-shrink-0 bg-[#e0ddd3]">
        <div className="flex flex-col items-center gap-1 opacity-40">
          {/* Silhouette icon */}
          <div className="w-16 h-16 rounded-full bg-[#4a5a30]" />
          <div className="w-24 h-16 rounded-t-full bg-[#4a5a30] mt-1" />
        </div>
      </div>

      {/* User Info (HARD CODED FOR NOW) */}
      <div className="flex flex-col justify-center gap-3 flex-1">
        <p className="font-extrabold text-[#8a9e6b] text-lg"
          style={{ fontFamily: "'Nunito', sans-serif" }}>
          <span className="text-[#8a9e6b]">Name: </span>{user.name}
        </p>
        <p className="font-extrabold text-[#8a9e6b] text-lg"
          style={{ fontFamily: "'Nunito', sans-serif" }}>
          <span className="text-[#8a9e6b]">Rating: </span>{user.rating}
        </p>
        <p className="font-extrabold text-[#8a9e6b] text-lg"
          style={{ fontFamily: "'Nunito', sans-serif" }}>
          <span className="text-[#8a9e6b]">Member Since: </span>{user.memberSince}
        </p>
        <p className="font-extrabold text-[#8a9e6b] text-lg"
          style={{ fontFamily: "'Nunito', sans-serif" }}>
          <span className="text-[#8a9e6b]">About Me: </span>{user.aboutMe}
        </p>

        <div style={{ fontFamily: "'Nunito', sans-serif" }}>
          <p className="font-extrabold text-[#8a9e6b] text-lg mb-2">Current Listings:</p>
          <div className="flex flex-wrap gap-2">
            {user.currentListings.map((item, i) => (
              <span
                key={i}
                className="border-2 border-[#a8b98a] rounded-xl px-3 py-1 text-[#4a5a30] font-bold text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}