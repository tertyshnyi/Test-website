import React, { useEffect, useRef } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen';

import "./Requirements.css";
import MenuIcon from "../../components/MenuIcon";
import Ornament from "../../components/Ornament";

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

const requirementsData = [
  {
    title: 'DETI',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
            non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
            unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
            quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
            corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
            voluptates, corrupti sint nemo unde suscipit expedita.`
  },
  {
    title: 'BYVANIE',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
            non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
            unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
            quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
            corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
            voluptates, corrupti sint nemo unde suscipit expedita.`
  },
  {
    title: 'BEZUCELOVE SPOJENIE',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
            non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
            unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
            quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
            corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
            voluptates, corrupti sint nemo unde suscipit expedita.`
  },
  {
    title: 'DOCHODOK',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore 
            non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
            unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
            quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
            corrupti sint nemo unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
            voluptates, corrupti sint nemo unde suscipit expedita.`
  }
];

interface LeafletHTMLElement extends HTMLElement {
  _leaflet_id?: number;
}

const Requirements: React.FC = () => {

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

  useEffect(() => {
    const mapContainer = document.getElementById('map') as HTMLElement;

    if (!mapContainer || mapContainer._leaflet_id) return;

    const map = L.map(mapContainer).setView([48.997597, 21.241604], 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      className: 'gray-map',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: '/elements/images/marker.png',
      iconSize: [32, 64],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.marker([48.997597, 21.241604], { icon: customIcon })
      .addTo(map)
      .bindPopup('Levocska 6116/5');

    L.control.fullscreen({
      position: 'topright',
      title: 'Full screen view',
      titleCancel: 'Exit full screen mode',
    }).addTo(map);
  }, []);

  return (
    <section id="requirements">
      <div className="container">
        <MenuIcon />
        <div className="requirements-header">
            <img className="requirements-header-img" src="/elements/images/header-need.svg" alt="Requirement header" />
            <h1>POTREBY ĽUDÍ</h1>
            <h6>LEONIDES</h6>
          <Ornament />
        </div>
        <div className="requirements-info">
          <div className="requirements-info-imgs">
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
                  <img src={image.src} alt={image.alt} className="image" />
                </div>
            ))}
          </div>
          <div className="requirements-info-desc">
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam quas inventore
              non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, corrupti sint nemo 
              unde suscipit expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil. Quisquam 
              quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias voluptates, 
              corrupti sint nemo unde inventore expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio, nihil. Quisquam quas inventore non vero odio atque totam quam perspiciatis, maiores recusandae alias 
              voluptates, corrupti sint nemo unde suscipit expedita.
            </em>
            {requirementsData.map((section, index) => (
                <div key={index}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="map"></div>
    </section>
  );
};

export default Requirements;
