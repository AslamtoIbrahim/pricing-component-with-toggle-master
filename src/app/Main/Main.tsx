'use client'
import React, { useState } from "react";
import Switch from "./Switch";
import pricingData from "./data";
import PriceCard from "./PriceCard";

const Main = () => {
  const [isMonthly, setisMonthly] = useState(false);
  const handleSwitch = (isOn : boolean) => {
    setisMonthly(isOn);
  }
  return (
    <div className="w-full bg-neutral-very-light-grayish-blue flex flex-col gap-12 items-center px-4 py-8 font-montser
    topBottom ">
      <section className="flex flex-col items-center text-center gap-8 ">
        <h1 className="text-neutral-grayish-blue text-2xl">Our Pricing</h1>
        <div className="flex items-center gap-4 text-neutral-light-grayish-blue text-sm">
          <p>Annually</p>
          <Switch onChange={handleSwitch}/>
          <p>Monthly</p>
        </div>
      </section>
      <section className="w-full flex flex-col gap-8">
        <PriceCard data={pricingData[0]}  isMonthly={isMonthly} />
        <PriceCard data={pricingData[1]} ispro={true} isMonthly={isMonthly} />
        <PriceCard data={pricingData[2]}  isMonthly={isMonthly} />
      </section>
    </div>
  );
};

export default Main;
