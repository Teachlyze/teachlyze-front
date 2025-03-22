"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Main({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  return (
    <>
      <AnimatePresence>
        <motion.main
          key={router}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-grow space-y-6 relative text-center"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
