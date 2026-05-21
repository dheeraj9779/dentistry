"use client";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { LettersPullUp } from "@/utils/letterpullupEffect";
import { AnimatePresence, motion } from "motion/react";
import { doctors } from "@/mock_data/data";
import { useMemo, useState } from "react";


const ITEMS_PER_PAGE = 4;

const Specialists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleDoctors = useMemo(() => {
    return doctors.slice(
      currentIndex,
      currentIndex + ITEMS_PER_PAGE
    );
  }, [currentIndex]);

  const handleNext = () => {
    if (
      currentIndex + ITEMS_PER_PAGE <
      doctors.length
    ) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    
    <section id="specialists" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20">

      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-4 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Meet our team
            </p>

            <h2 className="text-white text-5xl md:text-7xl font-bold">
              <LettersPullUp text="Our Specialists" />
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`
                w-12 h-12 rounded-full border-2
                flex items-center justify-center
                transition-all

                ${
                  currentIndex === 0
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              <ArrowLeftOutlined />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={
                currentIndex + ITEMS_PER_PAGE >=
                doctors.length
              }
              className={`
                w-12 h-12 rounded-full border-2
                flex items-center justify-center
                transition-all

                ${
                  currentIndex + ITEMS_PER_PAGE >=
                  doctors.length
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              <ArrowRightOutlined />
            </motion.button>

          </div>
        </div>

        {/* Doctors */}
        <AnimatePresence mode="wait">

          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: 0.5,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >

            {visibleDoctors.map((doctor, idx) => (
              <motion.div
                key={doctor.id}
                initial={{
                  opacity: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: idx * 0.1,
                }}
                className="group text-center"
              >

                {/* Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className={`
                    relative w-full aspect-square
                    rounded-full overflow-hidden
                    ${doctor.bg}
                    shadow-2xl
                  `}
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />
                </motion.div>

                {/* Info */}
                <div className="mt-6">

                  <h3 className="text-white text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {doctor.name}
                  </h3>

                  <p className="text-white/60 text-sm mt-2">
                    {doctor.role}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Specialists;