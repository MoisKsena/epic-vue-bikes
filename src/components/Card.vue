<template>
<article class="card">
  <button class="btn card__favorite">
    Добавить в избранное
    <svg class="close-icon" width="30" height="30">
      <use xlink:href="img/sprite-svg.svg#heart-empty"></use>
    </svg>
  </button>

    

  <div class="card__img">
    <img :src="displayImg" :alt="item.name" height="150" width="200">
  </div>
  <div class="card__inner">
    <h3 class="card__title">{{ item.name }}</h3>
    <span class="card__price">{{ item.price }}</span>
    <div class="card__btn-block">
      <button class="btn card__btn">Купить</button>
      <a href="item.html" class="btn card__more">Подробнее</a>
    </div>
  </div>
</article>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    computed: {
      displayImg() {
        return require ('@/assets/' + this.item.img)
      }
    }
  }
</script>