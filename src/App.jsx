import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importing all pages
import Home from './pages/Home';
import ExploreChallenges from './pages/ExploreChallenges';
import PredictionMarket from './pages/PredictionMarket';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ScrollToTop from './pages/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReportCover from './pages/ReportCover';

export default function App() {
  return (
    <Router>
     
        <ScrollToTop/>
        {/* Navbar और Footer हमेशा दिखेंगे, बस बीच का कंटेंट बदलेगा */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<ExploreChallenges />} />
            <Route path="/market" element={<PredictionMarket />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetailsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
             <Route path="/ReportCover" element={<ReportCover />} />
            {/* कोई गलत URL डाले तो वापस Home पर भेज दे */}
            <Route path="*" element={<Home />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          </Routes>
        </main>

        <Footer />
    
    </Router>
  );
}