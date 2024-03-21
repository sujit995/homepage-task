import React from "react";
import Object from "../assets/images/OBJECTS.png";
import Button from "./Button";

const EmailSec = () => {
  return (
    <>
      <div className="hidden md:flex w-full bg-gradient-to-r from-blue-50 to-gray-400 py-20">
        <div className="w-full md:max-w-[70%] flex flex-col md:flex-row justify-center items-center align-middle text-center mx-auto gap-10">
          <div className="w-full md:w-1/2 flex flex-col text-left">
            <h4 className="text-[22px] font-bold text-[#407AFF] font-inter">
              NEWSLETTER
            </h4>
            <h3 className="text-[48px] font-jost font-semibold text-[#14316C] mt-10">
              Security First News Letter by QuillAudits
            </h3>
            <p className="text-[16px] font-normal font-poppins leading-[24px] text-[#2D3648] mt-10">
              Subscribe for the most Exclusive Weekly security based newsletter
              and covering all the recent hacks up to date.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <img src={Object} alt="IObject" />
            <div className="relative">
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-300 rounded-[5px]"
                placeholder="Enter your text..."
              />
              <div className="absolute inset-y-0 right-1 top-1">
                <Button text="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center justify-center mx-auto my-10 px-12">
        <h3 className="text-[16px] font-normal relative">
          Security First Newsletter by QuillAudits
        </h3>
        <hr className="w-[66px] h-[1.65px] rounded-[11px] bg-[#2D83EE] mt-2" />
        <img className="mt-5" src={Object} alt="iobject" />
        <p className="text-[16px] font-normal align-middle text-center mt-5">
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
          your Inbox. Explore our weekly newsletter: HashingBits. Stay updated
          on everything we&#39;re publishing. Stand a step ahead.
        </p>
        <input
          type="text"
          className="w-full px-3 py-3 border border-gray-300 rounded-[5px] mt-5 mb-5"
          placeholder="Enter your text..."
        />
        <Button text="Subscribe" />
      </div>
    </>
  );
};

export default EmailSec;
