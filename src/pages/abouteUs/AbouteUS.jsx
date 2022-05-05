import React from 'react'
import css from './AbouteUS.module.css'

export default function AbouteUS() {
  return (
    <div className={css.wrapper}>

      <div className={css.header_2}>
        <p id={css.header_2_p1}>
          Пивоварня "BIZON"
        </p>
        <p id={css.header_2_p2}>
          НОВЫЕ ГРАНИ ВКУСА
        </p>
      </div>

      <div className={css.block1}>

        <h1>Bizon craft beer</h1>

        <div className={css.block1_1}>
          <img src="https://downloader.disk.yandex.ru/preview/1fa4c5b9b293f778d1009ce9081f93eb3b2688e4dd15ce1293e15ca735a24e1f/626c34db/refUspvXM61_6vF5IKZUizx1xXji9KunwGfLoyW5evkWfs0eGB-r2UF6K4qHWgS72pHrMGSeWVHdc0aU8VC6uw%3D%3D?uid=0&filename=CHI_7152.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1771x1330&crop=1" alt="" />

          <p>Уникальная рецептура, отборные европейские ингредиенты, немецкое высококачественное оборудование- все это про нас.
            Наша пивоварня вышла на Кыргызстанский рынок напитков
            с продуктом собственного производства в апреле 2022 года.
            Была сварена первая партия Pale Ale (Светлый Эль), пиво,
            которое сразу полюбилось всем. В состав компании входят
            современный пивоваренный завод, а также дистрибьюторский и
            логистический центры.</p>

        </div>

      </div>

      <div className={css.block2}>

        <h1>Производство</h1>

        <div className={css.block2_1}>

          <img src="https://burobiz-a.akamaihd.net/uploads/images/86313/large_%D0%BF%D0%B8%D0%B2%D0%B7%D0%B0%D0%B2%D0%BE%D0%B41.jpg" alt="" />

          <p>Крафтовое пиво “BIZON CRAFT BEER” варится в английских традициях. Все сорта
            всегда разливаются свежими, с настоящей пенной шапочкой, будь то Светлый или Темный Эль.
            Настоящее крафтовое пиво “BIZON CRAFT BEER” производится из четырёх ингредиентов.</p>

        </div>

      </div>


      <div className={css.block3}>

        <h1>Ингридиенты</h1>

        <div className={css.block3_1}>

          <h1>Вода</h1>

          <p>Самый важный ингредиент в производстве пива.
            Мы используем чистую, питьевую, артезианскую воду, которая
            соответсвует обязательным органолептическим, физико-химическим,
            микробиологическим и химическим требованиям: умеренная жесткость,
            нейтральный уровень кислотности pH, ограниченное содержание
            хлоридов, железа, марганца, нитратов и так далее.</p>

        </div>

        <div className={css.block3_2}>

          <h1>Солод</h1>

          <p>Пивоваренный солод получают из пророщенного ячменя. Для производства некоторых сортов пива ячменный солод смешивают с пшеничным. Зерна вымачивают, дают прорасти, потом сушат при определенных температурах. Этот тип солода называют базовым и из него варят классическое светлое пиво. Часть солода дополнительного обжаривают.  Степень обжарки влияет на цвет и вкусовые качества напитка.
            Если обжарить базовый солод до карамельного цвета — цвет, вкус и аромат будут более насыщенными.
            Следующая степень обжарки позволяет добиться темного оттенка пива и шоколадного послевкусия. Конечная стадия — это черный солод с кофейными нотками.
            Наша пивоварня использует только качественный бельгийский и курский солод трёх сортов.</p>

        </div>

        <div className={css.block3_3}>

          <h1>Хмель</h1>

          <p>На нашей пивоварне используют немецкий хмель в спрессованном
            гранулированном виде. Есть общее заблуждение, что хмель влияет
            на количество алкоголя в продукте, но на самом деле это не так
            . Хмель в пивоварении используется для придания характерной
            пивной горчинки, вкуса и аромата.
          </p>

        </div>

        <div className={css.block3_4}>

          <h1>Дрожи</h1>

          <p>Алкоголь образуется в пиве в процессе сбраживания.
            Именно дрожжи перерабатывают сахар, содержащийся
            в солоде, в этиловый спирт. Также дрожжи влияют и на вкус готового пива.</p>

        </div>




      </div>



      <div className={css.block4}>
        <h1>Оборудование</h1>

        <div className={css.block4_1}>

          <img src="https://nomas.ru/files/styles/max-970px/public/oborudovanie-dlya-pivovareniya-nomas_0.jpg?itok=brs-eqIY" alt="" />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, omnis blanditiis! Autem eaque molestias laborum numquam aliquam libero? Reprehenderit, animi harum incidunt commodi optio rerum saepe beatae eveniet possimus sunt!</p>

        </div>
      </div>

    </div>
  )
}
