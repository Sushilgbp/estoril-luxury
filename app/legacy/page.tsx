import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import AnimatedText from '@/components/AnimatedText';
import SectionWrapper from '@/components/SectionWrapper';
import { legacyHero, legacySections } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Legacy | Estoril Riviera',
  description: 'Discover the rich history and timeless elegance of Estoril Riviera, a century of distinction along the Portuguese coast.',
};

export default function LegacyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={legacyHero} height="large" />

      {/* Introduction */}
      <SectionWrapper>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Heritage & Vision"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-8"
            />
            <AnimatedText
              text="For nearly a century, Estoril Riviera has stood as a beacon of refined coastal living. Our story is one of visionary architects, discerning patrons, and an unwavering commitment to preserving beauty while embracing progress."
              as="p"
              delay={0.2}
              className="text-lg md:text-xl text-light-muted leading-relaxed"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline Sections */}
      {legacySections.map((section, index) => (
        <ContentSection key={section.id} content={section} index={index} />
      ))}

      {/* Closing Statement */}
      <SectionWrapper className="bg-dark-lighter">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center py-12">
            <AnimatedText
              text="The Next Chapter"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-light mb-8"
            />
            <AnimatedText
              text="As we look toward the future, we remain committed to the principles that have guided us for generations. Innovation and tradition, luxury and sustainability, exclusivity and warmth—these are not contradictions but the foundation of our continued evolution."
              as="p"
              delay={0.2}
              className="text-lg text-light-muted leading-relaxed mb-8"
            />
            <AnimatedText
              text="Join us in writing the next chapter of this extraordinary story."
              as="p"
              delay={0.4}
              className="text-xl text-gold font-serif italic"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
