import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[1005] h-[100%] relative z-[5]"
      />
      {/*Gradient Start */}
      <div className="" />
      <div className="" />
      <div className="" />
      {/*Gradient End */}
    </div>
  </section>
);

export default Billing;
