// App.js

import React from 'react';
import { data } from '../data';


const SubHeading = () => {
  return (
    <>
      {data.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold">{section.title}</h2>
          <ul className="list-none px-8 text-[1.2rem] mt-2">
            {section.items.map((item, idx) => {
              let isMainItem = typeof item === "string";
              return (
                <li key={idx} className={isMainItem ? "mt-3 list-disc list-outside" : "mt-3"}>
                  {isMainItem ? item : (
                    <ul className="listtype list-outside pl-8">
                      {item.map((subitem, subIdx) => (
                        <li className='mt-3' key={subIdx}>{subitem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SubHeading;
