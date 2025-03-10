import React, { useEffect, useRef, useState } from "react";
import "./CTA.css";
import MenuIcon from "../../components/MenuIcon";
import Ornament from "../../components/Ornament";

const CTA: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Toto pole musí byť vyplnené";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Toto pole musí byť vyplnené";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Toto pole musí byť vyplnené";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Správa musí obsahovať aspoň 10 znakov";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Správa musí obsahovať aspoň 10 znakov";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("Formulár odoslaný!");
    }
  };

  const ctaInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0 }
    );

    if (ctaInfoRef.current) {
      observer.observe(ctaInfoRef.current);
    }

    return () => {
      if (ctaInfoRef.current) {
        observer.unobserve(ctaInfoRef.current);
      }
    };
  }, []);

  return (
    <section id="cta">
      <div className="container">
        <MenuIcon />
        <div className="cta-header">
          <img className="cta-header-img" src="/elements/images/header-contact.png" alt="Contact header" />
          <h1>KONTAKT</h1>
          <h6>LEONIDES</h6>
          <Ornament />
        </div>
        <div className="cta-info" ref={ctaInfoRef}>
          <p>ADDRESA <em>LEVOCSKA 5, PRESOV, 080 01</em></p>
          <p>TELEFON <em>+421 905 181 972</em></p>
          <p>MESTO <em>PRESOV / SLOVAKIA</em></p>
          <div className="line"></div>
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="form-group-left">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="MENO"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="TELEFON"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="ODKAZ.."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit">ODOSLAT</button>
          </form>
          <div className="footer">
            <img className="image-logo" src="/elements/images/logo-head.svg" alt="Logo image" />
            <Ornament />
            <p>Copyright 2016</p>
            <p>Vsetky prava vyhradene.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
