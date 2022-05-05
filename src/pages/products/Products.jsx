import React from 'react'
import css from './Products.module.css'

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


        </div>
    )
}
