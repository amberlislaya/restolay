import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';



const Newsletter = () => (

<div className="app__newsletter">
<div className="app__newsletter-heading">
      <SubHeading title="Boletin informativo" />
  <h1 className="headtext__cormorant">Suscríbete a nuestro boletín</h1>
  <p className="p__opensans">Y nunca te pierdas las últimas actualizaciones!</p>
</div>
<div className="app__newsletter-input flex__center">
  <input type="email" placeholder="Introduce tu dirección de correo electrónico" />
<a href='mailto:codev.laya@gmail.com'>
  <button type="button" className="custom__button">
      Suscríbete
  </button>
</a>
</div>
</div>
);

export default Newsletter;