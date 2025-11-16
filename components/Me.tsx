"use client";

import { Github, Phone, Send, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Me = () => {
  const [socialsOpened, setSocialsOpened] = useState<boolean>(false);

  const socials = [
    { icon: <Github />, link: "https://github.com/Arsenmn" },
    { icon: <Send />, link: "https://t.me/arsenyergali" },
    { icon: <Phone />, link: "https://wa.me/87713790640" },
  ];

  return (
    <div>
      {!socialsOpened && (
        <motion.div
          onClick={() => setSocialsOpened(true)}
          className="cursor-pointer select-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-xl text-[#d38659] font-extrabold hidden md:visible">
            By Arsen Yergali
          </p>
          <p className="text-xl text-[#d38659] font-extrabold p-2 bg-amber-200 rounded-full cursor-pointer hover:border-2 hover:border-amber-50">
            Me
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {socialsOpened && (
          <motion.div
            className="flex flex-col sm:flex-row mt-15 sm:mt-3 md:mt-0 gap-3 items-center"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              onClick={() => setSocialsOpened(false)}
              className="bg-orange-300 rounded-full p-1 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <X color="#181818" />
            </motion.div>

            <motion.div
              className="bg-amber-200 flex flex-col md:flex-row gap-2 p-2 px-4 rounded-full cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {socials.map((social) => (
                <motion.div
                  key={social.link}
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Link
                    href={social.link}
                    target="_blank"
                    className="text-[#181818] hover:text-gray-500"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Me;
