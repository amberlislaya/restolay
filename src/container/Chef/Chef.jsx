import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';


const Chef = () => (

<div className="app__bg app__wrapper section__padding">
<div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
</div>

<div className="app__wrapper_info">
      <SubHeading title="La Palabra Del Chef" />
      <h1 className="headtext__cormorant">En lo que creemos</h1>

<div className="app__chef-content">
<div className="app__chef-content_quote">
    <img src={images.quote} alt="quote_image" />
    <p className="p__opensans">El chef y fundador de Laya.Rest, apasionado por la innovación culinarias</p>
</div>

<p className="p__opensans"> el autor debería ser el objetivo del arco. Vulput no necesita una política. No hay tarea ni receta de chocolate, algún empleado se graduó en fútbol. </p>
</div>

<div className="app__chef-sign">
    <p>Kevin Luo</p>
    <p className="p__opensans">Chef & Founder</p>
    <img src={images.sign} alt="sign_image" />
</div>
</div>
</div>
);

export default Chef;