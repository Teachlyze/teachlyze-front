"use client";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from "framer-motion";
import { usePathname } from "next/navigation";

export default function Main({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  return (
    <>
      {/* <main className="flex-grow space-y-6 relative text-center">
        {children}
      </main> */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <motion.main
            key={router}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut"}}
            className="flex-grow space-y-6 relative text-center"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </LazyMotion>
      {/* <AnimatePresence mode="wait">
        <motion.main
          key={router}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-grow space-y-6 relative text-center"
        >
          {children}
        </motion.main>
      </AnimatePresence> */}
    </>
  );
}
