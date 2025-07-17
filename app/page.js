"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  About,
  Container,
  ExclusiveTour,
  HeroFooter,
  HeroTitle,
  PopularHotels,
} from "@/components";
import { Header } from "@/layout";
import { gallery } from "@/libs";

export default function Home() {
  const [imageSelected, setImageSelected] = useState(gallery[0]);

  return (
    <>
      <div className="relative min-h-dvh overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageSelected?.img || "default"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/${imageSelected?.img}')`,
            }}
          />
        </AnimatePresence>

        <Header />
        <div className="relative z-10 min-h-dvh flex justify-center items-center">
          <HeroTitle />
          <HeroFooter
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
          />
        </div>
      </div>

      <div className="bg-white">
        <Container className="bg-secondary rounded-b-4xl md:rounded-b-[100px]">
          <About />
          <PopularHotels />
        </Container>
      </div>

      <ExclusiveTour />
    </>
  );
}
