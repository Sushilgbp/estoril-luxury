import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedText from '@/components/AnimatedText';
import ContactForm from '@/components/ContactForm';
import { contactHero, contactInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact | Estoril Riviera',
  description: 'Get in touch with Estoril Riviera. Our concierge team is ready to assist you with inquiries about our properties, restaurants, and country club.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={contactHero} height="medium" />

      {/* Contact Form & Info */}
      <SectionWrapper>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <AnimatedText
                text="Get in Touch"
                as="h2"
                className="text-3xl md:text-4xl font-serif text-light mb-8"
              />
              <AnimatedText
                text="Our concierge team is available to answer your questions about our properties, dining experiences, club membership, and special events. We look forward to hearing from you."
                as="p"
                delay={0.2}
                className="text-lg text-light-muted leading-relaxed mb-12"
              />

              {/* Contact Details */}
              <div className="space-y-8">
                <AnimatedText text="" as="div" delay={0.3} className="block">
                  <div>
                    <h3 className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                      Address
                    </h3>
                    <address className="text-light-muted not-italic leading-relaxed">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.postal} {contactInfo.address.city}<br />
                      {contactInfo.address.country}
                    </address>
                  </div>
                </AnimatedText>

                <AnimatedText text="" as="div" delay={0.4} className="block">
                  <div>
                    <h3 className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-light-muted hover:text-gold transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </AnimatedText>

                <AnimatedText text="" as="div" delay={0.5} className="block">
                  <div>
                    <h3 className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-light-muted hover:text-gold transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </AnimatedText>

                <AnimatedText text="" as="div" delay={0.6} className="block">
                  <div>
                    <h3 className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                      Hours
                    </h3>
                    <p className="text-light-muted">{contactInfo.hours}</p>
                  </div>
                </AnimatedText>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Section (Placeholder) */}
      <SectionWrapper className="bg-dark-lighter">
        <div className="section-container">
          <AnimatedText
            text="Visit Us"
            as="h2"
            className="text-3xl md:text-4xl font-serif text-light mb-8 text-center"
          />
          <AnimatedText
            text="Located on the stunning Portuguese Riviera, Estoril is easily accessible from Lisbon and the international airport."
            as="p"
            delay={0.2}
            className="text-lg text-light-muted text-center mb-12 max-w-2xl mx-auto"
          />
          
          {/* Map placeholder - you can replace this with an actual map component */}
          <div className="aspect-[16/9] bg-dark-accent rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-light-muted text-sm">
                Interactive map will be displayed here
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
