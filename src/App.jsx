import { HeroSection } from './features/HeroSection';
import { FeatureSection } from './features/FeatureSection';
import { ContactSection } from './features/ContactSection';

export function App() {
  return (
    <>
      <main>
        <HeroSection />
        <FeatureSection />
        <ContactSection />
      </main>
    </>
  );
}
