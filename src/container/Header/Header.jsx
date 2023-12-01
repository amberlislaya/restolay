import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';



const Header = () => (


<div className="app__header app__wrapper section__padding" id="home">
<div className="app__wrapper_info">
    <SubHeading title="Persigue El Nuevo Sabor" />
    <h1 className="app__header-h1">La Clave Para Una Buena Cena</h1>
    <p className="p__opensans" style={{ margin: '2rem 0' }}>Que la tierra sea una política, pero vivamos en la vejez. Condimentar la enfermedad es más fácil que el chocolate. Y, al final, hay mucho terreno</p>
    <button type="button" className="custom__button">Explorar Menu</button>
</div>

<div className="app__wrapper_img">
    <img src={images.welcome} alt="header_img" />
</div>
</div>
);

export default Header;
