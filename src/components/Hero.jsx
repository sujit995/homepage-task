import React from "react";
import HeroImage from "../assets/images/hero.png";
import Pension from "../assets/images/CD-Pension.png";
import PensionBlack from '../assets/images/CD-Pension-black.png'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pb-20">
      <div className="w-full md:max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between mt-[185px] gap-10">
        <div className="w-full md:w-1/2 relative">
          <img src={HeroImage} alt="hero_img" className="h-auto md:h-[520px] w-auto md:w-[555px]" />
          <img src={PensionBlack} alt="Ipension" className="hidden md:flex absolute z-10 top-[40px] left-[420px] bg-white p-[10px] rounded-[5px]" />
          <div className="absolute top-1/2 md:top-[197px] text-white">
            <img src={Pension} alt="Ipension" className="px-10 md:pl-[59px] w-auto md:w-[438px]" />
            <p className="hidden md:flex mt-0 md:mt-10 text-lg px-10">Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-0 md:mt-[85px] px-5 md:px-0">
          <h1 className="text-[36px] md:text-[48px] leading-[43px] md:leading-[57.6px] font-500 text-white mb-10">Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension</h1>
          <p className="text-[20px] text-white leading-[30px] font-400 font-poppins">
          QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
