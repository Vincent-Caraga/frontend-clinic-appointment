import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2 id="welcome">Welcome to HealthSphere Clinic</h2>
      <div>
        <h2 id="about-us">About Us</h2>
        <h3 className="headline">
          Welcome to HealthSphere Clinic — Your Partner in Holistic Wellness
        </h3>
        <p className="description">
          At <em>HealthSphere Clinic</em>, we believe that true health is more
          than just the absence of illness — it's a balanced harmony of body,
          mind, and lifestyle. Founded with a mission to provide compassionate,
          personalized, and comprehensive care, HealthSphere Clinic is dedicated
          to helping individuals and families live healthier, happier lives.
          <br />
          Our team of skilled healthcare professionals offers a wide range of
          medical services, from preventive care and diagnostics to chronic
          disease management and wellness counseling. We combine modern medical
          technology with a patient-centered approach to ensure you receive the
          highest quality care tailored to your unique needs.
          <br />
          We are more than a clinic — we are a community where your well-being
          comes first. Whether you're visiting for a routine check-up or seeking
          guidance on your health journey, HealthSphere Clinic is here to
          support you every step of the way.
        </p>

        <hr />
        <h2 id="our-commitment">Our Commitment:</h2>
        <ul className="commitment-list">
          <li>Patient-first approach</li>
          <li>Ethical, evidence-based care</li>
          <li>Friendly and respectful service</li>
          <li>Continuous innovation and learning</li>
        </ul>

        <hr />
      </div>
    </div>
  );
};

export default Header;
