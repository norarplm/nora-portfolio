"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import LoadingScreen from "@/components/loading-screen";
import Sidebar from "@/components/sidebar";
import SocialSidebar from "@/components/social-sidebar";
import ScrollToTop from "@/components/scroll-to-top";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CatPawsBackground from "@/components/cat-paws-background";
import MobileNav from "@/components/mobile-nav";
import CurrentTime from "@/components/CurrentTime";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Preload click sound
    const clickSound = new Audio("/sounds/click.mp3");
    clickSound.preload = "auto";

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Nora Wang | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen bg-cream text-dark-brown">
        <CatPawsBackground />
        {/* Desktop: Sidebar, SocialSidebar, and ScrollToTop */}
        {!isMobile && (
          <>
            <Sidebar />
            <SocialSidebar />
            <ScrollToTop />
          </>
        )}
        {/* Mobile: Mobile Navigation */}
        {isMobile && <MobileNav />}
        {/* Fixed Current Time display */}
        <div className="fixed top-4 left-4 z-40">
          <CurrentTime />
        </div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
