"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, fadeUpTransition } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...fadeUpTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
