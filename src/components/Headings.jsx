import React from "react";
import Content from "../assets/images/content.png";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
const Headings = () => {
  return (
    <>
      <div className="justify-center align-middle text-center items-center w-full md:max-w-[50%] px-5 mx-auto">
        <p className="font-700 text-[36px] leading-[39px] font-jost text-[#0E3088] mb-10">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </p>
        <Button text="Request An Audits" />
      </div>
      <div className="flex flex-col md:flex-row justify-start align-middle text-left items-center w-full md:max-w-[70%] gap-10 mx-auto mt-10 px-5">
        <div className="w-full md:w-[60%] order-2 md:order-1 text-left">
          <Paragraph
            para={`Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.`}
          />
          <Title
            title={"CarpeDiem Pension's Flexible, Blockchain-Enabled Future"}
          />
        </div>
        <div className="w-full md:w-[30%] order-1 md:order-2">
          <img src={Content} alt="" />
        </div>
      </div>
    </>
  );
};

export default Headings;
