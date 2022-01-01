<template>
  <section class="home">
    <div class="container">
      <div class="home-wrapper">
        <h1 class="title" id="home__title">
          Детские игрушки, сделанные с любовью!
        </h1>
        <div class="home-info__text" id="home-info__text">
          <p class="subtitle">
            Мы знаем, как важно дарить детям свою любовь. И проявлять её можно
            не только с помощью чувств, но и с помощью игрушек, с которыми дети
            будут взаимодействовать каждый день.
          </p>
          <button class="button home-button">
            <span class="home-button__text">Перейти в каталог</span>
            <img
              class="home-button__image"
              src="./assets/img/button-arrow.png"
              alt="Стрелка вправо"
            />
          </button>
        </div>
        <div class="home-benefits" id="home-benefits">
          <div
            class="home-benefit"
            v-for="benefit in benefits"
            :key="benefit.image"
          >
            <img
              :src="require(`./assets/img/${benefit.image}.svg`)"
              :alt="benefit.title"
            />
            <div class="home-benefit-text">
              <h3 class="home-benefit-text__title">{{ benefit.title }}</h3>
              <p class="home-benefit-text__text">{{ benefit.text }}</p>
            </div>
          </div>
        </div>
        <div class="home-image" id="home-image">
          <img src="./assets/img/main-photo.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <CardHeader :title="newProductsTitle" :subtitle="newProductsSubtitle" />
        <Card :cardData="products" />
      </div>
    </div>
  </section>

  <section class="recommendations">
    <div class="container">
      <div class="recommendations-wrapper">
        <CardHeader
          :title="recommendationTitle"
          :subtitle="recommendationSubtitle"
        />
        <Card :cardData="products" />
      </div>
    </div>
  </section>
</template>

<script>
import { newProducts, benefits } from "./data";
import { Card, CardHeader } from "@/UI";

export default {
  name: "app-home",
  components: {
    Card,
    CardHeader,
  },
  data() {
    return {
      products: newProducts,
      benefits: benefits,
      newProductsTitle: "Новинки",
      newProductsSubtitle: "Все новые товары за последний месяц",
      recommendationTitle: "Рекомендации",
      recommendationSubtitle: "Вам могут понравиться эти товары",
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("./assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;

  @media (max-width: 780px) {
    background-position: center top -162px;
  }

  &-info {
    &__text {
      @media (max-width: 780px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 160px 1fr 300px;
    grid-template-areas:
      "homeTitle homeImage"
      "homeInfoText homeImage"
      "homeBenefits homeBenefits";

    @media (max-width: 1100px) {
      grid-template-areas:
        "homeTitle homeImage"
        "homeInfoText homeImage"
        "homeBenefits homeBenefits";
    }

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      grid-template-rows: 160px 1fr 320px 280px;
      grid-template-areas: "homeTitle" "homeImage" "homeInfoText" "homeBenefits";
      place-items: center;
    }
  }

  &-image {
    img {
      max-width: 470px;

      @media (max-width: 1220px) {
        max-width: 370px;
      }

      @media (max-width: 890px) {
        max-width: 310px;
      }
    }
  }

  &-button {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 21px;
    padding: 18px 37px 18px 40px;
    color: var(--main-color);
    margin-bottom: 100px;

    @media (max-width: 780px) {
      margin-bottom: 0;
    }

    &__text {
      margin-right: 20px;
    }
  }

  &-benefits {
    display: flex;

    @media (max-width: 780px) {
      flex-direction: column;
      margin-bottom: 60px;
    }
  }

  &-benefit {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 320px;

    &:not(:last-child) {
      margin-right: 40px;

      @media (max-width: 780px) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }

    &-text {
      margin-left: 15px;

      &__title {
        font-family: var(--bold-font);
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 10px;
      }
      &__text {
        font-family: var(--regular-font);
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
}

.title {
  max-width: 422px;
  margin-bottom: 40px;
  font-family: var(--section-font);
  font-weight: normal;
  font-size: 70px;
  line-height: 60px;

  @media (max-width: 447px) {
    font-size: 50px;
    line-height: 43px;
    text-align: center;
  }
}

.subtitle {
  max-width: 579px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 21px;

  @media (max-width: 1010px) {
    max-width: 500px;
  }

  @media (max-width: 890px) {
    max-width: 364px;
  }
}

#home-info__text {
  grid-area: homeInfoText;
}

#home-image {
  grid-area: homeImage;
}

#home-benefits {
  grid-area: homeBenefits;
}

#home__title {
  grid-area: homeTitle;
}
</style>
