import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Cases } from '@/components/Cases';
import { PartnerProgram } from '@/components/PartnerProgram';
import { Calculator } from '@/components/Calculator';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-24 px-6 pb-16 pt-10">
      <Hero />
      <Services />
      <Cases />
      <PartnerProgram />
      <Calculator />
      <CTA />
      <Footer />
    </main>
  );
}
