import React from 'react';

import emptyCartImg from '../assets/img/empty-cart.png';

import NotFoundBlock from '../components/NotFoundBlock';

function EmptyCart() {
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <NotFoundBlock />
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <a href="/" class="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    </div>
  );
}

export default EmptyCart;
