import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';




const Navbar = () => {


  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (

<nav className="app__navbar">
<div className="app__navbar-logo">
      <h1>LAYA.REST</h1>
</div>
<ul className="app__navbar-links">
    <li className="p__opensans"><a href="#home">Inicio</a></li>
    <li className="p__opensans"><a href="#about">Acerca de</a></li>
    <li className="p__opensans"><a href="#menu">Menu</a></li>
    <li className="p__opensans"><a href="#awards">Premios</a></li>
    <li className="p__opensans"><a href="#contact">Contacto</a></li>
</ul>

<div className="app__navbar-login">
      <a href="#login" className="p__opensans">Acceso / Registro</a>
<div />
      <a href="/" className="p__opensans">Mesa</a>
</div>


<div className="app__navbar-smallscreen">
    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
    {toggleMenu && (
<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
    <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
<ul className="app__navbar-smallscreen_links">
    <li><a href="#home" onClick={() => setToggleMenu(false)}>Inicio</a></li>
    <li><a href="#about" onClick={() => setToggleMenu(false)}>Acerca de</a></li>
    <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
    <li><a href="#awards" onClick={() => setToggleMenu(false)}>Premios</a></li>
    <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacto</a></li>
</ul>
</div>
)}
</div>
</nav>
);
};

export default Navbar;
