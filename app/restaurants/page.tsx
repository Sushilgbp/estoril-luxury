import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import { restaurantsHero, restaurants } from '@/lib/content';
import RestaurantCard from '@/components/RestaurantCard';

export const metadata: Metadata = {
  title: 'Restaurants | Estoril Riviera',
  description: 'Experience world-class dining at Estoril Riviera. Discover our collection of restaurants featuring Michelin-starred chefs and coastal cuisine.',
};

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={restaurantsHero} height="large" />

      {/* Introduction */}
      <SectionWrapper>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="A Gastronomic Journey"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-8"
            />
            <AnimatedText
              text="At Estoril Riviera, dining transcends mere sustenance. Each of our restaurants offers a distinct culinary perspective, united by an unwavering commitment to excellence, seasonality, and the celebration of Portugal's extraordinary coastal bounty."
              as="p"
              delay={0.2}
              className="text-lg md:text-xl text-light-muted leading-relaxed"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Restaurant Cards */}
      <div className="section-container space-y-24 md:space-y-32 pb-24">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
        ))}
      </div>

      {/* Reservations Section */}
      <SectionWrapper className="bg-dark-lighter">
        <div className="section-container text-center py-16">
          <AnimatedText
            text="Reserve Your Table"
            as="h2"
            className="text-3xl md:text-4xl font-serif text-light mb-6"
          />
          <AnimatedText
            text="Our restaurants welcome both members and guests. Reservations are highly recommended and can be made through our concierge service."
            as="p"
            delay={0.2}
            className="text-lg text-light-muted mb-8 max-w-2xl mx-auto"
          />
          <AnimatedText
            delay={0.4}
            as="div"
            text=""
            className="inline-block"
          >
            <a href="/contact" className="btn-primary">
              Contact Concierge
            </a>
          </AnimatedText>
        </div>
      </SectionWrapper>
    </>
  );
}
