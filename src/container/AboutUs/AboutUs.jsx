import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';



const AboutUs = () => (

<div className="app__aboutus app__bg flex__center section__padding" id="about">
<div className="app__aboutus-overlay flex__center">
</div>

<div className="app__aboutus-content flex__center">
<div className="app__aboutus-content_about">
    <h1 className="headtext__cormorant">Sobre Nosotros</h1>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
    <p className="p__opensans">Laya.rest es un acogedor restaurante que fusiona la cocina contemporánea con sabores tradicionales, ofreciendo una experiencia gastronómica única. Con una atmósfera elegante y platos creativos, es el destino perfecto para disfrutar de una deliciosa comida en un ambiente sofisticado.</p>
    <button type="button" className="custom__button">Saber más</button>
</div>

<div className="app__aboutus-content_knife flex__center">
    <img src={images.knife} alt="about_knife" />
</div>

<div className="app__aboutus-content_history">
    <h1 className="headtext__cormorant">Nuestra historia</h1>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
    <p className="p__opensans">Los adipiscentes tempus ullamcorper lobortis odian la tierra arcu volutpat. La risa sitúa la vida de la enfermedad que a veces vivía en algunos de mis camiones pero el odio y no.</p>
    <button type="button" className="custom__button">Saber más</button>
</div>
</div>
</div>
);

export default AboutUs;
