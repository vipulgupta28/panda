
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoAreWe from './components/WhoAreWe';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhoAreWe />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;