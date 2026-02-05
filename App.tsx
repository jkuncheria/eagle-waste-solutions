import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ResidentialWasteRemoval from './pages/ResidentialWasteRemoval';
import CommercialWasteRemoval from './pages/CommercialWasteRemoval';
import JunkRemoval from './pages/JunkRemoval';
import HotTubRemoval from './pages/HotTubRemoval';
import FurniturePickupHauling from './pages/FurniturePickupHauling';
import ApplianceDisposal from './pages/ApplianceDisposal';
import ConstructionDebrisRemoval from './pages/ConstructionDebrisRemoval';
import GarageCleanouts from './pages/GarageCleanouts';
import GreenWasteDisposal from './pages/GreenWasteDisposal';
import HoarderHouseCleanouts from './pages/HoarderHouseCleanouts';
import MattressDisposal from './pages/MattressDisposal';
import BusinessOfficeCleanouts from './pages/BusinessOfficeCleanouts';
import CardboardDisposal from './pages/CardboardDisposal';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/residential-waste-removal" element={<ResidentialWasteRemoval />} />
            <Route path="/commercial-waste-removal" element={<CommercialWasteRemoval />} />
            <Route path="/junk-removal" element={<JunkRemoval />} />
                        <Route path="/hot-tub-removal" element={<HotTubRemoval />} />
            <Route path="/furniture-pickup-hauling" element={<FurniturePickupHauling />} />
            <Route path="/appliance-disposal" element={<ApplianceDisposal />} />
            <Route path="/construction-debris-removal" element={<ConstructionDebrisRemoval />} />
            <Route path="/garage-cleanouts" element={<GarageCleanouts />} />
            <Route path="/green-waste-disposal" element={<GreenWasteDisposal />} />
            <Route path="/hoarder-house-cleanouts" element={<HoarderHouseCleanouts />} />
            <Route path="/mattress-disposal" element={<MattressDisposal />} />
            <Route path="/business-office-cleanouts" element={<BusinessOfficeCleanouts />} />
            <Route path="/cardboard-disposal" element={<CardboardDisposal />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Integrated Gemini AI Assistant */}
      <AIChat />
    </div>
    </Router>
  );
};

export default App;