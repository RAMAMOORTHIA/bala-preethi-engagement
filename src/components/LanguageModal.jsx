// src/components/LanguageModal.jsx
import React from "react";
import "./LanguageModal.css";

function LanguageModal({ onSelect }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Select Your Language / மொழியைத் தேர்ந்தெடுக்கவும்</h2>

        <button onClick={() => onSelect("en")}>
          English
        </button>

        <button onClick={() => onSelect("ta")}>
          தமிழ் (Tamil)
        </button>
      </div>
    </div>
  );
}

export default LanguageModal;