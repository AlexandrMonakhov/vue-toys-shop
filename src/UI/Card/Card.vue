<template>
  <div class="cards">
    <div
      :class="`${cardInfo.card.type === 'new' ? 'card card-new' : 'card'}`"
      v-for="cardInfo in cardData"
      :key="cardInfo.id"
    >
      <img
        class="card__image"
        :src="require(`./assets/img/${cardInfo.card.image}.png`)"
        :alt="cardInfo.card.title"
      />
      <h2 class="card__title">{{ cardInfo.card.title }}</h2>
      <div class="card-price">
        <span class="card-price__new"
          >{{ cardInfo.card.price.newPrice }} ₽</span
        >
        <span class="card-price__old"
          >{{ cardInfo.card.price.oldPrice }} ₽</span
        >
      </div>
      <button class="button card__button">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-card",
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 110px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 282px;
  min-height: 341px;
  background-color: var(--main-color);
  box-shadow: 0px 4px 30px rgba(58, 35, 11, 0.2);
  border-radius: 10px;
  padding: 4px 17px 20px 17px;

  &__title {
    font-family: var(--regular-font);
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 19px;
    min-height: 50px;
  }

  &__image {
    width: 169px;
    height: 169px;
    object-fit: cover;
  }

  &-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    font-family: var(--bold-font);
    font-size: 16px;
    line-height: 21px;
    color: var(--dark-color);

    &__new {
      font-family: var(--bold-font);
      font-size: 16px;
      line-height: 21px;
      color: #db710b;
    }

    &__old {
      font-family: var(--regular-font);
      font-size: 12px;
      line-height: 16px;
      color: rgba(73, 55, 36, 0.65);
      text-decoration: line-through;
    }
  }

  &__button {
    padding: 11px 57px;
    color: var(--main-color);
  }
}
</style>
