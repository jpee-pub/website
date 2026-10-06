import React from "react";
import estMendanCTA from "../assets/est_mendan_button.png";

interface EestiMendanCTAProps {
  href?: string;
  className?: string;
}

export const EestiMendanCTA: React.FC<EestiMendanCTAProps> = ({
  href = "https://docs.google.com/forms/d/e/1FAIpQLSe4SzZW0w_pslbPzqFWr1t3RL4i_D5M1u5nHg_4Zg53jfxqFw/viewform?usp=header",
  className = "fixed bottom-1.5 right-1.5 z-50 block w-[8.5rem] max-w-[calc(100vw-0.75rem)] overflow-hidden md:bottom-2 md:right-2 md:w-44 md:hover:scale-105 transition-transform duration-300 cursor-pointer",
}) => {
  return (
    <a
      id="cta-ee-mendan"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img src={estMendanCTA} alt="エストニア面談申し込み" className="w-full h-auto block" />
    </a>
  );
};

export default EestiMendanCTA;