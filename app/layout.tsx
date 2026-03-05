import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Luxury serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// Modern sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estoril Riviera | Coastal Luxury Living",
  description: "Experience unparalleled coastal luxury at Estoril Riviera. Discover our exclusive legacy, world-class restaurants, and prestigious country club.",
  keywords: ["luxury real estate", "coastal living", "Estoril", "fine dining", "country club", "exclusive lifestyle"],
  authors: [{ name: "Estoril Riviera" }],
  openGraph: {
    title: "Estoril Riviera | Coastal Luxury Living",
    description: "Experience unparalleled coastal luxury at Estoril Riviera.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estoril Riviera | Coastal Luxury Living",
    description: "Experience unparalleled coastal luxury at Estoril Riviera.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-dark-lighter border-t border-dark-accent">
          <div className="section-container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-gold mb-4">Estoril Riviera</h3>
                <p className="text-light-muted text-sm leading-relaxed">
                  Where timeless elegance meets coastal sophistication.
                </p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-light-muted">
                  <li><a href="/legacy" className="hover:text-gold transition-colors">Legacy</a></li>
                  <li><a href="/restaurants" className="hover:text-gold transition-colors">Restaurants</a></li>
                  <li><a href="/country-club" className="hover:text-gold transition-colors">Country Club</a></li>
                  <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gold mb-4">Contact</h4>
                <address className="text-sm text-light-muted not-italic leading-relaxed">
                  Avenida Marginal, 8023<br />
                  2765-249 Estoril, Portugal<br />
                  <a href="tel:+351214680000" className="hover:text-gold transition-colors">+351 214 680 000</a>
                </address>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-dark-accent text-center">
              <p className="text-xs text-light-muted">
                &copy; {new Date().getFullYear()} Estoril Riviera. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
