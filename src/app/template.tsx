"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { title } from "process";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Transição mais rápida
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
