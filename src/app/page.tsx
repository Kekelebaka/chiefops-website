import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solutions } from '@/components/sections/Solutions';
import { ChiefOpsOS } from '@/components/sections/ChiefOpsOS';
import { Proof } from '@/components/sections/Proof';
import { Process } from '@/components/sections/Process';
import { AIReady } from '@/components/sections/AIReady';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'ChiefOps — Business Operating Systems for South African Businesses',
  description:
    'ChiefOps builds AI-ready websites, sales funnels, client portals and automations for SA businesses. Start with a free ChiefOps audit.',
  alternates: {
    canonical: 'https://chiefops.co.za',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <ChiefOpsOS />
      <Proof />
      <Process />
      <AIReady />
      <FinalCTA />
    </>
  );
}
