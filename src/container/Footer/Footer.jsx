import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';



const Footer = () => (

<div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

<div className="app__footer-links">
<div className="app__footer-links_contact">
    <h1 className="app__footer-headtext">Contáctanos</h1>
    <p className="p__opensans">Buenos Aires, Argentina</p>
    <p className="p__opensans">+54 911-2278-1197</p>
</div>

<div className="app__footer-links_logo">
    <h1>LAYA.REST</h1>
      <p className="p__opensans">&quot;La mejor manera de encontrarte a ti mismo es perderte al servicio de los demás.&quot;</p>
    <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
<div className="app__footer-links_icons">
<a href='https://github.com/amberlislaya' target="_blank" rel="noopener noreferrer">
    <FiGithub className="social-media-icon" />
</a>
<a href='https://www.linkedin.com/in/amberlis-laya-m/' target="_blank" rel="noopener noreferrer">
    <FiLinkedin className="social-media-icon" />
</a>
<a href='https://www.instagram.com/soyamberlis' target="_blank" rel="noopener noreferrer">
    <FiInstagram className="social-media-icon" />
</a>
</div>
</div>

<div className="app__footer-links_work">
  <h1 className="app__footer-headtext">Horario De Trabajo</h1>
  <p className="p__opensans">Lunes-Viernes:</p>
  <p className="p__opensans">08:00 am - 12:00 am</p>
  <p className="p__opensans">Sabado-Domingo:</p>
  <p className="p__opensans">07:00 am - 11:00 pm</p>
</div>
</div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2023 Amberlis Laya. Todos Los Derechos Reservados.</p>
    </div>

  </div>
);

export default Footer;