import React, { useState } from 'react'
import css from './Header.module.css'
import logo from '../../img/logo.JPG'
import { Link } from 'react-router-dom'




export default function Header() {

    const [active, setActive] = useState(false)

    return (
        <div className={css.wrapper}>

            <header>

                <img src={logo} alt="" />

                <a href="/">BIZON</a>

                <div className={css.h2}>
                    <Link to="/abouteUS">О нас</Link>
                    <Link to="/products">Ассортимент</Link>
                    <a href="https://wa.me/+996505545479">Написать нам</a>
                    <a href="#wrapper_footer">Контакты</a>

                </div>

                <div className='burger'>

                    <svg onClick={() => setActive(!active)} className={"ham hamRotate ham4 " + (active ? "active" : "")} viewBox="0 0 100 100" width="50">
                        <path className="line top"
                            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20">
                        </path>
                        <path className="line middle" d="m 70,50 h -40"></path>
                        <path className="line bottom"
                            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20">
                        </path>
                    </svg>

                </div>

                <div className={css.burger_a  + " " +  (active ? css.active : "")}>

                <Link to="/abouteUS">О нас</Link>
                <Link to="/products">Ассортимент</Link>
                <a href="https://wa.me/+996708475765">Написать нам</a>
                <a href="#wrapper_footer">Контакты</a>

        </div>


            </header >



        </div >
    )
}
