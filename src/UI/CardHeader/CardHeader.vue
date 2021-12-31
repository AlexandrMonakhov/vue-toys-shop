<template>
  <div class="cards-header">
    <h2 class="section-title">{{ title }}</h2>
    <span class="section-subtitle">{{ subtitle }}</span>

    <div class="cards-buttons">
      <button class="cards__button">d</button>
      <button class="cards__button">b</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-cards-header",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>
