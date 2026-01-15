import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white flex flex-col">
        <SiteHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
};

export default App;