import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import CTASection from '@/components/CTASection';
import ClubFeatureCard from '@/components/ClubFeatureCard';
import { countryClubHero, clubFeatures, clubCTA } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Country Club | Estoril Riviera',
  description: 'Join our exclusive country club featuring championship golf, tennis academy, wellness facilities, and refined social spaces.',
};

export default function CountryClubPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={countryClubHero} height="large" />

      {/* Introduction */}
      <SectionWrapper>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Where Excellence Meets Community"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-8"
            />
            <AnimatedText
              text="The Estoril Riviera Country Club represents the pinnacle of recreational sophistication. Our members enjoy access to world-class sporting facilities, comprehensive wellness programs, and a vibrant community of individuals who share a passion for the refined life."
              as="p"
              delay={0.2}
              className="text-lg md:text-xl text-light-muted leading-relaxed"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <div className="section-container space-y-24 md:space-y-32 pb-24">
        {clubFeatures.map((feature, index) => (
          <ClubFeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      {/* Membership Benefits */}
      <SectionWrapper className="bg-dark-lighter">
        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Membership Privileges"
              as="h2"
              className="text-3xl md:text-4xl font-serif text-light mb-12 text-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Priority access to all club facilities',
                'Complimentary guest passes',
                'Exclusive member events and tournaments',
                'Personalized training and wellness programs',
                'Preferred restaurant reservations',
                'Access to private lounges and social spaces',
                'Member-only golf course hours',
                'Comprehensive concierge services',
              ].map((benefit, index) => (
                <AnimatedText
                  key={index}
                  text=""
                  as="div"
                  delay={index * 0.1}
                  className="flex items-start"
                >
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-gold mt-2 mr-4 rounded-full flex-shrink-0" />
                    <span className="text-light-muted leading-relaxed">{benefit}</span>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection content={clubCTA} />
    </>
  );
}
