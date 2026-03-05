'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function AnimatedText({
  text,
  as: Component = 'p',
  className = '',
  delay = 0,
  stagger = false,
}: AnimatedTextProps) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  if (stagger) {
    const words = text.split(' ');
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
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Component className={className}>{text}</Component>
    </motion.div>
  );
}
