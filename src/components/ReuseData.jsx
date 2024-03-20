// UnauthorizedClaimCompound.js

import React from "react";
import { itemdata } from "../data";

const ReuseData = () => {
  return (
    <>
      {itemdata.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold">{section.title}</h2>
          <ol className="sublisttype list-outside px-8 text-[1.2rem] mt-2">
            {section.items.map((item, idx) => (
              <li className="mt-3" key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
};

export default ReuseData;
