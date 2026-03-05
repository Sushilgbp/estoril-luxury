'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import Image from 'next/image';
import type { ImageGridItem } from '@/lib/types';

interface ImageGridProps {
  items: ImageGridItem[];
  columns?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
}

export default function ImageGrid({
  items,
  columns = 3,
  gap = 'medium',
}: ImageGridProps) {
  const gapClasses = {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
  };

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
      {items.map((item, index) => (
        <ImageGridItemComponent key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

function ImageGridItemComponent({
  item,
  index,
}: {
  item: ImageGridItem;
  index: number;
}) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative overflow-hidden bg-dark-lighter rounded-sm"
    >
      <div className={`relative ${aspectRatioClasses[item.aspectRatio || 'landscape']}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Text Content */}
        {(item.title || item.description) && (
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.title && (
              <h3 className="text-xl font-serif mb-2 text-shadow">
                {item.title}
              </h3>
            )}
            {item.description && (
              <p className="text-sm text-light-muted text-shadow">
                {item.description}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
