'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';
import Image from 'next/image';
import type { RestaurantItem } from '@/lib/types';

interface RestaurantCardProps {
  restaurant: RestaurantItem;
  index: number;
}

export default function RestaurantCard({ restaurant, index }: RestaurantCardProps) {
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
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
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
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
          {restaurant.cuisine}
        </p>
        <h3 className="text-3xl md:text-4xl font-serif text-light mb-6">
          {restaurant.name}
        </h3>
        <p className="text-lg text-light-muted leading-relaxed mb-8">
          {restaurant.description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {restaurant.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + idx * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex items-center text-light-muted"
            >
              <span className="w-2 h-2 bg-gold mr-3 rounded-full" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
