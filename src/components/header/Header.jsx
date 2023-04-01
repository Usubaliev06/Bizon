import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.JPG";
import { useState } from "react";

const Header = () => {
  const [order, setOrder] = useState(css.orderNone);
  const [menu, setMenu] = useState(css.menu);
  const [menuLinks, setMenuLinks] = useState(css.menuNone);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("");

  const orderData = {
    name,
    phone,
    address,
    data,
  };

  const message = `Доброго времени суток меня зовут ${orderData.name}, мой номер телефона ${orderData.phone}, я хочу заказать ${orderData.data}, по адресу ${orderData.address}.`;

  const handleOrder = () => {
    setOrder(css.order);
  };

  const handleOrderClose = () => {
    setOrder(css.orderNone);
  };

  const handleSend = () => {
    console.log(orderData);
    setOrder(css.orderNone);
    console.log(message);
  };

  const handleMenu = () => {
    setMenu(css.menuNone);
    setMenuLinks(css.menuLinks);
  };

  const handleMenuClose = () => {
    setMenu(css.menu);
    setMenuLinks(css.menuNone);
  };

  const handleOrderMenu = () => {
    handleMenuClose();
    handleOrder();
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
            <button onClick={handleOrder}>Заказать</button>
            <a href="#footerWrapper">Контакты</a>
          </div>

          <button className={menu} onClick={handleMenu}>
            Меню
          </button>

          <div className={menuLinks}>
            <button onClick={handleMenuClose}>✖</button>
            <NavLink to="/abouteUs" onClick={handleMenuClose}>
              O нас
            </NavLink>
            <NavLink to="/products" onClick={handleMenuClose}>
              Продукция
            </NavLink>
            <button onClick={handleOrderMenu}>Заказать</button>
            <a href="#footerWrapper" onClick={handleMenuClose}>
              Контакты
            </a>
          </div>
        </header>
      </div>

      <div className={css.tagline}>
        <p>Пивоварня "BIZON"</p>
        <h1>НОВЫЕ ГРАНИ ВКУСА</h1>
      </div>

      <div className={order}>
        <button className={css.close} onClick={handleOrderClose}>
          ✖
        </button>
        <h1>Отправьте нам заявку</h1>
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <p>Заполните заказ</p>
        <textarea
          name=""
          id="area"
          cols="20"
          rows="5"
          placeholder="... литров, сорта ..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
        <a
          className={css.send}
          onClick={handleSend}
          target="blank"
          href={`https://api.whatsapp.com/send?phone=996505545479&text=4${message}`}
        >
          Отправить
        </a>
      </div>
    </>
  );
};

export default Header;
