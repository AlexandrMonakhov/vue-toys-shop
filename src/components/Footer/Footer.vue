<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <img
          id="footer-logo"
          src="@/assets/img/logo.svg"
          alt="Логотип: Toys with love"
        />

        <nav class="footer-nav" id="footer-nav">
          <a class="footer-nav__link" href="">Доставка и оплата</a>
          <a class="footer-nav__link" href="">Как купить товар</a>
          <a class="footer-nav__link" href="">Обмен и возврат</a>
          <a class="footer-nav__link" href="">О нас</a>
          <a class="footer-nav__link" href="">Оптовым покупателям</a>
        </nav>

        <div class="footer-subscription" id="footer-subscription">
          <h3 class="footer-subscription__title">
            Будьте в курсе всех новинок и скидок
          </h3>
          <p class="footer-subscription__text">
            Подписывайтесь на почтовую рассылку. Мы не рассылаем спам
            и&nbsp;присылаем только ценную и важную для вас информацию.
          </p>
          <div class="footer-subscription-input">
            <input
              class="footer-subscription-input__item"
              type="email"
              placeholder="Ваш email"
            />
            <button class="footer-subscription-input__button">
              Подписаться
            </button>
          </div>
        </div>

        <div class="footer-socials" id="footer-socials">
          <h3 class="footer-socials__title">Мы в социальных сетях</h3>
          <div class="footer-socials-items">
            <a class="footer-socials__item" href="#">
              <img src="./assets/img/facebook.svg" alt="" />
            </a>
            <a class="footer-socials__item" href="#">
              <img src="./assets/img/instagram.svg" alt="" />
            </a>
            <a class="footer-socials__item" href="#">
              <img src="./assets/img/vk.svg" alt="" />
            </a>
            <a class="footer-socials__item" href="#">
              <img src="./assets/img/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 0;
  flex: 0 0 auto;
  background-color: #dcb994;

  &-wrapper {
    display: grid;
    grid-template-columns: 280px 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "footerLogo footerNav footerSubscription"
      "footerSocials footerNav footerSubscription";

    @media (max-width: 1070px) {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "footerLogo footerNav"
        "footerSocials footerSubscription";
    }

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      grid-template-rows: 30px 100px 1fr 1.4fr;
      grid-template-areas:
        "footerLogo"
        "footerSocials"
        "footerNav"
        "footerSubscription";
      place-items: center;
    }
  }

  &-nav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 87px;
    max-width: 370px;

    @media (max-width: 680px) {
      text-align: center;
      height: auto;
    }

    &__link {
      margin-bottom: 7px;

      @media (max-width: 680px) {
        margin-bottom: 15px;
      }
    }
  }

  &-subscription {
    @media (max-width: 680px) {
      text-align: center;
    }

    &__title {
      font-family: var(--bold-font);
      font-size: 18px;
      line-height: 23px;
    }

    &__text {
      font-size: 14px;
      line-height: 19px;
      max-width: 400px;
      margin: 15px 0 20px 0;

      @media (max-width: 680px) {
        text-align: center;
        margin: 15px auto;
      }
    }

    &-input {
      position: relative;
      width: 408px;
      height: 43px;

      @media (max-width: 680px) {
        width: 100%;
      }

      &__item {
        width: 100%;
        padding: 12px 195px 12px 22px;
        border-radius: var(--border-radius);
        border: none;
        font-family: var(--regular-font);
        font-size: 15px;
        line-height: 19px;
      }

      &__button {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        padding: 12px 54px;
        border-radius: var(--border-radius);
        border: none;
        font-family: var(--bold-font);
        font-size: 15px;
        line-height: 19px;
        color: var(--main-color);
        background-color: var(--dark-color);

        @media (max-width: 680px) {
          position: static;
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }

  &-socials {
    &__title {
      font-size: 15px;
      line-height: 19px;
      margin-bottom: 12px;
    }

    &-items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 181px;
    }
  }

  #footer-logo {
    grid-area: footerLogo;
  }

  #footer-nav {
    grid-area: footerNav;
  }

  #footer-subscription {
    grid-area: footerSubscription;
  }

  #footer-socials {
    grid-area: footerSocials;
  }
}
</style>
