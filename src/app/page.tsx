'use client';

import React, { useState } from 'react';
// ImmersiveIntroModal kept imported for quick re-enabling in the future
// import ImmersiveIntroModal from '@/components/ImmersiveIntroModal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackIDE from '@/components/TechStackIDE';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#020202] text-white selection:bg-[#00ff66] selection:text-black">
      {/* Immersive Loader Modal (hidden for now as requested) */}
      {/* <ImmersiveIntroModal onEnter={() => {}} /> */}

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection onOpenResume={() => setResumeModalOpen(true)} />

      {/* About Section */}
      <AboutSection onOpenResume={() => setResumeModalOpen(true)} />

      {/* Tech Stack Interactive IDE */}
      <TechStackIDE />

      {/* Selected Projects Showcase */}
      <ProjectsSection />

      {/* Professional Experience */}
      <ExperienceSection />

      {/* Education */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
