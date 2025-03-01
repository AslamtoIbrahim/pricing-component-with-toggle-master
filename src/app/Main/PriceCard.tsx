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
  return <div className={`w-full min-w-[18rem] lg:min-w-[22rem] xl:min-w-[25rem] shadow-md font-montser flex flex-col items-center justify-center rounded-md px-8 py-8 gap-8
    lg:text-xl xl:text-2xl
    ${ispro ? `bg-gradient text-neutral-very-light-grayish-blue lg:py-12  lg:-mt-4 xl:py-16 xl:-mt-8 `:`bg-white text-neutral-grayish-blue `}`}>
    <h1 className="">{data.plan}</h1>
    <p className={`text-6xl xl:text-7xl ${ispro ? `text-neutral-very-light-grayish-blue`:`text-neutral-dark-grayish-blue`}`}>
      <span className="text-3xl align-middle xl:text-4xl">$</span>
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
