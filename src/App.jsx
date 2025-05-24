import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { WhySection } from './components/WhySection.tsx';
import { SolutionSection } from './components/SolutionSection';
import { AboutSection } from './components/AboutSection';
import { WasteGuide } from './components/WasteGuide';
import { ReportForm } from './components/ReportForm';
import { VolunteerAgenda } from './components/VolunteerAgenda';
import { Footer } from './components/Footer';
// import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        <Hero></Hero>
        <NewsSection></NewsSection>
        <WhySection></WhySection>
        <SolutionSection></SolutionSection>
        <AboutSection></AboutSection>
        <WasteGuide></WasteGuide>
        <ReportForm></ReportForm>
        <VolunteerAgenda></VolunteerAgenda>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
