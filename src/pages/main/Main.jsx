import React from 'react';
import Slider from "react-slick";
import css from "./Main.module.css"
import { NavLink } from 'react-router-dom'
import video from '../../images/IMG_4325.MP4'


const Main = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

 return (
    <div className={css.mainWrapper}>

      <main>
        <div className={css.create}>
          <h1>Как мы создаем крафтовое пиво</h1>
          <p>Наше пиво называется крафтовым, так как мы стараемся экспериментировать во всем - в рецептурах, технолог</p>
          <NavLink to='/products'>Наше пиво</NavLink>
        </div>

        <div className={css.sliderWrapper}>
          <Slider {...settings}>
            <div className={css.card} id={css.card1Bac}>
              <h3>КАЧЕСТВЕННОЕ СЫРЬЕ</h3>
              <p>100% натуральный состав без добавления химических примесей</p>
            </div>
            <div className={css.card} id={css.card2Bac}>
              <h3>АВТОРСКАЯ РЕЦЕПТУРА</h3>
              <p>Мы чтим пивоварские традиции, но любим создавать что-то свое, индивидуальное</p>
            </div>
            <div className={css.card} id={css.card3Bac}>
              <h3>СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h3>
              <p>Наше мини-производство открывает широкие горизонты для различных экспериментов</p>
            </div>
            <div className={css.card} id={css.card4Bac}>
              <h3>УНИКАЛЬНЫЙ АСОРТИМЕНТ</h3>
              <p>Открывайте для себя новые пивные вкусы вместе с нами</p>
            </div>
          </Slider>
        </div>

        <div className={css.video}>
          <video src={video} controls></video>
        </div>


      </main >



    </div >
  );
}

export default Main;
