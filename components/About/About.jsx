"use client";
import { motion } from "framer-motion";
import { Title } from "../ui";

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const About = () => {
  return (
    <motion.div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 scroll-mt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={imageVariants}>
        <img
          src="/about-section.webp"
          className="object-cover rounded-2xl w-full h-auto"
          alt="About"
        />
      </motion.div>

      <motion.div className="space-y-5" variants={textVariants}>
        <Title label="Sobre nosotros" color="text-text" />
        <div>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
