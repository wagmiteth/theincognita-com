import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import DaoPage from './pages/DaoPage';
import ContactPage from './pages/ContactPage';
import TokenPage from './pages/TokenPage';
import ApplyPage from './pages/ApplyPage';
import HowToEstablishANetworkStatePage from './pages/Learn/HowToEstablishANetworkStatePage'; // Step 1: Import the component
import PodcastsPage from './pages/Learn/PodcastsPage'; // Step 1: Import the component




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="App-content"> {/* To always push footer to bottom */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/dao" element={<DaoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/apply" element={<ApplyPage />} />
           {/* New route for the Learn pages */}
           <Route path="/learn/how-to-establish-a-network-state" element={<HowToEstablishANetworkStatePage />} />
           <Route path="/learn/podcasts" element={<PodcastsPage />} />
          {/* Other routes go here */}
          </Routes>
          </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
