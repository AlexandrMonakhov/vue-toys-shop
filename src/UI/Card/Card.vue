<template>
  <div class="cards">
    <div class="card" v-for="cardInfo in cardData" :key="cardInfo.id">
      <img :src="require(`./assets/img/${cardInfo.card.image}.png`)" alt="" />
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

<style></style>
