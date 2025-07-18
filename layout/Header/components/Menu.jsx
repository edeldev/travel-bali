"use client";

import Link from "next/link";
import { navLinks } from "@/libs";
import { AnimatePresence, motion } from "framer-motion";

export const Menu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bg-white w-full shadow-md z-99 xl:hidden rounded-2xl overflow-hidden"
        >
          <ul className="flex flex-col items-center gap-4 p-5">
            {navLinks.map(({ id, href, label }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="capitalize font-semibold text-gray-500 hover:bg-primary hover:text-white transition duration-300 px-5 py-1 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
