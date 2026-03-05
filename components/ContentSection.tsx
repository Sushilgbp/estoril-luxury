'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import Image from 'next/image';
import type { SectionContent } from '@/lib/types';

interface ContentSectionProps {
  content: SectionContent;
  index?: number;
}

export default function ContentSection({ content, index = 0 }: ContentSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isLeft = content.alignment === 'left';
  const isCenter = content.alignment === 'center';

  if (isCenter) {
    return (
      <section ref={ref as any} id={content.id} className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            {content.subtitle && (
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                {content.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-light-muted leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref as any} id={content.id} className="py-16 md:py-24">
      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          !isLeft ? 'lg:grid-flow-dense' : ''
        }`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isLeft ? -40 : 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={`relative aspect-[4/3] overflow-hidden ${
              !isLeft ? 'lg:col-start-2' : ''
            }`}
          >
            {content.image && (
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isLeft ? 40 : -40 }
            }
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            {content.subtitle && (
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                {content.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-light-muted leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
