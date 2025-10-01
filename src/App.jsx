import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from './components/Card';
import Button from './components/Button';
import Logo from './components/Logo';
import Splash from './components/Splash';
import './App.css';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease forwards;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 20px;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 20px;
  }
`;
const Notaria = styled.p`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0 4px 12px rgba(0,0,0,0.45);
`;

const Buttons = styled.a``

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    // show splash for 5 seconds, then hide it
    const t = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // when main content is shown, play intro audio once
    if (!showSplash && !audioPlayed) {
      const intro = new Audio('/audio/audio.mp3');
      intro.volume = 0.9;
      intro.play().then(() => {
        setAudioPlayed(true);
      }).catch((err) => {
        // autoplay might be blocked by browser; silently ignore
        console.info('Audio playback prevented:', err);
      });
    }

    // Add a click listener to play audio on user interaction
    const handleUserInteraction = () => {
      if (!audioPlayed) {
        const intro = new Audio('/audio/audio.mp3');
        intro.volume = 0.9;
        intro.play().then(() => {
          setAudioPlayed(true);
        }).catch((err) => {
          console.info('Audio playback prevented:', err);
        });
      }
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [showSplash, audioPlayed]);

  return (
    <>
      {showSplash && <Splash />}
      {!showSplash && (
        <AppWrapper>
          <Notaria>Notaría 136</Notaria> 
          <Card />
          <ButtonContainer>
            <Button href="https://colegiodenotariosedomex.org.mx/tarjeta-notario?id=6" target="_blank" rel="noopener noreferrer">Tarjeta de contacto</Button>
            <div>
              <Button href="https://maps.app.goo.gl/ygZrxsZFaU1eJcrP8" target="_blank" rel="noopener noreferrer">Ubicación</Button>
              <Button href="https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2005/abr064.pdf" target="_blank" rel="noopener noreferrer">Nombramiento</Button>
            </div>
          </ButtonContainer>
          <LogoContainer>
            <Logo src="/logo1.png" alt="Logo 1" />
            <Logo src="/logo2.png" alt="Logo 2" />
          </LogoContainer>
        </AppWrapper>
      )}
    </>
  );
}

export default App;
