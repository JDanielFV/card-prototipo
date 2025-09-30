import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const fadeOpacity = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SplashWrap = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; /* splash background changed to black */
  z-index: 2000;
  /* keep visible; animation will be applied inline via class */
`;

const Logo = styled.img`
  width: 220px;
  max-width: 60%;
  animation: ${fadeIn} 1.5s ease-out both, ${fadeOpacity} 2s ease-in-out forwards;
  filter: brightness(1.3);
`;

const Hidden = styled(SplashWrap)`
  animation: ${fadeOut} 0.6s ease-in forwards;
`;

const Splash = ({ hidden }) => {
  if (hidden) return <Hidden />; // empty container to play fadeOut if needed
  return (
    <SplashWrap>
      <Logo src="/splash.png" alt="Notaría 136" />
    </SplashWrap>
  );
};

export default Splash;
