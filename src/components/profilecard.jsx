import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const SAMPLE_PROFILE = {
//   id: 1,
//   name: "Premium Window Profile (Series 70)",
//   description: "High-grade architectural extrusion imported from Turkey, optimized for clean modern window tracks.",
//   colors: [
//     { name: "Matte Black", code: "#111111", image: "/images/chat1.png" },
//     { name: "Anodized Silver", code: "#C0C0C0", image: "/images/chat2.png" },
//     { name: "Brushed Gold", code: "#D4AF37", image: "/images/chat3.png" }
//   ]
// };
function ProfileCard({ profile = SAMPLE_PROFILE }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped Left -> Next Color
      if (currentIndex < profile.colors.length - 1) {
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
      }
    } else if (info.offset.x > swipeThreshold) {
      // Swiped Right -> Previous Color
      if (currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-white text-slate-800 shadow-md border border-slate-100 flex flex-col h-full">
      
      {/* DRAG/SWIPE IMAGE CONTAINER */}
      <div className="relative h-64 w-full bg-slate-900 overflow-hidden cursor-grab active:cursor-grabbing select-none">
        
        {/* Color Name Overlay Label */}
        <div className="absolute top-4 left-4 z-20 rounded-md bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm tracking-wider uppercase">
          {profile.colors[currentIndex].name}
        </div>

        {/* Dynamic Image Canvas */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={profile.colors[currentIndex].image}
            alt={`${profile.name} in ${profile.colors[currentIndex].name}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            className="absolute h-full w-full object-cover pointer-events-none"
          />
        </AnimatePresence>

        {/* Visual Swipe Indicator Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {profile.colors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* TEXT DETAILS SECTION */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#293b8d]">{profile.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-grow">{profile.description}</p>
        
        {/* Interactive Clickable Color Rings */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Finishes:</span>
            {profile.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                style={{ backgroundColor: color.code }}
                className={`h-6 w-6 rounded-full border shadow-sm transition-transform duration-200 hover:scale-110 ${
                  idx === currentIndex ? "ring-2 ring-[#293b8d] ring-offset-2 scale-105" : "border-slate-300"
                }`}
                title={color.name}
              />
            ))}
          </div>
        
          {/* <Link to="/contact" ><button className="rounded-lg bg-[#293b8d] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1f2d69]">
            Order Now
          </button></Link> */}
                
        </div>
      </div>
    </article>
  );
}

export default ProfileCard;