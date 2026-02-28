import NavBar from '@/components/shared/NavBar';
import Footer  from '@/components/shared/Footer';

import EventsHero from '@/components/events/EventsHero';
import Events from '@/components/events/Events';

export default function EventsPage() {
  return (
    <>
      <NavBar />

      <EventsHero />
      <Events />

      <Footer />
    </>
  );
}