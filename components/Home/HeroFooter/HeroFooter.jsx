"use client";
import { motion } from "framer-motion";
import { gallery } from "@/libs";

export const HeroFooter = ({ imageSelected, setImageSelected }) => {
  return (
    <div className="absolute bottom-0 bg-secondary w-full text-white text-center py-10 rounded-t-4xl md:rounded-t-[100px] z-20">
      <div className="flex justify-center md:justify-end -mt-20 md:pr-10">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {gallery.map((gal) => {
            const isSelected = imageSelected?.id === gal.id;

            return (
              <motion.div
                key={gal.id}
                whileHover={{ scale: isSelected ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-2xl p-1 ${
                  isSelected
                    ? "ring-4 ring-white shadow-xl"
                    : "ring-2 ring-transparent"
                }`}
                onClick={() => setImageSelected(gal)}
              >
                <img
                  src={gal.img}
                  alt="image"
                  className="rounded-xl w-15 h-15 md:w-20 md:h-20 object-cover cursor-pointer"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
