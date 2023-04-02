import css from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.JPG";
import { useState } from "react";


const Header = () => {
  const [orderTitle, setOrderTitle] = useState(css.orderTitle);
  const [orderWrapper, setOrderWrapper] = useState(css.orderNone);
  const [menu, setMenu] = useState(css.menu);
  const [menuLinks, setMenuLinks] = useState(css.menuNone);

  const [finallyPrice, setFinallyPrice] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const all = [
    {
      title: "Pale Ale / Светлый Эль",
      count: count1,
      prise: 140,
    },
    {
      title: "Black Ale / Темный Эль",
      count: count2,
      prise: 140,
    },
    {
      title: "Red Ale / Красный эль",
      count: count3,
      prise: 140,
    },
    {
      title: "Сидр",
      count: count4,
      prise: 165,
    },
    {
      title: "Премиум",
      count: count5,
      prise: 185,
    },
    {
      title: "Мелано",
      count: count6,
      prise: 140,
    },
  ];

  const handlePlus1 = () => {
    setCount1(count1 + 1);
    setFinallyPrice(finallyPrice + all[0].prise);
  };
  const handleMinus1 = () => {
    if (count1 >= 1) {
      setCount1(count1 - 1);
      setFinallyPrice(finallyPrice - all[0].prise);
    }
  };
  const handlePlus2 = () => {
    setCount2(count2 + 1);
    setFinallyPrice(finallyPrice + all[1].prise);
  };
  const handleMinus2 = () => {
    if (count2 >= 1) {
      setCount2(count2 - 1);
      setFinallyPrice(finallyPrice - all[1].prise);
    }
  };
  const handlePlus3 = () => {
    setCount3(count3 + 1);
    setFinallyPrice(finallyPrice + all[2].prise);
  };
  const handleMinus3 = () => {
    if (count3 >= 1) {
      setCount3(count3 - 1);
      setFinallyPrice(finallyPrice - all[2].prise);
    }
  };
  const handlePlus4 = () => {
    setCount4(count4 + 1);
    setFinallyPrice(finallyPrice + all[3].prise);
  };
  const handleMinus4 = () => {
    if (count4 >= 1) {
      setCount4(count4 - 1);
      setFinallyPrice(finallyPrice - all[3].prise);
    }
  };
  const handlePlus5 = () => {
    setCount5(count5 + 1);
    setFinallyPrice(finallyPrice + all[4].prise);
  };
  const handleMinus5 = () => {
    if (count5 >= 1) {
      setCount5(count5 - 1);
      setFinallyPrice(finallyPrice - all[4].prise);
    }
  };
  const handlePlus6 = () => {
    setCount6(count6 + 1);
    setFinallyPrice(finallyPrice + all[5].prise);
  };
  const handleMinus6 = () => {
    if (count6 >= 1) {
      setCount6(count6 - 1);
      setFinallyPrice(finallyPrice - all[5].prise);
    }
  };

  const orderData = {
    name,
    phone,
    address,
  };

  const productsList = [
    {
      title: "Pale Ale / Светлый Эль",
      count: count1,
      plus: handlePlus1,
      minus: handleMinus1,
    },
    {
      title: "Black Ale / Темный Эль",
      count: count2,
      plus: handlePlus2,
      minus: handleMinus2,
    },
    {
      title: "Red Ale / Красный эль",
      count: count3,
      plus: handlePlus3,
      minus: handleMinus3,
    },
    {
      title: "Сидр",
      count: count4,
      plus: handlePlus4,
      minus: handleMinus4,
    },
    {
      title: "Премиум",
      count: count5,
      plus: handlePlus5,
      minus: handleMinus5,
    },
    {
      title: "Мелано",
      count: count6,
      plus: handlePlus6,
      minus: handleMinus6,
    },
  ];

  const orderDetails = all.reduce((acc, item) => {
    if (item.count > 0) {
      acc += ` ${item.count} литров сорта ${item.title}, `;
    }
    return acc;
  }, "");

  const message = `Доброго времени суток меня зовут ${orderData.name}, мой номер телефона ${orderData.phone}, я хочу заказать ${orderDetails} по адресу ${orderData.address}, общая сумма заказа ${finallyPrice} сом`;

  const handleOrder = () => {
    setOrderWrapper(css.orderWrapper);
  };

  const handleOrderClose = () => {
    setOrderWrapper(css.orderNone);
  };

  const handleSend = () => {
    if (name !== "" && phone !== "" && address !== "") {
      window.location.href =
        `https://api.whatsapp.com/send?phone=996505545479&text=${message}`;
        setOrderTitle(css.orderTitle);
    } else {
      setOrderTitle(css.orderTitleRed);
    }
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
            <button className={css.closeMenu} onClick={handleMenuClose}>
              ✖
            </button>
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

      <div className={orderWrapper}>
        <div className={css.order}>
          <button className={css.close2} onClick={handleOrderClose}>
            ✖
          </button>
          <h1 className={orderTitle}>Заполните все поля</h1>
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

          <div className={css.orderCardWrapper}>
            {productsList.map((product, index) => {
              return (
                <div key={index} className={css.orderCard}>
                  <h2>{product.title}</h2>
                  <div className={css.orderCounter}>
                    <button onClick={product.minus}>-</button>
                    <p>{product.count}л.</p>
                    <button onClick={product.plus}>+</button>
                  </div>
                </div>
              );
            })}
          </div>

          <p>Итог: {finallyPrice} сом</p>

          <button className={css.send} onClick={handleSend} >
            Отправить
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
