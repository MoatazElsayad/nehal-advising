import { useState, useEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState('enter');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('exit');
    }
  }, [location, displayLocation]);

  const handleAnimEnd = () => {
    if (stage === 'exit') {
      setDisplayLocation(location);
      setStage('enter');
    }
  };

  return (
    <div
      className={`page-transition-wrapper ${stage === 'exit' ? 'is-exiting' : ''}`}
      onAnimationEnd={handleAnimEnd}
    >
      <Routes location={displayLocation} key={displayLocation.pathname}>
        {children}
      </Routes>
    </div>
  );
}