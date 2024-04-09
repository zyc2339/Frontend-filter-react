import React from "react";
import "./StPrLiBottomSection.css";

export default function BottomSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="stPrLiCoBottomSection">
      <button
        className="stPrLiCoButton"
        onClick={scrollToTop}
        id="stPrLiCoButton"
      >
        {"back To Top".toUpperCase()}
      </button>
    </div>
  );
}
