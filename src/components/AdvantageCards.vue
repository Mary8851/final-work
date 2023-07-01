<template>
  <div id="card" class="cards">
    <h2>Какие плюсы?</h2>
    <div class="cards-wrap">
      <div
        v-for="content in contents"
        :key="content"
        :style="{
          backgroundColor: content.color,
        }"
        class="cards-wrap__block"
      >
        <img :src="content.path" alt="" />
        <h6>{{ content.title }}</h6>
        <p>{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantageCards",
  computed: {
    contents() {
      return this.$store.state.contents;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  padding-bottom: 110px;
  h2 {
    color: #10083f;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
  }
  &-wrap {
    display: flex;
    gap: 28px;
    margin-top: 40px;
    &__block {
      width: 293px;
      height: 441px;
      border-radius: 16px;
      text-align: center;
      padding: 102px 0 127px 0;
      transition: 0.4s;
      img {
        width: 150px;
        height: 150px;
      }
      h6 {
        color: #000;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
        margin-top: 36px;
      }
      p {
        opacity: 0;
        color: #78735e;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-top: 12px;
      }
    }
  }
}
.cards-wrap__block:nth-child(2) {
  p {
    color: rgba(0, 0, 0, 0.5);
  }
}
.cards-wrap__block:last-child {
  h6,
  p {
    color: rgba(255, 255, 255, 0.8);
  }
}
.cards-wrap__block:hover {
  width: 35%;
  padding: 79px 35px 59px 35px;
  cursor: pointer;
  p {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .cards {
    text-align: center;
    padding-bottom: 80px;
    &-wrap {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
@media (max-width: 576px) {
  .cards {
    text-align: center;
    padding-bottom: 80px;
    h2 {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
    }
    &-wrap {
      justify-content: center;
      flex-wrap: wrap;
      &__block {
        width: 100%;
        padding: 24px 26px 40px 26px;
        p {
          opacity: 1;
        }
      }
    }
  }
}
</style>
