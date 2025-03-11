import React, { useEffect, useRef } from "react";
import "./About.css";
import MenuIcon from "../../components/MenuIcon";
import Ornament from "../../components/Ornament";

const About: React.FC = () => {

  const imageItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    imageItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      imageItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const imagesData = [
    {
      src: '/elements/assets/menu/menu-about-1.jpg',
      alt: 'INŠPIROVANÝ HISTÓRIOU',
      title: 'INŠPIROVANÝ HISTÓRIOU',
    },
    {
      src: '/elements/assets/menu/menu-about-2.jpg',
      alt: 'VÍZIA A POSLANIE',
      title: 'VÍZIA A POSLANIE',
    },
    {
      src: '/elements/assets/menu/menu-about-3.jpg',
      alt: 'HODNOTY LEONIDES',
      title: 'HODNOTY LEONIDES',
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <MenuIcon />
        <div className="about-header">
          <img className="about-header-img" src="/elements/images/header-about.svg" alt="About header" />
          <h1>O SPOLOČNOSTI</h1>
          <h6>LEONIDES</h6>
          <Ornament />
        </div>
        <div className="about-info">
          <div className="about-info-imgs">
            {imagesData.map((image, index) => (
              <div
                key={index}
                className="image-item"
                ref={(el) => {
                  if (el) imageItemsRef.current[index] = el;
                }}
              >
                <div className="image-header">
                  <h3>{image.title}</h3>
                  <div className="line"></div>
                </div>
                <img
                  src="/elements/images/triangle.svg"
                  alt="Triangle top"
                  className="svg-image"
                />
                <img src={image.src} alt={image.alt} className="image" />
              </div>
            ))}
          </div>
          <div className="about-info-desc">
            <h3>INŠPIROVANÝ HISTÓRIOU</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas <em>inventore</em>
              non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
              unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
              quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
              corrupti sint nemo unde <em>inventore</em> expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
              voluptates, corrupti sint nemo unde suscipit expedita.
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
              non vero odio <em>inventore</em> totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
              unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
              quas inventore non vero odio atque totam quam perspiciatis, <em>inventore</em> recusandae alias voluptates, 
              corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio, <em>inventore</em>. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
              voluptates, corrupti sint nemo unde suscipit expedita.  
            </p>

            <h3>VÍZIA A POSLANIE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
              non vero odio atque totam quam perspiciatis, maiores recusandae alias <em>inventore</em>, corrupti sint nemo 
              unde <em>inventore</em> expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
              quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
              corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet <em>inventore</em> adipisicing elit. 
              Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
              voluptates, corrupti sint <em>inventore</em> unde suscipit expedita.
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
              non vero odio atque totam <em>inventore</em> perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
              unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
              quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
              corrupti sint nemo unde <em>inventore</em> expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio, nihil. Quisquam quas inventore non vero odio atque totam quam <em>inventore</em>, maiores recusandae alias 
              voluptates, corrupti sint nemo unde suscipit expedita.  
            </p>

            <h3>HODNOTY</h3>
            <p>Transparentnosť</p>
            <p>Etika</p>
            <p>Odvaha</p>
            <p>Viera</p>
            <p>Liderstvo</p>
            <p>Vzdelávanie</p>
            <p>Timovosť</p>
            <p>Presvedčenie</p>

            <h3>STABILITA A ZÁZEMIE SPOLOČNOSTI</h3>
            <p>Vznik od roku 2009</p>
            <p>Viac ako 10 ročná prax v odbore</p>
            <p>Sme členom AFISP</p>
            <p>Povolenie NBS PAG</p>
            <p>Certifikát solventných firiem</p>
            <p>Ocenený TOP externý partner za roky 2014-2015</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
