import React from 'react'
import css from './Products.module.css'
import price from '../../img/price.JPG'

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
                        <img src="https://downloader.disk.yandex.ru/preview/a3caffd9758b8525cdc54b300e8127a55a58e9c05d838168baecd1a63cfd2b34/627ed9ec/QDgCcMoq6FwTg7NWmxkMf50NDGvRE-q2-RTz-3iZAtlh58tDKdpkr0HX8V_7rBKC4NJRi2WYppCxi2hZhxasKw%3D%3D?uid=0&filename=CHI_7133.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=3157x1442" alt="" />
                        <p> Pale Ale/ Светлый Эль- пиво янтарно-золотистого
                            цвета с фруктовыми и цитрусовыми ароматами.
                            Основная «фишка»– баланс между сладким солодом и
                            горьким хмелем. Это отличное пиво для общения, с
                            относительно низким уровнем алкоголя и сочетается
                            практически с любой едой.
                            ALC 4,3%   OG 12%   IBU 20</p>
                    </div>

                    <div className={css.sort_1}>
                        <img src="https://downloader.disk.yandex.ru/preview/a3caffd9758b8525cdc54b300e8127a55a58e9c05d838168baecd1a63cfd2b34/627ed9ec/QDgCcMoq6FwTg7NWmxkMf50NDGvRE-q2-RTz-3iZAtlh58tDKdpkr0HX8V_7rBKC4NJRi2WYppCxi2hZhxasKw%3D%3D?uid=0&filename=CHI_7133.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=3157x1442" alt="" />
                        <p>Black Ale/ Темный Эль- превосходный бельгийский стаут,
                            обладает насыщенным «поджаренным» вкусом с шоколадными
                            и кофейными нотками. Плотный, но пьётся довольно легко.
                            Минимальное количество хмеля и горечи, чтобы максимально
                            насладиться сочетанием солодов.
                            ALC 5,5%   OG 17%   IBU 6</p>
                    </div>

                </div>

                <div className={css.price}>
                    <img src={price} alt="" />
                </div>

            </div>


        </div>
    )
}
