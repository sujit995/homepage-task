import React from "react";
import ContentImg from "../assets/images/image-17.png";
import Screenshot from "../assets/images/Screenshot.png";
import Title from "./Title";
import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";
import ReuseData from "./ReuseData";
import { impactData } from "../data";
import Group from '../assets/images/Group.png';

const Content = () => {

  return (
    <>
    <div className="flex flex-col justify-left align-middle text-left items-left w-full md:max-w-[60%] px-5">
      <Paragraph
        para={`CarpeDiem Pension redefines retirement planning with a unique
        approach that deviates from traditional pension funds. With no
        minimum age for retirement, it offers flexibility and freedom,
        ensuring all genders receive equal treatment. CarpeDiem Pension
        ensures blockchain transparency, anonymity, and global
        accessibility, safeguarding pensions during international
        relocation. Easily transfer pensions to loved ones; share wallet
        access. Re-deposit payouts for increased future benefits.
        Importantly, CarpeDiem Pension prioritizes deposit security by
        avoiding utilizing client funds for internal investments. To become
        a part of this forward-thinking pension scheme, one simply needs to
        install and configure a blockchain wallet.`}
      />
      <img src={ContentImg} alt="Icontent"/>
      <Title
        title={
          "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting"
        }
      />
      <img src={Screenshot} alt="Icontent"/>
      <Title title={"CarpeDiem Pension's Journey Through our Audit Process"} />
      <SubHeading />
      <Title
        title={
          "QuillAudits' Strategic Approach to CDP Security Audits"
        }
      />
      <Paragraph
        para={`We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.`}
      />
       <Title
        title={
          "Comprehensive Audit Discoveries and Remediation Strategies"
        }
      />
       <Paragraph
        para={`Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :`}
      />
      <ReuseData />
      <Title title="Remediation & Impact:" />
      <Paragraph
        para="All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include"
      />
      <>
      {impactData.map((section, index) => (
        <div key={index}>
          <ol className="list-disc list-outside px-8 text-[1.2rem] mt-2">
              <li className="mt-3">{section.items}</li>
          </ol>
        </div>
      ))}
      </>
      <Paragraph para="CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust." />
      <img className="mt-20 mb-10" src={Group} alt="Igroup" />
    </div>
    </>
  );
};

export default Content;
