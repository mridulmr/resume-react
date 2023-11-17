import { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const DotRing = () => {
  const [trailX, setTrailX] = useState(0);
  const [trailY, setTrailY] = useState(0);
  const { x, y } = useMousePosition();

  useEffect(() => {
    setTimeout(() => {
      setTrailX(x);
      setTrailY(y);
    }, 200);
  }, [x, y]);

  return (
    <>
      <div
        style={{ left: `${trailX}px`, top: `${trailY}px` }}
        className="ring"
      ></div>
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
