import React from 'react';
import loaderImg from '../../images/beer loader.gif'
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <img src={loaderImg} alt="" />
    </div>
  );
}

export default Loader;
