import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="contact-us">
          <h2>We are always happy to hear from you.</h2>
          <p>
            <strong>Location:</strong> Paseo de Roxas, Makati, 1229 Kalakhang
            Maynila <br />
            <strong>Email:</strong> inquiry@healthsphere.com <br />
            <strong>Contact:</strong> +639394568974
          </p>
          <p className="footer-copyright">
            &copy; 2025 HealthSphere Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
