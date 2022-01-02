<template>
  <div class="item">
    <div class="container">
      <div class="item-wrapper">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { newProducts } from "@/seeders";

export default {
  data() {
    return {
      item: null,
    };
  },

  created() {
    const alias = this.$route.params.alias;
    const item = newProducts.find((elem) => elem.alias === alias);
    this.item = item;
  },
};
</script>

<style></style>
