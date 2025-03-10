import React from "react";
import "./Careers.css";

const Careers: React.FC = () => {
  return (
    <section id="careers">
      <div className="image-container wide">
        <img src="/elements/assets/images/image01.jpg" alt="Careers Background" />
        <div className="overlay">
          <h2>ZMEŇ SVOJ ŽIVOT VO SVOJEJ KARIÉRE</h2>
        </div>
      </div>

      <div className="image-container small">
        <img src="/elements/assets/images/image02.jpg" alt="Careers Background" />
        <div className="overlay">
          <h2>ZMEŇ SVOJ ŽIVOT VO SVOJEJ KARIÉRE</h2>
        </div>
      </div>

      <div className="image-container small">
        <img src="/elements/assets/images/image03.jpg" alt="Careers Background" />
        <div className="overlay">
          <h2>ZMEŇ SVOJ ŽIVOT VO SVOJEJ KARIÉRE</h2>
        </div>
      </div>
      
      <div className="image-container large">
        <img src="/elements/assets/images/image04.jpg" alt="Careers Background" />
        <div className="overlay">
          <h2>ZMEŇ SVOJ ŽIVOT VO SVOJEJ KARIÉRE</h2>
        </div>
      </div>
    </section>
  );
};

export default Careers;
