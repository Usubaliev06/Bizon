import React from 'react'
import css from './Products.module.css'
import price from '../../img/price.JPG'
import beer from '../../img/beer.JPG'
import beer2 from '../../img/beer2.jpg'


export default function Products() {
    return (
        <div className={css.products_wrapper}>

            <div className={css.header_2}>
                <p id={css.header_2_p1}>
                    Пивоварня "BIZON"
                </p>
                <p id={css.header_2_p2}>
                    НОВЫЕ ГРАНИ ВКУСА
                </p>
            </div>

            <div className={css.block1}>

                <h1>Ассортимент</h1>
                <p>В ассортименте Bizon Craft Beer 2 сорта пенного напитка:</p>

                <div className={css.sort}>

                    <div className={css.sort_1}>
                        <img src={beer2} alt="beer"/>
                        <p> Pale Ale/ Светлый Эль- пиво янтарно-золотистого
                            цвета с фруктовыми и цитрусовыми ароматами.
                            Основная «фишка»– баланс между сладким солодом и
                            горьким хмелем. Это отличное пиво для общения, с
                            относительно низким уровнем алкоголя и сочетается
                            практически с любой едой.
                            ALC 4,3%   OG 12%   IBU 20</p>
                    </div>

                    <div className={css.sort_1}>
                        <img src={beer} alt="beer" />
                        <p>Black Ale/ Темный Эль- превосходный бельгийский стаут,
                            обладает насыщенным «поджаренным» вкусом с шоколадными
                            и кофейными нотками. Плотный, но пьётся довольно легко.
                            Минимальное количество хмеля и горечи, чтобы максимально
                            насладиться сочетанием солодов.
                            ALC 5,5%   OG 17%   IBU 6</p>
                    </div>

                </div>

                <div className={css.price}>
                    <img src={price} alt="price" />
                </div>

            </div>


        </div>
    )
}
