export default function SellPage() {
  return (
    <div className="flex gap-6 mt-2">
      {/* Left - Image Upload */}
      <div className="flex flex-col items-center justify-center border-4 border-[#a8b98a] rounded-2xl p-6 w-48 min-h-64 cursor-pointer hover:bg-[#c4d4a0] transition-colors flex-shrink-0">
        <div className="border-4 border-[#8a9e6b] rounded-full w-20 h-20 flex items-center justify-center mb-3">
          <span className="text-4xl text-[#8a9e6b]">+</span>
        </div>
        <p className="text-[#8a9e6b] font-extrabold text-lg text-center"
          style={{ fontFamily: "'Luckiest Guy', cursive" }}>
          Add Picture
        </p>
      </div>

      {/* Right - Form Fields */}
      <div className="flex flex-col justify-center gap-4 flex-1">
        <div className="flex items-center gap-2">
          <label className="font-extrabold text-[#8a9e6b] min-w-fit"
            style={{ fontFamily: "'Nunito', sans-serif" }}>
            Food:
          </label>
          <div className="border-b-2 border-[#8a9e6b] flex-1">
            <input
              className="w-full bg-transparent outline-none text-[#4a5a30] font-semibold pb-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-extrabold text-[#8a9e6b] min-w-fit"
            style={{ fontFamily: "'Nunito', sans-serif" }}>
            Location:
          </label>
          <div className="border-b-2 border-[#8a9e6b] flex-1">
            <input
              className="w-full bg-transparent outline-none text-[#4a5a30] font-semibold pb-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-extrabold text-[#8a9e6b] min-w-fit"
            style={{ fontFamily: "'Nunito', sans-serif" }}>
            Quantity:
          </label>
          <div className="border-b-2 border-[#8a9e6b] flex-1">
            <input
              className="w-full bg-transparent outline-none text-[#4a5a30] font-semibold pb-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-extrabold text-[#8a9e6b] min-w-fit"
            style={{ fontFamily: "'Nunito', sans-serif" }}>
            Expiration Date:
          </label>
          <div className="border-b-2 border-[#8a9e6b] flex-1">
            <input
              type="date"
              className="w-full bg-transparent outline-none text-[#4a5a30] font-semibold pb-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            />
          </div>
        </div>

        {/* Post Listing Button */}
        <button
          className="w-full mt-2 py-3 border-4 border-[#a8b98a] rounded-2xl text-[#4a5a30] text-xl hover:bg-[#c4d4a0] transition-colors"
          style={{ fontFamily: "'Luckiest Guy', cursive", letterSpacing: "1px" }}
        >
          Post Listing
        </button>
      </div>
    </div>
  );
}