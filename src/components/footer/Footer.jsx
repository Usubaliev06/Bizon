import React from 'react';
import css from '../footer/Footer.module.css'
import insta from '../../images/instagram.png'


const Footer = () => {
  return (
    <div id='footerWrapper'>

      <footer>
        <div className={css.footerContact}>

          <div className={css.phone}>
            <h1>Телефоны</h1>
            <a href="tel:+996505545479">+996 (505) 54-54-79</a>    
            <a href="tel:+996701700812">+996 (701) 70-08-12</a>

            <div className={css.insta}>
              <a href="https://www.instagram.com/bizon.craftbeer">  <img src={insta} alt="insta" /></a>
              <a href="https://www.instagram.com/bizon.craftbeer">bizon.craftbee</a>
            </div>
          </div>

          <div className={css.addres}>
            <h1>Адрес пивоварни</h1>
            <p>8 мкр. ул.Саманчина дом 40</p>
          </div>

          <div className={css.mapWrapper}>
            <h1>Карта</h1>
            <iframe title='map' className={css.map_img} src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a50bc35f4b477b8c0013bbaf9e29e79a8b2cf8b93474145f8f56796d01b75a8&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
          </div>

          <a className={css.whatsapp} href='https://wa.me/+996505545479'>Написать нам</a>

        </div>

        <div className={css.footerInfo}>
          <p className={css.copy}>© 2017–2023 Крафтовая пивоварня «Bizon»</p>
          <p className={css.rule}>18+ ПЕЙТЕ КУЛЬТУРНО! Чрезмерное употребление алкоголя вредит вашему здоровью</p>
        </div>

      </footer>

    </div>
  );
}

export default Footer;
