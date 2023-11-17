import React from 'react';

function ScrollTop() {
  return (
    <button
      className="scroll-container"
      onClick={() =>
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      data-aos="fade-in"
      data-aos-delay="800"
    >
      <img
        src="https://moonex.ibthemespro.com/assets/img/chevron-w.png"
        alt="arrow"
      />
    </button>
  );
}

export default ScrollTop;
