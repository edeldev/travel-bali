"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { navLinks } from "@/libs";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useTransform } from "framer-motion";
import { Menu } from "./components";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.header className="fixed w-full top-0 z-20">
      <div className="py-5 xl:py-0 px-5 xl:px-20 flex justify-between items-center">
        <motion.div className="flex-1" style={{ opacity }}>
          <Link href="/" className="text-white font-bold text-3xl">
            Logo
          </Link>
        </motion.div>

        <div className="xl:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <IconX className="text-white cursor-pointer" stroke={1.5} />
          ) : (
            <IconMenu className="text-white cursor-pointer" stroke={1.5} />
          )}
        </div>

        <nav className="hidden xl:block">
          <ul className="flex gap-10 bg-white rounded-b-[100px] shadow-md px-26 py-5">
            {navLinks.map(({ id, href, label }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="capitalize font-semibold text-gray-500 hover:text-black transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="flex-1 hidden xl:flex justify-end"
          style={{ opacity }}
        >
          <div className="flex items-center bg-white rounded-full pr-1 group cursor-pointer">
            <motion.div className="px-5 py-3 bg-primary hover:bg-primary/90 transition duration-300 rounded-full border border-white">
              <Link href="#contacto" className="text-white">
                Ponte en contacto
              </Link>
            </motion.div>

            <span className="ml-1 text-primary transition-transform duration-300 group-hover:rotate-180">
              &gt;
            </span>
          </div>
        </motion.div>
      </div>

      <Menu open={open} setOpen={setOpen} />
    </motion.header>
  );
};
