import React from 'react';
import Header from './header';
import Footer from './footer';
import ScrollTop from '../elements/scrollTop';
import "swiper/css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="spacer"></div>
      {children}
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
