'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import Link from 'next/link';
import type { CTASection as CTASectionType } from '@/lib/types';

interface CTASectionProps {
  content: CTASectionType;
}

export default function CTASection({ content }: CTASectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref as any}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      {content.backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${content.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
      )}

      {/* Content */}
      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-light-muted mb-10 leading-relaxed">
            {content.description}
          </p>
          <Link href={content.ctaLink} className="btn-primary">
            {content.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
