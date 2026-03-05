import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ImageGrid from '@/components/ImageGrid';
import CTASection from '@/components/CTASection';
import SectionWrapper from '@/components/SectionWrapper';
import {
  homeHero,
  homeAbout,
  homeFeatures,
  homeGallery,
  homeCTA,
} from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={homeHero} height="full" />

      {/* About Section */}
      <ContentSection content={homeAbout} />

      {/* Features Sections */}
      {homeFeatures.map((feature, index) => (
        <ContentSection key={feature.id} content={feature} index={index} />
      ))}

      {/* Gallery Section */}
      <SectionWrapper className="bg-dark-lighter">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Visual Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-light">
              Experience the Essence
            </h2>
          </div>
          <ImageGrid items={homeGallery} columns={2} gap="large" />
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection content={homeCTA} />
    </>
  );
}
