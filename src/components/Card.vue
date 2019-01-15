<template>
<article class="card">
  <button class="btn card__favorite">
    Добавить в избранное
    <svg class="close-icon" width="30" height="30">
      <use xlink:href="img/sprite-svg.svg#heart-empty"></use>
    </svg>
  </button>

  <div class="card__img">
    <img src="img/strida-01.jpg" alt="фото" height="150" width="200">
  </div>
  <div class="card__inner">
    <h3 class="card__title">Strida</h3>
    <span class="card__price">46 000 ₽</span>
    <div class="card__btn-block">
      <button class="btn card__btn">Купить</button>
      <a href="item.html" class="btn card__more">Подробнее</a>
    </div>
  </div>
</article>
</template>