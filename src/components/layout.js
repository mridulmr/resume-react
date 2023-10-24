import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="spacer"></div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
