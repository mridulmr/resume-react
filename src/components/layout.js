import React from 'react';
import Header from './header';
import Footer from './footer';
import ScrollTop from '../elements/scrollTop';
import 'swiper/css';
import DotRing from '../elements/dotRing';

function Layout({ children }) {
  return (
    <div>
      <DotRing />
      <Header />
      <div className="spacer"></div>
      {children}
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
