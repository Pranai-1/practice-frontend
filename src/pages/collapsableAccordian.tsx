import React, { useState } from "react";

export default function Accordian() {
  const [sections, setSections] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // Function to toggle collapsible section
  const toggleSection = (sectionNumber: any) => {
    setSections((prevSections:any) => ({
      ...prevSections,
      [sectionNumber]: !prevSections[sectionNumber],
    }));
  };

  return (
    <div className="h-[707px] w-full bg-black p-2">
      {/* Render section 1 */}
      <div className="h-max w-[600px] font-medium text-black bg-red-500  p-2 my-2 mx-9">
        <div className="flex justify-between">
          <span className="p-2 m-2">Click here</span>
          <span
            className="p-2  ml-2 cursor-pointer text-2xl"
            onClick={() => toggleSection(1)}
          >
            {sections[1] ? "-" : "+"}
          </span>
        </div>
        {sections[1] && <p>You have clicked</p>}
      </div>

      {/* Render section 2 */}
      <div className="h-max w-[600px] font-medium text-black bg-red-500  p-2 my-2 mx-9">
        <div className="flex justify-between">
          <span className="p-2 m-2">Click here</span>
          <span
            className="p-2  ml-2 cursor-pointer text-2xl"
            onClick={() => toggleSection(2)}
          >
            {sections[2] ? "-" : "+"}
          </span>
        </div>
        {sections[2] && <p>You have clicked</p>}
      </div>

      {/* Collapsible Accordian */}
      <p className="font-bold text-2xl text-green-600 mt-10">
        Collapsible Accordian
      </p>
      <div className="h-max w-[600px] font-medium text-black bg-green-500  p-2 m-10">
        {[3, 4, 5].map((sectionNumber) => (
          <div key={sectionNumber}>
            <div className="flex justify-between">
              <span className="p-2 m-2">Click here collapsable {sectionNumber}</span>
              <span
                className="p-2  ml-2 cursor-pointer text-2xl"
                onClick={() => toggleSection(sectionNumber)}
              >
                {sections[sectionNumber] ? "-" : "+"}
              </span>
            </div>
            {sections[sectionNumber] && <p>collapsable {sectionNumber}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
