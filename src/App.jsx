import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProudctSection from './components/ProudctSection.jsx';
import AllProudcts from './components/AllProudcts.jsx';
import RateSection from './components/RateSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx';
import SaleSection from './components/SaleSection.jsx';
import Footer from './components/Footer.jsx';
import MainDepartment from './components/MainDepartment.jsx';
import PestSeler from './components/PestSeler.jsx';
import TradeMarks from './components/TradeMarks.jsx';
import BeautyTipsBlog from './components/BeautyTipsBlog.jsx';
import ShopByConcern from './components/ShopByConcern.jsx';
import SkinQuizBanner from './components/SkinQuizBanner.jsx';
import FAQAccordion from './components/FAQAccordion.jsx';
import HeroStory from './components/about/HeroStory.jsx';
import CoreValues from './components/about/CoreValues.jsx';
import StatsCounter from './components/about/StatsCounter.jsx';
import QualityPromise from './components/about/QualityPromise.jsx';
import TeamSection from './components/about/TeamSection.jsx';
import ContactHero from './components/contact/ContactHero.jsx';
import ContactForm from './components/contact/ContactForm.jsx';
import ContactInfoCard from './components/contact/ContactInfoCard.jsx';
import ReturnPolicyPage from './components/returnpolixy/ReturnPolicyPage.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <div className='app '>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <SaleSection />
                <PestSeler />
                <TradeMarks />
                <MainDepartment />
                <ShopByConcern />
                <ProudctSection />
                <SkinQuizBanner />
                <RateSection />
                <FeaturesSection />
                <BeautyTipsBlog />
                <FAQAccordion />

              </div>
            }
          />
          <Route
            path="/all-products"
            element={
              <AllProudcts />
            }
          />
          <Route
            path="/about"
            element={
              <div className="about_pages">
                <HeroStory />
                <CoreValues />
                <StatsCounter />
                <QualityPromise />
                <TeamSection />
              </div>
            }
          />
          <Route path="/returnpolicy"
            element={
              <ReturnPolicyPage />} />

          <Route
            path="/contact"
            element={
              <div className="contact_pages">
                <ContactHero />
                <ContactInfoCard />
                <ContactForm />
              </div>
            }
          />
        </Routes>

      </div>
      <Footer />
    </Router>
  )
}

export default App
