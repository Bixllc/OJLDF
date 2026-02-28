import NavBar from '@/components/shared/NavBar';
import Footer  from '@/components/shared/Footer';

import LCHero from '@/components/learning-center/LCHero';
import Resources from '@/components/learning-center/Resources';

export default function EventsPage() {
  return (
    <>
      <NavBar />

      <LCHero />;
      <Resources />;

      <Footer />
    </>
  );
}