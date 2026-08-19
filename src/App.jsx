import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageModal from "./components/LanguageModal";
import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Quickball from "./components/Quickball";
import Footer2 from "./components/Footer2";
import GiftWrapper from "./components/GiftWrapper";
import LoveBackground from "./components/Backround/LoveBackground";

import audio from "./assets/audio.mp3";

import "./App.css";

function App() {
  const audioRef = useRef(null);

  const { i18n } = useTranslation();

  const [showModal, setShowModal] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const [isUnwrapped, setIsUnwrapped] = useState(false);

  useEffect(() => {
    localStorage.removeItem("giftOpened");
  }, []);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);

    localStorage.setItem("language", lang);

    setShowModal(false);

    startMusic();

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  const handleGiftUnwrap = () => {
    setIsUnwrapped(true);

    localStorage.setItem("giftOpened", "true");
  };

  return (
    <div>
      <audio ref={audioRef} src={audio} loop />

      {showModal && (
        <LanguageModal onSelect={handleLanguageSelect} />
      )}

      {!showModal && !isUnwrapped && (
        <GiftWrapper
          onUnwrap={handleGiftUnwrap}
          startMusic={startMusic}
        />
      )}

      {!showModal && isUnwrapped && (
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
          }}
        >
          <LoveBackground />

          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Header showConfetti={showConfetti} />
            <CoupleSection />
            <Quickball />
            <CountdownTimer />
            <EventDetails />
            <MapSection />
            <Footer2 />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;