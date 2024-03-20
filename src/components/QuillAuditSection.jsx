import React from "react";

const QuillAuditSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-left text-left align-middle justify-between mt-20 mb-20 px-10">
        <div className="w-auto md:w-1/2 pr-0 md:pr-8">
          <h3 className="text-[20px] leading-[30px] font-700 font-inter mb-2 bg-[#FFABC9]">
            Before QuillAudits
          </h3>
          <p className="text-[16px] font-400 font-poppins leading-[24px] text-[#00000A]">
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains.
          </p>
          <p className="text-[16px] font-400 font-poppins leading-[24px] text-[#00000A] pt-5">
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system's economic balance.
          </p>
        </div>
        <div className="w-auto md:w-1/2 pl-0 md:pl-8 md:border-l border-gray-300 pt-10 md:pt-0">
          <h3 className="text-[20px] leading-[30px] font-700 font-inter mb-2 bg-[#ABCDFF]">
            After QuillAudits
          </h3>
          <p className="text-[16px] font-400 font-poppins leading-[24px] text-[#00000A]">
            Implementation of reentrancy protection mechanisms.
          </p>
          <p className="text-[16px] font-400 font-poppins leading-[24px] text-[#00000A] pt-5">
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
    </>
  );
};

export default QuillAuditSection;
