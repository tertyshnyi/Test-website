import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import MenuIcon from "../../components/MenuIcon";

const imagesData = [
  {
    src: "/elements/assets/menu/menu-need-2.jpg",
    alt: "O SPOLOCNOSTI",
    title: "O SPOLOCNOSTI",
    to: "about",
    label: "01",
  },
  {
    src: "/elements/assets/menu/menu-need-2.jpg",
    alt: "KARIERA",
    title: "KARIERA",
    to: "careers",
    label: "02",
  },
  {
    src: "/elements/assets/menu/menu-need-2.jpg",
    alt: "POTREBA LUDI",
    title: "POTREBA LUDI",
    to: "requirements",
    label: "03",
  },
  {
    src: "/elements/assets/menu/menu-need-2.jpg",
    alt: "KONTAKT",
    title: "KONTAKT",
    to: "cta",
    label: "04",
  },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const sections = ["01", "02", "03", "04"];
      let foundSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          foundSection = section;
        }
      });

      if (foundSection !== activeSection) {
        setActiveSection(foundSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, menuOpen]);

  return (
    <>
      <nav className={`navbar ${menuOpen ? "hidden" : ""}`}>
        <ul className="nav-list">
          <li className={activeSection === "01" ? "active" : ""}>
            <Link to="about" smooth={true} duration={300}>01</Link>
          </li>
          <li className={activeSection === "02" ? "active" : ""}>
            <Link to="careers" smooth={true} duration={300}>02</Link>
          </li>

          <li className="logo" onClick={() => setMenuOpen(true)}>
            <p>MENU</p>
            <MenuIcon className="custom-menu-icon"/>
          </li>

          <li className={activeSection === "03" ? "active" : ""}>
            <Link to="requirements" smooth={true} duration={300}>03</Link>
          </li>
          <li className={activeSection === "04" ? "active" : ""}>
            <Link to="cta" smooth={true} duration={300}>04</Link>
          </li>
        </ul>
      </nav>

      <div className={`full-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn-2" onClick={() => setMenuOpen(false)}>
          <p>MENU</p>
        </button>
        <button className="close-btn-1" onClick={() => setMenuOpen(false)}>
          <MenuIcon className="custom-menu-icon" />
        </button>
        <div className="menu-container">
          {imagesData.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-content">
                <Link
                  to={image.to}
                  smooth={true}
                  duration={300}
                  onClick={() => setMenuOpen(false)}
                  className="image-link"
                >
                  <img src={image.src} alt={image.alt} className="image" />
                </Link>
                <div className="img-info-item">
                  <p className="image-label">{image.label}</p>
                  <div className="line"></div>
                  <h6 className="image-title">{image.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
