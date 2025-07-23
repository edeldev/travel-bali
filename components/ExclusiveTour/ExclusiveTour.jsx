"use client";
import { motion } from "framer-motion";
import { Container, Title } from "../ui";

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

export const ExclusiveTour = () => {
  return (
    <Container className="bg-white">
      <Title
        label="Tour esclusivo"
        color="text-black"
        className="text-center mb-10"
      />

      <motion.div
        className="grid grid-cols-12 gap-5 max-w-5xl mx-auto items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="col-span-12 md:col-span-6"
          variants={imageVariants}
        >
          <img src="/tour.webp" className="object-cover" />
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-6"
          variants={textVariants}
        >
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <ul className="list-disc pl-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </motion.div>
      </motion.div>
    </Container>
  );
};
