'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text?: string;
  children?: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function AnimatedText({
  text,
  children,
  as: Component = 'p',
  className = '',
  delay = 0,
  stagger = false,
}: AnimatedTextProps) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  // If children are provided, animate the children
  if (children) {
    return (
      <motion.div
        ref={ref as any}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Otherwise, animate text
  if (stagger) {
    const words = text?.split(' ') || [];
    return (
      <Component ref={ref as any} className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.05,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    );
  }

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
}
    >
      <Component className={className}>{text}</Component>
    </motion.div>
  );
}
