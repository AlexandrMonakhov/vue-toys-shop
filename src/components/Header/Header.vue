<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <a id="header-logo" href="/">
          <img
            class="logo"
            src="@/assets/img/logo.svg"
            alt="Логотип: Toys with love"
          />
        </a>

        <div class="header-selection" id="header-selection">
          <img
            class="header-selection__image"
            src="./assets/img/location.svg"
            alt="Ваш город"
          />

          <span class="header-select__text">Ваш город:</span>
          <select class="header-select">
            <option value="moscow">Москва</option>
            <option value="spb">Санкт-Петербург</option>
            <option value="rnd">Ростов-на-Дону</option>
          </select>
        </div>

        <div class="header-input-box" id="header-input-box">
          <input
            type="text"
            class="header-input-box__search"
            placeholder="Начните искать"
          />

          <button class="header-input-box-button">
            <img
              class="header-input-box-button__image"
              src="./assets/img/search.svg"
              alt="Поиск"
            />
          </button>
        </div>

        <a class="header__link" href="/#" id="header__link">
          Доставка и оплата
        </a>

        <div class="header-cart" id="header-cart">
          <button class="header-cart__button">
            <img src="./assets/img/cart.svg" alt="Корзина" />
          </button>
          <div class="header-cart-info">
            <div class="header-cart-info-text">
              <span class="header-cart-info-text--bold">Товаров: </span>
              <span class="header-cart-info-text--regular">12</span>
            </div>
            <div class="header-cart-info-text">
              <span class="header-cart-info-text--bold">Сумма: </span>
              <span class="header-cart-info-text--regular">21 000 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style lang="scss" scoped>
.header {
  padding: 26px 0;

  &-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 2fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "headerLogo headerSelection headerInputBox headerLink headerCart";
    justify-items: flex-end;
    align-items: center;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 2fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "headerLogo headerSelection headerLink headerCart" "headerInputBox headerInputBox headerInputBox headerInputBox";
      gap: 10px;
    }

    @media (max-width: 866px) {
      grid-template-areas: "headerLogo headerSelection headerCart headerCart" "headerInputBox headerInputBox headerInputBox headerInputBox";
    }

    @media (max-width: 765px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "headerLogo headerCart" "headerInputBox headerInputBox";
    }
  }

  &-selection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 175px;
    &__image {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin-right: 10px;
    }
  }

  &-select {
    border: none;
    width: 70px;

    &__text {
      font-family: var(--bold-font);
      font-size: 14px;
      line-height: 18px;
      margin-right: 5px;
    }
  }

  &-input-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 255px;
    height: 44px;

    @media (max-width: 1000px) {
      width: 100%;
    }

    &__search {
      width: 100%;
      padding: 12px 0px 12px 20px;
      border: 1px solid var(--elements-color);
      border-radius: var(--border-radius);
      color: var(--placeholder-color);
      font-family: var(--regular-font);
      font-size: 14px;
      line-height: 18px;
    }

    &-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 42px;
      height: 100%;
      padding: 0;
      background-color: var(--elements-color);
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
    }
  }

  &__link {
    font-family: var(--bold-font);
  }

  &-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      padding: 0;
      margin-right: 15px;
      background-color: var(--elements-color);
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
    }

    &-info {
      &-text {
        font-size: 14px;
        line-height: 18px;

        @media (max-width: 360px) {
          font-size: 12px;
          line-height: 16px;
        }

        &--bold {
          font-family: var(--bold-font);
        }
      }
    }
  }

  #header-logo {
    grid-area: headerLogo;

    @media (max-width: 765px) {
      justify-self: flex-start;
    }
  }

  #header-selection {
    grid-area: headerSelection;

    @media (max-width: 765px) {
      display: none;
    }
  }

  #header-input-box {
    grid-area: headerInputBox;
  }

  #header__link {
    grid-area: headerLink;

    @media (max-width: 866px) {
      display: none;
    }
  }

  #header-cart {
    grid-area: headerCart;
  }
}
</style>
