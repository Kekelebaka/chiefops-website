import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solutions } from '@/components/sections/Solutions';
import { ChiefOpsOS } from '@/components/sections/ChiefOpsOS';
import { Proof } from '@/components/sections/Proof';
import { Process } from '@/components/sections/Process';
import { AIReady } from '@/components/sections/AIReady';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'ChiefOps | AI-Powered Business Operating Systems',
  description:
    'ChiefOps builds AI-ready websites, sales funnels, client portals, automations and branded documents that make South African businesses look professional, sell faster, and run with control.',
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
