import NavBar from '../components/shared/NavBar';
import Hero from '../components/home/Hero';
import HurricaneRelief from '../components/home/HurricaneRelief';
import Stats from '../components/home/Stats';
import ImportantInitiatives from '../components/home/ImportantInitiatives';
import Serve from '../components/home/Serve';
import RecapComeReasonWithRattigan from '../components/home/RecapComeReasonWithRattigan';
import RecapReasonWithRattigan from '../components/home/RecapReasonWithRattigan';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Footer from '../components/shared/Footer';


export default function Page() {
  return (
    <>
      <NavBar />;
      <Hero />;
      <HurricaneRelief />;
      <Stats />;
      <ImportantInitiatives />;
      <Serve />;
      <RecapComeReasonWithRattigan />;
      <UpcomingEvents />;
      <Footer />;
    </>
  )
}


