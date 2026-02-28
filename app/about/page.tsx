import NavBar from '@/components/shared/NavBar';
import Footer  from '@/components/shared/Footer';

import HeroAbout from '@/components/about/HeroAbout';
import Mission from '@/components/about/Mission';
import WhoWeAre from '@/components/about/WhoWeAre';
import RattiBio from '@/components/about/RattiBio';
import WhatWeDo from '@/components/about/WhatWeDo';
import OurVision from '@/components/about/OurVision';

export default function AboutPage() {
  return (
    <>
      <NavBar />

      <HeroAbout />
      <Mission />
      <WhoWeAre />
      <RattiBio />
      <WhatWeDo />
      <OurVision />

      <Footer />
    </>
  );
}
