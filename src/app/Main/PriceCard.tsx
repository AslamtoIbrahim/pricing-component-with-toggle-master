import React from "react";
import Button from "./Button";


interface pricing {
  plan: string;
  monthlyPrice: string;
  yearlyPrice: string;
  storage: string;
  users: string;
  transfer: string;
  action: string;
}

type prop = {
    data: pricing; 
    isMonthly?: boolean;
    ispro?: boolean;
}
const PriceCard = ({data, isMonthly , ispro} : prop) => {
  return <div className={`w-full shadow-md font-montser flex flex-col items-center rounded-md py-8 px-8 gap-8
    ${ispro ? `bg-gradient text-neutral-very-light-grayish-blue`:`bg-white text-neutral-grayish-blue `}`}>
    <h1>{data.plan}</h1>
    <p className={`text-6xl ${ispro ? `text-neutral-very-light-grayish-blue`:`text-neutral-dark-grayish-blue`}`}>
      <span className="text-3xl align-middle">$</span>
      {isMonthly ? data.monthlyPrice : data.yearlyPrice}
    </p>
    <section className="flex flex-col items-center gap-4 w-full">
      <hr className="line " />
      <p>{data.storage}</p>
      <hr className="line "/>
      <p>{data.users}</p>
      <hr className="line " />
      <p>{data.transfer}</p>
      <hr className="line " />
    </section>
    <Button text={data.action} ispro={ispro} />
  </div>;
};

export default PriceCard;
