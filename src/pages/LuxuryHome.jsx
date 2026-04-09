import React from 'react';
import SmoothScroll from '../components/layout/SmoothScroll';
import LuxeNavbar from '../components/layout/LuxeNavbar';
import TurkishHero from '../components/sections/TurkishHero';
import HeritageStory from '../components/sections/HeritageStory';
import CollectionGrid from '../components/sections/CollectionGrid';
import GoldenCatalog from '../components/sections/GoldenCatalog';
import LuxeFooter from '../components/layout/LuxeFooter';

export default function LuxuryHome() {
  return (
    <SmoothScroll>
      <div className="relative bg-ivory min-h-screen">
        <LuxeNavbar />
        <main>
          <TurkishHero />
          <HeritageStory />
          <CollectionGrid />
          <GoldenCatalog />
        </main>
        <LuxeFooter />
      </div>
    </SmoothScroll>
  );
}
