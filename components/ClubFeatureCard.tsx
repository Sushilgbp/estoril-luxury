'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import Image from 'next/image';
import type { ClubFeature } from '@/lib/types';

interface ClubFeatureCardProps {
  feature: ClubFeature;
  index: number;
}

export default function ClubFeatureCard({ feature, index }: ClubFeatureCardProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref as any}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        !isEven ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isEven ? -40 : 40 }
        }
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`relative aspect-[4/3] overflow-hidden ${
          !isEven ? 'lg:col-start-2' : ''
        }`}
      >
        {feature.image && (
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isEven ? 40 : -40 }
        }
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <h3 className="text-3xl md:text-4xl font-serif text-light mb-6">
          {feature.title}
        </h3>
        <p className="text-lg text-light-muted leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </div>
  );
}
