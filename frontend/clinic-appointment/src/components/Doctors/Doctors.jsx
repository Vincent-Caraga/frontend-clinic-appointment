import React from "react";
import { assets } from "../../assets/assets";

const Doctors = () => {
  return (
    <section>
      <div className="doctors-list">
        <div>
          <img src={assets.doctor_1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
