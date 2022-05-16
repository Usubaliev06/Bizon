import React from 'react'
import css from './Footer.module.css'


export default function Footer() {
  return (
    <div id='wrapper_footer'>


      <div className={css.block1}>

        <div className={css.phone}>
          <img src="" alt="" />

          <div>
            <p className={css.title}>Телефоны</p>

            <a href='tel:+996708475765' className={css.des}>+996-708-475-765</a>
            <a href='tel:+996701444407' className={css.des}>+996-701-444-407</a>
            <a className={css.insta_wrapper} href="https://www.instagram.com/bizon.craftbeer"> 
            
            <img className={css.insta} src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
            <p id='insta'>bizon.craftbeer</p>
            
            </a>
          </div>

        </div>

        <div className={css.location}>

          <div>

            <p className={css.title}>Адрес пивоварни</p>
            <p className={css.des0}>8 мкр. ул.Саманчина дом 40</p>
          </div>

        </div>

        <div className={css.map}>
          <p className={css.title}>Карта</p>


          <iframe title='map' className={css.map_img} src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a50bc35f4b477b8c0013bbaf9e29e79a8b2cf8b93474145f8f56796d01b75a8&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
        </div>


        <a href="https://wa.me/+996708475765">Написать нам</a>

      </div>

      <div className={css.block2}>
        <p id={css.copy}>© 2017–2022 Крафтовая пивоварня «Bizon»</p>
        <p id={css.rules}> 18+ ПЕЙТЕ КУЛЬТУРНО! Чрезмерное употребление алкоголя вредит вашему здоровью</p>
      </div>

    </div>
  )
}
