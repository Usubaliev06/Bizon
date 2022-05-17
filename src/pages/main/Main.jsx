import React from 'react'
import css from './Main.module.css'
import stock from './../../img/stock.PNG'
import { Link } from 'react-router-dom'



export default function Main() {
  return (
    <div className={css.wrapper}>



      <main>

        <div className={css.header_2}>
          <p id={css.header_2_p1}>
            Пивоварня "BIZON"
          </p>
          <p id={css.header_2_p2}>
            НОВЫЕ ГРАНИ ВКУСА
          </p>
        </div>


        <div className={css.made_beer}>


          <div className={css.made_beer_block1}>

            <p id={css.made_beer_block1_title1}>Как мы создаем</p>

            <p id={css.made_beer_block1_title2}>КРАФТОВОЕ ПИВО</p>

            <p id={css.made_beer_block1_des}>Наше пиво называется крафтовым, так как мы
              стараемся экспериментировать во всем - в
              рецептурах, технологии, ингредиентах. Мы не
              останавливаемся на чем-то одном, нам важно
              развиваться и все время улучшать то, что мы делаем.
            </p>

            <Link to='/products'>Hаше пиво</Link>

          </div>

          <div className={css.made_beer_block2} >

            <div className={css.made_beer_block2_floor1}>


              <div className={css.card1}>

                <img className={css.made_beer_block2_img} src="https://img.icons8.com/ios/2x/hops.png" alt="" />
                <p className={css.made_beer_block2_title1}>КАЧЕСТВЕННОЕ СЫРЬЕ</p>
                <p className={css.made_beer_block2_title2}>100% натуральный состав без добавления химических примесей</p>
              </div>

              <div className={css.card1}>
                <img className={css.made_beer_block2_img} src="https://img.icons8.com/ios/2x/manufacturing.png" alt="" />
                <p className={css.made_beer_block2_title1}>СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</p>
                <p className={css.made_beer_block2_title2}>Наше мини-производство открывает широкие горизонты для различных экспериментов</p>
              </div>

            </div>

            <div className={css.made_beer_block2_floor1}>

              <div className={css.card1}>
                <img className={css.made_beer_block2_img} src="https://img.icons8.com/wired/2x/wooden-beer-keg.png" alt="" />
                <p className={css.made_beer_block2_title1}>АВТОРСКАЯ РЕЦЕПТУРА</p>
                <p className={css.made_beer_block2_title2}>Мы чтим пивоварские традиции, но любим создавать что-то свое, индивидуальное</p>
              </div>

              <div className={css.card1}>
                <img className={css.made_beer_block2_img} src="https://img.icons8.com/ios/2x/beer.png" alt="" />
                <p className={css.made_beer_block2_title1}>УНИКАЛЬНЫЙ АСОРТИМЕНТ</p>
                <p className={css.made_beer_block2_title2}>Открывайте для себя новые пивные вкусы вместе с нами</p>
              </div>

            </div>

          </div>

          <div className={css.stock}>
            <h1>Акции</h1>

            <div className={css.stock_blocks_wrapper}>

            <div className={css.stock_blocks} >
              <img src={stock} alt="" />
            </div>
           

            </div>

          </div>


        </div>

      </main>
    </div>
  )
}