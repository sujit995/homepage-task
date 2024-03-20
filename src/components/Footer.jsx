import React from "react";
import FooterLogo from "../assets/images/Logo.png";
import Email from "../assets/images/Email.png";
import Telegram from "../assets/images/Telegram.png";
import Vector from "../assets/images/Vector.png";
import { links, links2 } from "../data";
import Image1 from "../assets/images/Image 1.png";
import Image2 from "../assets/images/Image 2.png";
import X from "../assets/images/X.png";
import Linkedin from "../assets/images/linkedin.png";
import Reddit from "../assets/images/reddit.png";
import Discord from "../assets/images/discord.png";
import Medium from "../assets/images/Medium.png";
import Youtube from "../assets/images/youtube.png";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative pb-20 bg-image flex flex-col items-center justify-center gap-10 px-8 pt-12 text-[#F1F1F1] md:items-start md:justify-start lg:px-36">
      <div className="flex w-full flex-row flex-wrap items-center justify-center md:justify-between gap-0 md:gap-6">
        <div>
          <img
            alt="QuillAudits Logo"
            loading="lazy"
            width="254"
            height="68"
            src={FooterLogo}
          />
        </div>
        <div className="grid w-full grid-cols-2 flex-col items-start justify-start gap-4 text-center text-sm md:flex md:w-auto md:flex-row mt-10 sm:mt-0">
          <Button text="Refer-Earn-Secure" />
          <Button text="WAGSI Grants" />
          <Button text="Be Our Ambassador" />
          <Button text="Become a Partner" />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-10 md:gap-12 xl:grid-cols-5">
        <div className="hidden flex-col gap-8 md:flex">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">
                More About Quill
              </h2>
              <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
            </div>
            <div className="flex flex-col gap-3">
              <a className="text-sm" href="/about-us">
                About Us
              </a>
              <a className="text-sm" href="/faqs">
                FAQs
              </a>
              <a className="text-sm" href="/blockchains-we-audit">
                Blockchains We Audit
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Contact Us:</h3>
            <div className="flex flex-row items-center justify-start gap-2">
              <img
                alt="Email icon"
                loading="lazy"
                width="18"
                height="18"
                src={Email}
              />
              <a
                className="italic underline"
                href="mailto:audits@quillhash.com"
              >
                audits@quillhash.com
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <img
                alt="Telegram Icon"
                loading="lazy"
                width="18"
                height="18"
                src={Telegram}
              />
              <a className="italic underline" href="https://t.me/quillaudits">
                t.me/quillaudits
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-start gap-1">
              <img
                alt="Vector Icon"
                loading="lazy"
                width="18"
                height="18"
                src={Vector}
              />
              <div className="font-medium">Our Location:</div>
            </div>
            <p>
              Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
              Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
              416654
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">Audit Services</h2>
              <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
            </div>
            <div className="flex flex-col gap-3">
              {links.map((item, i) => (
                <a key={i} className="text-sm" href={item.links}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">
                Quill Ecosystem
              </h2>
              <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
            </div>
            <div className="flex flex-col gap-3">
              {links2.map((item, i) => (
                <a key={i} className="text-sm" href={item.links}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">Other Services</h2>
              <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
            </div>
            <div className="flex flex-col gap-3">
              {links2.map((item, i) => (
                <a key={i} className="text-sm" href={item.links}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">Quick Links</h2>
              <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
            </div>
            <div className="flex flex-col gap-3">
              {links2.map((item, i) => (
                <a key={i} className="text-sm" href={item.links}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:hidden">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-white">More About Quill</h2>
            <div className="h-[2px] w-16 rounded-full bg-[#2D83EE]"></div>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-sm" href="/about-us">
              About Us
            </a>
            <a className="text-sm" href="/faqs">
              FAQs
            </a>
            <a className="text-sm" href="/blockchains-we-audit">
              Blockchains We Audit
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Contact Us:</h3>
          <div className="flex flex-row items-center justify-start gap-2">
            <img
              alt="Email icon"
              loading="lazy"
              width="18"
              height="18"
              src={Email}
            />
            <a className="italic underline" href="mailto:audits@quillhash.com">
              audits@quillhash.com
            </a>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img
              alt="Telegram Icon"
              loading="lazy"
              width="18"
              height="18"
              src={Telegram}
            />
            <a className="italic underline" href="https://t.me/quillaudits">
              t.me/quillaudits
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-start gap-1">
            <img
              alt="Vector Icon"
              loading="lazy"
              width="18"
              height="18"
              src={Vector}
            />
            <div className="font-medium">Our Location:</div>
          </div>
          <p>
            Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin
            Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
            416654
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-row items-center justify-start gap-4">
          <img
            src={Image2}
            alt="DSA Member"
            loading="lazy"
            className="h-[52px] w-[140px] md:w-[184px]"
          />
          <img
            src={Image1}
            alt="TS Gov"
            loading="lazy"
            className="h-[52px] w-[140px] md:w-[184px]"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <img
            src={X}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Linkedin}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Telegram}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Reddit}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Medium}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Discord}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
          <img
            src={Youtube}
            alt="Social Links"
            loading="lazy"
            width="24"
            height="24"
          />
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-4 border-t-[2px] border-white/10 py-4 text-xs md:flex-row">
        <p>All Rights Reserved. © Copyright 2024. QuillAudits - LLC</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
