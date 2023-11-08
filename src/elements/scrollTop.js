import React from 'react';

function ScrollTop() {
  return (
    <button
      className="scroll-container"
      onClick={() =>
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    >
      <img src="https://moonex.ibthemespro.com/assets/img/chevron-w.png" />
    </button>
  );
}

export default ScrollTop;
