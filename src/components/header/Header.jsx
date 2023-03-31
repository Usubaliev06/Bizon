import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.JPG";
import { useState } from "react";
import Burger from "../burger/Burger";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={css.headerWrapper}>
        <header>
          <img src={logo} alt="logo" className={css.logo} />

          <NavLink to="/">BIZON</NavLink>

          <div className={css.links}>
            <NavLink to="/abouteUs">O нас</NavLink>
            <NavLink to="/products">Продукция</NavLink>
            <button>Заказать</button>
            <a href="#footerWrapper">Контакты</a>
          </div>
          {/* ////////////////////////////// */}
          <div className={css.burger} onClick={() => setShowNav(!showNav)}>
            <Burger
              className={`${css.nav_icon_1} ${isOpen ? css.open : ""}`}
              onClick={handleClick}
            >
              vssfvfsin
            </Burger>
          </div>
        </header>
      </div>

      <div className={css.tagline}>
        <p>Пивоварня "BIZON"</p>
        <h1>НОВЫЕ ГРАНИ ВКУСА</h1>
      </div>

      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
