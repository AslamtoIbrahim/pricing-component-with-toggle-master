'use client'
import React from "react";

type prop = {
  onChange?: (isOn: boolean) => void;
};
const Switch = ({ onChange }: prop) => {
  const [isOn, setIsOn] = React.useState(false);
  const handleClick = () => {
    setIsOn((prev) => !prev);
    onChange?.(!isOn);
  };
  return (
    <div
      onClick={handleClick}
      className="w-12 h-7 xl:w-16 xl:h-8 bg-gradient rounded-full flex items-center p-1 
    hover:bg-primary-from shadow-sm"
    >
      <div
        className={`w-5 h-5 xl:w-6 xl:h-6 bg-neutral-very-light-grayish-blue rounded-full
      transition duration-300 ease-in-out transform
        ${isOn ? "translate-x-5 xl:translate-x-8" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default Switch;
