"use client";

import { Drawer } from "antd";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'motion/react';
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";


type NavLink = {
  name: string;
  href: string;
  scrollToId?: string;
};

const links: NavLink[] = [
  { name: "Home", href: "/" ,scrollToId: "home"},
  { name: "Services", href: "/#services", scrollToId: "services" },
  { name: "Specialists", href: "/#specialists", scrollToId: "specialists" },
  { name: "Enquiry", href: "/#enquiry", scrollToId: "enquiry" },
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    if (pathname === '/' && sectionId) {
      event.preventDefault();
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    if (href.startsWith('/#') && pathname !== '/') {
      router.push(href);
    }
  };

  return (
    <header className="px-6 md:px-12 lg:px-20 py-4">
      <nav className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-2">
           {/* Logo */}
            <div>
              <Image src="/logo.webp" alt="Dentistry+" width={60} height={30} />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Dentistry+
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link, idx) => (
            <motion.div 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.scrollToId)}
                className="relative text-slate-600 font-medium text-sm tracking-wide hover:text-cyan-600 transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setOpen(true)}
          >
            <MenuOutlined className="text-xl fill-red-600"/>
          </motion.button>
        </div>
      </nav>

      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href, link.scrollToId);
                setOpen(false);
              }}
              className="text-slate-700 font-medium hover:text-cyan-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
