'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = '',
  delay = 0,
  id,
}: SectionWrapperProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref as any}
      className={`py-16 md:py-24 lg:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
