import React from "react";
import { assets } from "../../assets/assets";
import "./Doctors.css";

const Doctors = () => {
  return (
    <>
      <section>
        <h1 className="top-notch">Our Excellent Physicians</h1>
        <div className="container">
          <div className="image">
            <img src={assets.doctor_1} alt="" />
          </div>
          <div className="description">
            <h2>Dr. Rebecca Smith</h2>
            <h3>Cardiologist</h3>
            <p>
              A board-certified cardiologist with over 15 years of experience.
              She specializes in preventive cardiology and heart failure
              management, and currently practices at a leading medical center in
              Quezon City.
            </p>
          </div>
        </div>

        <div id="container_2">
          <div className="image">
            <img src={assets.doctor_2} alt="" />
          </div>
          <div className="description">
            <h2>Dr. Mark Anthony Santos</h2>
            <h3>ENT Specialist </h3>
            <p>
              a board-certified ENT (Otolaryngologist) with expertise in
              treating sinus disorders, hearing loss, and voice conditions. He
              practices at a major hospital in Quezon City and is known for
              combining surgical skill with a compassionate, patient-first
              approach.
            </p>
          </div>
        </div>

        <div id="container_3">
          <div className="image">
            <img src={assets.doctor_3} alt="" />
          </div>
          <div className="description">
            <h2>Dr. Emily Lee</h2>
            <h3>Pediatrician </h3>
            <p>
              A board-certified pediatrician with over 10 years of experience
              caring for infants, children, and adolescents. She specializes in
              preventive care, childhood development, and managing chronic
              conditions such as asthma and diabetes. Dr. Lee practices at a
              family health clinic in Makati City, and is known for her warm,
              approachable style and dedication to building lasting
              relationships with families. Highlight her medical training,
              clinical focus, and commitment to child wellness.
            </p>
          </div>
        </div>

        <div id="container_4">
          <div className="image">
            <img src={assets.doctor_4} alt="" />
          </div>
          <div className="description">
            <h2>Dr. John Ricky Chua</h2>
            <h3>Internal Medicine </h3>
            <p>
              A board-certified internal medicine physician with a strong focus
              on adult primary care, chronic disease management, and preventive
              health. With over 12 years of clinical experience, Dr. Chua
              practices at a multidisciplinary medical center in Mandaluyong
              City. He is known for his evidence-based approach, thorough
              diagnostics, and strong patient-provider relationships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
