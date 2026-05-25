"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-700 via-slate-700 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1663755489920-5e09f66d011a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dental Hero"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-800/85 to-slate-900/40" />

      {/* Blur Glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                inline-flex items-center gap-3
                border border-cyan-400/20
                bg-cyan-400/10
                backdrop-blur-md
                px-5 py-2 rounded-full
                mb-8
              "
            >
              <SafetyCertificateOutlined className="text-cyan-400" />

              <span className="text-sm text-cyan-200 tracking-wide">
                Trusted by 12,000+ Patients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
              "
            >
              Advanced
              <span className="block text-cyan-400">Dental Care</span>
              <span className="block text-slate-300">Designed For</span>
              <span className="block">Your Smile</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="
                mt-8
                text-lg
                md:text-xl
                leading-relaxed
                text-slate-300
                max-w-2xl
              "
            >
              Experience modern dentistry with AI-powered assistance, expert
              specialists, painless procedures for your comfort.
            </motion.p>

            <div className="mt-8">
              {/* Small Heading */}
              <div className="mb-5">
                <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-3">
                  Need Quick Guidance?
                </p>

                <p className="text-slate-300 mt-3 max-w-2xl leading-relaxed">
                  Answer a few simple questions and get an instant AI-powered
                  dental recommendation tailored to your symptoms.
                </p>
              </div>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="flex flex-wrap gap-4"
              >
                {/* Appointment Button */}
                <Button
                  type="primary"
                  size="large"
                  className="
        h-14!
        rounded-full!
        px-8!
        text-base!
        font-semibold!
        bg-cyan-500!
        border-cyan-500!
        shadow-lg!
        shadow-cyan-500/30!
        hover:scale-105
        transition-all
      "
      onClick={() => router.push("/booking")}
                >
                  Book Appointment
                  <ArrowRightOutlined />
                </Button>

                {/* AI Button */}
                <Button
                  size="large"
                  className="
        group
        relative
        overflow-hidden
        h-14!
        rounded-full!
        px-8!
        text-base!
        font-semibold!
        bg-white/10!
        border-white/10!
        text-white!
        backdrop-blur-md!
        hover:border-cyan-400!
        hover:bg-cyan-500/10!
        transition-all
      "

      onClick={() => router.push("/ai_dental_analysis")}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-300" />

                  <span className="relative flex items-center gap-3">
                    {/* AI Icon */}
                    <div
                      className="
            flex items-center justify-center
            w-9 h-9 rounded-full
            bg-cyan-400/20
            border border-cyan-400/30
            text-cyan-300
          "
                    >
                      ✦
                    </div>

                    <div className="flex flex-col items-start leading-none">
                      <span className="text-white font-semibold">
                        AI Dental Assistant
                      </span>

                      <span className="text-xs text-slate-300 mt-1">
                        Get instant guidance
                      </span>
                    </div>

                    <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform ml-2" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
              }}
              className="
                flex flex-wrap items-center gap-10
                mt-14
              "
            >
              <div>
                <h3 className="text-4xl font-bold text-white">15+</h3>

                <p className="text-slate-400 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">12k+</h3>

                <p className="text-slate-400 mt-2">Happy Patients</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-lg">
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                </div>

                <p className="text-slate-400 mt-2">4.9 Average Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Floating Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-[420px]
                rounded-[40px]
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-2xl
                shadow-cyan-500/10
              "
            >
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop"
                  alt="Dental Specialist"
                  fill
                  className="object-cover"
                />

                {/* Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div
                  className="
                    absolute top-6 left-6
                    bg-cyan-400 text-black
                    px-4 py-2 rounded-full
                    font-semibold text-sm
                    shadow-lg
                  "
                >
                  AI Powered Care
                </div>

                {/* Bottom Card */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    p-8
                  "
                >
                  <h3 className="text-3xl font-bold text-white">
                    Personalized Dental Solutions
                  </h3>

                  <p className="text-slate-300 mt-4 leading-relaxed">
                    Get recommendations powered by AI and reviewed by certified
                    specialists for accurate dental care.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
