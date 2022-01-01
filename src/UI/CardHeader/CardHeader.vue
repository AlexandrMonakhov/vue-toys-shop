<template>
  <div class="cards-header">
    <h2 class="section-title">{{ title }}</h2>
    <span class="section-subtitle">{{ subtitle }}</span>

    <div class="cards-buttons">
      <button class="cards__button">
        <CardHeaderButton />
      </button>
      <button class="cards__button">
        <CardHeaderButton :reverse="true" />
      </button>
    </div>
  </div>
</template>

<script>
import CardHeaderButton from "./modules/CardHeaderButton";

export default {
  name: "app-cards-header",
  components: {
    CardHeaderButton,
  },
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

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
  }

  &__button {
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 50%;
  }
}
</style>
