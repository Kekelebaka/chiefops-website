import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solutions } from '@/components/sections/Solutions';
import { ChiefOpsOS } from '@/components/sections/ChiefOpsOS';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solutions />
      <ChiefOpsOS />
      <Pricing />
      <FAQ />
    </main>
  );
}
