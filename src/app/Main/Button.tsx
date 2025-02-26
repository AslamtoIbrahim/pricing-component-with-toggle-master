import React from "react";

type prop = {
  text: string;
  ispro?: boolean;
};
const Button = ({ text, ispro = false }: prop) => {
  return (
    <button
      className={`${
        ispro
          ? `bg-none bg-neutral-very-light-grayish-blue text-primary-to
        hover:bg-gradient hover:text-neutral-very-light-grayish-blue  hover:border-neutral-very-light-grayish-blue `
          : `bg-gradient text-neutral-very-light-grayish-blue 
        hover:bg-none hover:bg-white hover:text-primary-to hover:border-neutral-grayish-blue `
      } 
      hover:border-[0.5px] w-full uppercase  tracking-widest py-2 rounded-md text-sm 
      shadow-md lg:text-xl 
     `}
    >
      {text}
    </button>
  );
};

export default Button;
