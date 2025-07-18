"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandX,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { carouselTestimonial } from "@/libs";

export const CarouselTestimonial = () => {
  const [index, setIndex] = useState(0);

  const total = carouselTestimonial.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const getVisibleItems = () => {
    const prev = (index - 1 + total) % total;
    const curr = index;
    const next = (index + 1) % total;
    return [
      { ...carouselTestimonial[prev], position: "prev" },
      { ...carouselTestimonial[curr], position: "active" },
      { ...carouselTestimonial[next], position: "next" },
    ];
  };

  const visibleItems = getVisibleItems();

  const variants = {
    prev: { x: "-100%", scale: 0.9, opacity: 0.5 },
    active: { x: "0%", scale: 1, opacity: 1 },
    next: { x: "100%", scale: 0.9, opacity: 0.5 },
  };

  return (
    <>
      <div className="relative overflow-hidden h-[300px] max-w-7xl mx-auto">
        <div className="flex justify-center relative w-full h-full">
          <AnimatePresence initial={false}>
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  x: item.position === "next" ? "100%" : "-100%",
                  opacity: 0,
                }}
                animate={variants[item.position]}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-[90%] md:w-[30%] bg-white p-5 space-y-5 rounded-2xl shadow-2xl ${
                  item.position === "prev"
                    ? "-translate-x-10 z-10"
                    : item.position === "next"
                    ? "translate-x-10 z-10"
                    : "z-20"
                }`}
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <div className="flex gap-1">
                      <Link
                        href={item.url}
                        className="bg-black text-white rounded-md p-1 hover:bg-black/80 transition-colors duration-300"
                      >
                        <IconBrandX stroke={1.5} size={13} />
                      </Link>
                      <Link
                        href={item.url}
                        className="bg-[#1877F2] text-white rounded-md p-1 hover:bg-[#1877F2]/80 transition-colors duration-300"
                      >
                        <IconBrandFacebook stroke={1.5} size={13} />
                      </Link>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">{item.caption}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center mb-10 text-white max-w-md mx-auto">
        <motion.button
          onClick={handlePrev}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconChevronLeft size={30} />
        </motion.button>

        <hr className="flex-grow border-white w-20" />

        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold"
        >
          {index + 1}
        </motion.span>

        <hr className="flex-grow border-white w-20" />

        <motion.button
          onClick={handleNext}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconChevronRight size={30} />
        </motion.button>
      </div>
    </>
  );
};
