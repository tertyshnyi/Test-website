import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import MenuIcon from "../../components/MenuIcon";

const imagesData = [
  {
    src: '/elements/assets/menu/menu-need-1.jpg',
    alt: 'DETI',
    title: 'DETI',
  },
  {
    src: '/elements/assets/menu/menu-need-2.jpg',
    alt: 'BYVANIE',
    title: 'BYVANIE',
  },
  {
    src: '/elements/assets/menu/menu-need-3.jpg',
    alt: 'SPORENIE',
    title: 'SPORENIE',
  },
  {
    src: '/elements/assets/menu/menu-need-4.jpg',
    alt: 'DOCHODOK',
    title: 'DOCHODOK',
  },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const sections = ["menu", "about", "careers", "cta"];
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
          <li className={activeSection === "menu" ? "active" : ""}>
            <Link to="menu" smooth={true} duration={300}>01</Link>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <Link to="about" smooth={true} duration={300}>02</Link>
          </li>

          <li className="logo" onClick={() => setMenuOpen(true)}>
            <p>MENU</p>
            <MenuIcon className="custom-menu-icon"/>
          </li>

          <li className={activeSection === "careers" ? "active" : ""}>
            <Link to="careers" smooth={true} duration={300}>03</Link>
          </li>
          <li className={activeSection === "cta" ? "active" : ""}>
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
            <div
              key={index}
              className="image-item"
            >
              <div className="image-header">
                <h3>{image.title}</h3>
                <div className="line"></div>
              </div>
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
        </div>
        <ul>
          <li><Link to="menu" smooth={true} duration={300} onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="about" smooth={true} duration={300} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="careers" smooth={true} duration={300} onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="cta" smooth={true} duration={300} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
