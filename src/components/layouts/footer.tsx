"use client";

import Link from "next/link";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* Top CTA */}
        <div className="border-b border-white/10 px-6 md:px-12 lg:px-20 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
                Dental care made simple
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to transform your smile?
              </h2>

              <p className="text-white/60 mt-6 text-lg">
                Book an appointment with our expert dental specialists and
                experience world-class care with modern technology.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="
                group
                flex items-center gap-3
                bg-cyan-500 hover:bg-cyan-400
                text-black font-semibold
                px-8 py-4 rounded-full
                transition-all duration-300
                shadow-xl hover:shadow-cyan-500/30
                w-fit
              "
            >
              Book Appointment

              <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="px-6 md:px-12 lg:px-20 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                
                <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg">
              <span className="text-xl font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Dentistry+
            </span>
          </div>
              </div>

              <p className="text-white/60 leading-relaxed">
                Providing exceptional dental care with advanced treatments,
                experienced specialists, and a patient-first approach.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-8">

                <Link
                  href="#"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    flex items-center justify-center
                    hover:border-cyan-400
                    hover:text-cyan-400
                    transition-all
                  "
                >
                  <FacebookFilled />
                </Link>

                <Link
                  href="#"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    flex items-center justify-center
                    hover:border-cyan-400
                    hover:text-cyan-400
                    transition-all
                  "
                >
                  <InstagramFilled />
                </Link>

                <Link
                  href="#"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    flex items-center justify-center
                    hover:border-cyan-400
                    hover:text-cyan-400
                    transition-all
                  "
                >
                  <LinkedinFilled />
                </Link>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8">
                Quick Links
              </h4>

              <div className="flex flex-col gap-5 text-white/60">

                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </Link>

                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Specialists
                </Link>

                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>

              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-8">
                Our Services
              </h4>

              <div className="flex flex-col gap-5 text-white/60">

                <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Teeth Whitening
                </p>

                <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Dental Implants
                </p>

                <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Orthodontics
                </p>

                <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Root Canal
                </p>

                <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Cosmetic Dentistry
                </p>

              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-8">
                Contact Us
              </h4>

              <div className="flex flex-col gap-6">

                <div className="flex items-start gap-4">
                  <PhoneOutlined className="text-cyan-400 text-lg mt-1" />

                  <div>
                    <p className="text-white font-medium">
                      +1 (234) 567-890
                    </p>

                    <p className="text-white/50 text-sm mt-1">
                      Mon - Sat / 9AM - 8PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MailOutlined className="text-cyan-400 text-lg mt-1" />

                  <div>
                    <p className="text-white font-medium">
                      support@dentistry.com
                    </p>

                    <p className="text-white/50 text-sm mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvironmentOutlined className="text-cyan-400 text-lg mt-1" />

                  <div>
                    <p className="text-white font-medium">
                      25 Dental Street,
                    </p>

                    <p className="text-white/50 text-sm mt-1">
                      New York, USA
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <p className="text-white/50 text-sm">
              © 2026 dentistry. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/50">

              <Link
                href="#"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;