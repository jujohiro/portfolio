import React from 'react';
import AboutMeImage from '../../../assets/images/AboutMe.jpeg';
import BDiconImage from '../../../assets/images/BD.png';
import CursorIconImage from '../../../assets/images/cursorIcon.png';
import ServerIconImage from '../../../assets/images/servidor.jpg';
import { ImgAboutMe } from '../../UI/ImgAboutMe/ImgAboutMe'
import { ImgBD } from '../../UI/ImgAboutMe/ImgBD'
import { Imgcursor } from '../../UI/ImgAboutMe/ImgIconCursor'
import { ImgServer } from '../../UI/ImgAboutMe/ImgIconServer'

import './ProfileAboutMe.css';

export const ProfileAboutMe = () => { // Cambiado a ProfileAboutMe
  return (
    <section className='about-container' id="about">
      <h2 className='about-title'>AboutMe</h2>
      <div className="about-content">
        <ImgAboutMe src={AboutMeImage} alt='About Me' />
        <ul className='about-items'>
          <li className='about-item'>
            <Imgcursor src={CursorIconImage} alt="cursorIcon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>Conocimientos en HTML5, CSS3, JavaScript, React, Node.js; ademas con experiencia
                en diseño responsivo y accesibilidad web.</p>
            </div>
            </li>
            <li className='about-item'>
            <ImgServer src={ServerIconImage} alt="ServerIcon" />
            <div>
              <h3>Backend Developer</h3>
              <p>Conocimientos en Java, JavaScript,Phyton; ademas desarrollando de manero que sea mas
                rapido y optimizado los sistemas y las APIs
              </p>
            </div>
            </li>
            <li className='about-item'>
            <ImgBD src={BDiconImage} alt="BDicon" />
            <div>
              <h3>Cibersegurity</h3>
              <p>
                Conocimientos en seguridad de la información, protección de datos,
                y desarrollo de sistemas de seguridad.
              </p>
              
            </div>
            </li>
            
  
        </ul>
      </div>
    </section>
  );
};
