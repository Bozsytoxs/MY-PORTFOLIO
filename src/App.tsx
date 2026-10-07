/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import LeadershipSection from './components/LeadershipSection';
import WritingSection from './components/WritingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* Sticky Navigation */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <About />
        <WhatIDo />
        <Projects />
        <SkillsSection />
        <TimelineSection />
        <LeadershipSection />
        <WritingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setIsCvOpen(true)} />

      {/* Interactive Curriculum Vitae Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
