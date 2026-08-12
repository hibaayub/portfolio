export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeUpTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};
