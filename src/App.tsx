/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadGen from './components/LeadGen';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gradient-radial min-h-screen selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LeadGen />
      </main>
      <Footer />
    </div>
  );
}
