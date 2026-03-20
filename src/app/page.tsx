"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Zap, Sparkles, Wind, Shield, Droplet, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Nike"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Nike"
          description="Experience the Future of Athletic Performance. Revolutionary shoe technology engineered for champions. Where innovation meets excellence on every stride."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Explore Collection", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="blur-reveal"
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/ultra-premium-nike-running-shoes-in-dyna-1773987252297-78b78441.png?_wi=1"
          imageAlt="Nike premium running shoes in cinematic pose"
          mediaAnimation="slide-up"
          frameStyle="card"
          ariaLabel="Nike hero section featuring premium athletic shoes"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Legacy"
          tagIcon={Award}
          tagAnimation="slide-up"
          title="Crafted for Champions"
          description="Since 1972, Nike has been pushing the boundaries of athletic innovation. We believe in the power of sport to transform lives and the importance of creating products that inspire greatness in every athlete."
          subdescription="Our commitment to excellence drives us to research, develop, and test every shoe design with elite athletes and everyday users alike."
          icon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/ultra-premium-nike-running-shoes-in-dyna-1773987252297-78b78441.png?_wi=2"
          imageAlt="Nike shoe innovation and design philosophy"
          mediaAnimation="opacity"
          useInvertedBackground={false}
          ariaLabel="About Nike section highlighting brand legacy and innovation"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Premier Shoe Collection"
          description="Discover our full range of revolutionary athletic footwear engineered for peak performance and all-day comfort."
          tag="Featured Products"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          buttons={[{ text: "View All", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "airmax",              name: "Air Max Pro",              price: "$199.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/nike-air-max-shoe-with-visible-cushionin-1773987252180-f79a90db.png",              imageAlt: "Nike Air Max Pro shoe",              isFavorited: false,
              initialQuantity: 1
            },
            {
              id: "basketball",              name: "Court Elite",              price: "$249.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/nike-basketball-shoes-in-profile-view-sh-1773987252531-8efd540f.png",              imageAlt: "Nike Court Elite basketball shoe",              isFavorited: false,
              initialQuantity: 1
            },
            {
              id: "soccer",              name: "Soccer Master",              price: "$229.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/nike-soccer-football-shoe-with-emphasis--1773987253035-7ba2ee2b.png",              imageAlt: "Nike Soccer Master football shoe",              isFavorited: false,
              initialQuantity: 1
            }
          ]}
          ariaLabel="Nike premium shoe collection showcase"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Technology That Elevates Performance"
          description="Every Nike shoe combines cutting-edge technology with athlete-tested design to deliver unmatched performance and comfort."
          tag="Innovation"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Wind,
              title: "Air Cushioning",              description: "Responsive air units that absorb impact and provide energy return for every step and stride."
            },
            {
              icon: Shield,
              title: "Advanced Support",              description: "Engineered arch support and lateral stability systems for enhanced control and injury prevention."
            },
            {
              icon: Zap,
              title: "Lightweight Design",              description: "Premium materials engineered for minimal weight without compromising durability or performance."
            },
            {
              icon: Droplet,
              title: "Moisture Control",              description: "Breathable mesh and moisture-wicking linings keep feet dry and comfortable during intense activity."
            }
          ]}
          ariaLabel="Nike shoe technology features highlighting innovation"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Nike By The Numbers"
          tag="Global Impact"
          tagAnimation="blur-reveal"
          useInvertedBackground={true}
          metricsAnimation="slide-up"
          metrics={[
            { id: "1", value: "50M+", description: "Athletes Worldwide Trusting Nike" },
            { id: "2", value: "190+", description: "Countries Where Nike Operates" },
            { id: "3", value: "100+", description: "Years of Athletic Innovation" }
          ]}
          ariaLabel="Nike achievement metrics and global reach statistics"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Nike shoes transformed my training regimen. The comfort and support allowed me to focus on performance rather than foot pain. I've never felt more confident on the track."
          rating={5}
          author="Sarah Chen"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/professional-athlete-portrait-headshot-c-1773987252135-379fef93.png",              alt: "Sarah Chen professional athlete"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/diverse-professional-athlete-portrait-de-1773987254161-1b67aaf4.png",              alt: "Professional athlete endorsement"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/young-athlete-portrait-with-dynamic-ener-1773987252199-ca39405f.png",              alt: "Young athlete testimonial"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCJYjSQsG75IXEduUXSTVLAoKZ/elite-athlete-portrait-showing-expertise-1773987252067-81f7b886.png",              alt: "Elite athlete professional portrait"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="Nike customer testimonial from professional athlete"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Join the Nike Community"
          description="Subscribe to our newsletter for exclusive product launches, training tips, and special offers for our elite community."
          tagIcon={Mail}
          tagAnimation="blur-reveal"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive Nike updates and special offers. You can unsubscribe anytime."
          ariaLabel="Nike newsletter signup and community contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Nike"
          copyrightText="© 2025 Nike, Inc. | All Rights Reserved"
          columns={[
            {
              title: "Products",              items: [
                { label: "Running Shoes", href: "#products" },
                { label: "Basketball", href: "#products" },
                { label: "Soccer", href: "#products" },
                { label: "Training", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Nike", href: "#about" },
                { label: "Careers", href: "#" },
                { label: "Sustainability", href: "#" },
                { label: "News", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Help Center", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Size Guide", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          ariaLabel="Nike footer with navigation and company information"
        />
      </div>
    </ThemeProvider>
  );
}