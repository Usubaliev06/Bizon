import React from 'react';
import css from './Products.module.css'
import img1 from '../../images/IMG_6856.JPG'
import img2 from '../../images/beer2.jpg'
import img3 from '../../images/beer2.jpg'
import img4 from '../../images/IMG_2726.JPG'
import img5 from '../../images/sidr.JPG'
import img6 from '../../images/IMG_7146.JPG'
import price from '../../images/price.JPG'



const Products = () => {

  const productsList = [
    {
      title: 'Pale Ale / Светлый Эль',
      description: 'пиво янтарно-золотистого цвета с фруктовыми и цитрусовыми ароматами. Основная «фишка»– баланс между сладким солодом и горьким хмелем. ALC 5,5%   OG 17%',
      prise: '140 сом',
      image: img3
    }, 
    {
      title: 'Black Ale / Темный Эль',
      description: 'Black Ale/ Темный Эль- превосходный бельгийский стаут, обладает насыщенным «поджаренным» вкусом с шоколадными и кофейными нотками. Минимальное количество хмеля и горечи. ALC 5,5%   OG 17%',
      prise: '140 сом',
      image: img4
    }, 
    {
      title: 'Red Ale / Красный эль',
      description: 'сбалансированный эль с глубоким рубиново-красным цветом, цветочно-цитросовым ароматом и бархатным вкусом. Отлично сочетается с мясными блюдами, бургерами и малосолёными закусками. ALC 5,0%  OG 14%',
      prise: '140 сом',
      image: img1
    },
    {
      title: 'Сидр',
      description: 'Освежающий слабоалкогольный напиток полученный путем естественного брожения яблочного сока. Обладает ароматом свежих яблок, легкой, характерной, кислинкой и остаточной сладостью во вкусе. ALC 4, 5% ',
      prise: '165 сом',
      image: img5
    },
    {
      title: 'Премиум',
      description: 'Крепкое, плотное, насыщенное пиво. Аромат солода и цитруса. Стиль пива - barley Wine. (Ячменное вино) ALC 8,5% OG 25%.',
      prise: '185 сом',
      image: img2
    },
    {
      title: 'Мелано',
      description: 'Цвет - янтарный, используется специальный солод карамельной обжарки, который дает сладкий привкус. Легкая горечь достигается с использованием американского сорта хмеля. OG 13%. ALC 5,0%.',
      prise: '',
      image: img6
    },
  ]

  return (

    <div className={css.productsWrapper}>

      <div className={css.cardWrapper}>

        {
          productsList.map(product => {
            return (
              <div className={css.productsCard} key={product.title}>
                <img src={product.image} alt={product.title} />
                <div className={css.productsDes}>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <h3>Цена за литр: {product.prise}</h3>
                </div>
              </div>
            )
          })
        }


      </div >

      <img className={css.priceImg} src={price} alt="" />

    </div>
  )
}

export default Products;

