"use client";

import { motion } from "motion/react";

export default function DentalLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700">
      <div className="flex flex-col items-center gap-6 text-white">
        
        {/* Pulse Ring */}
        <motion.div
          className="h-20 w-20 rounded-full border-2 border-cyan-400"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />

        <div className="text-center">
          <p className="text-lg font-semibold tracking-wide">
            Analyzing your dental health
          </p>
          <p className="text-sm text-slate-300">
            Our AI dentist is reviewing your answers...
          </p>
        </div>
      </div>
    </div>
  );
}