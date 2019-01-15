<template>
<header class="page-header">
  <div class="container  page-header__container">
    <div class="row">
      <div class="col-2">
        <div class="page-header__logo"></div>
      </div>

      <div class="col-8">
        <nav class="main-nav  page-header__nav">
          <ul class="main-nav__list">
            <li class="main-nav__item">
              <a href="#">Доставка</a>
            </li>
            <li class="main-nav__item">
              <a href="#">Блог</a>
            </li>
            <li class="main-nav__item">
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-2">
        <a href="cart.html" class="page-header__cart cart">
          <svg class="close-icon" width="18" height="18">
            <use xlink:href="img/sprite-svg.svg#cart"></use>
          </svg>
          30 000 ₽
          <span class="cart__counter">2</span>
        </a>
      </div>
    </div>
  </div>
</header>
</template>