"use client";

import { Boxes } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Me from "./Me";

export const Header = () => {
  const pathname = usePathname();
  let activeIndex = 0;
  if (pathname === "/") activeIndex = 0;
  else if (pathname.startsWith("/list")) activeIndex = 1;
  else if (pathname.startsWith("/coin")) activeIndex = 1;
  else if (pathname.startsWith("/about")) activeIndex = 2;
  const width = 72;
  const offset = activeIndex * width;

  return (
    <div className="w-full h-[100px] flex flex-row justify-between items-center text-white px-5 absolute bg-transparent z-100">
      <div className="">
        <Link href="/">
          <Boxes color="#d38659" size={50} />
        </Link>
      </div>

      <nav className="absolute left-1/2 -translate-x-1/2 bg-[#d38659]/50 border-b border-t border-white/30 rounded-full p-2">
        <ul className="relative flex flex-row gap-3 text-black px-2">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-8 ml-12 rounded-full bg-white/40 border-r border-l border-white/50 z-0"
            style={{
              width: activeIndex === 0 ? width + 30 : width,
              height: 40,
            }}
            animate={{
              x:
                offset + (activeIndex === 2 ? 18 : activeIndex === 0 ? -43 : 2),
            }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          />
          <li className="relative z-10 rounded-full p-1">
            <Link href="/" className="font-bold px-4 py-1 inline-block">
              Overview
            </Link>
          </li>
          <li className="relative z-10 rounded-full p-1">
            <Link href="/list" className="font-bold px-4 py-1 inline-block">
              List
            </Link>
          </li>
          <li className="relative z-10 rounded-full p-1">
            <Link href="/about" className="font-bold px-3 py-1 inline-block">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Me />
    </div>
  );
};
