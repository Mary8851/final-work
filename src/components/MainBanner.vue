<template>
  <div id="main-banner" class="main">
    <div class="main-text">
      <h1>Стань нашим респондентом</h1>
      <p>
        Мы хотим услышать твое мнение, опыт <br />
        и боли общения с цифровыми продуктами Beeline.
      </p>
      <div class="main-text-btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
          >Я готов!</a
        >
      </div>
    </div>
    <div class="main-banner">
      <img src="../assets/img/main-banner.png" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 36px 0;
  &-text {
    max-width: 340px;
    width: 100%;
    h1 {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      color: #10083f;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      color: #504d64;
      padding: 24px 0;
    }
    &-btn {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 158px;
        height: 56px;
        color: #10083f;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        padding: 0 32px;
        border-radius: 12px;
        background: #ffe14d;
      }
    }
  }
  &-banner {
    width: 648px;
    height: 429px;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1200px) {
  .main {
    justify-content: center;
    &-text {
      margin-bottom: 62px;
      text-align: center;
      &-btn {
        width: 158px;
        height: 48px;
        margin: auto;
        text-align: center;
      }
    }
  }
}
@media (max-width: 576px) {
  .main {
    &-text {
      margin-bottom: 12px;
      h1 {
        font-size: 30px;
        font-weight: 700;
        line-height: 36px;
      }
      &-btn {
        margin-bottom: 59px;
      }
    }
    &-banner {
      width: 353px;
      height: 234px;
    }
  }
}
</style>
