<template>
  <div class="nav">
    <div class="container">
      <nav class="nav-wrapper">
        <a
          class="nav__link"
          :href="link.path"
          v-for="link in links"
          :key="link.title"
        >
          {{ link.title }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-nav",
  data() {
    return {
      links: [
        {
          path: "/soft-toys",
          title: "Мягкие игрушки",
        },
        {
          path: "/interactive-game",
          title: "Интерактивные игры",
        },
        {
          path: "/educational-games",
          title: "Развивающие игры",
        },
        {
          path: "/radiocontrolled-models",
          title: "Радиоуправляемые модели",
        },
        {
          path: "/table-games",
          title: "Настольные игры",
        },
        {
          path: "/constructors",
          title: "Конструкторы",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 16px 0;
  background-color: var(--secondary-color);

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
      height: 0;
    }
  }

  &__link {
    position: relative;
    font-size: 14px;
    line-height: 18px;

    &:not(:last-child) {
      margin-right: 50px;
      padding-right: 50px;
      border-right: 1px solid #c3ad9f;
    }
  }
}
</style>
