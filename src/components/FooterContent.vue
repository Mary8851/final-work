<template>
  <div class="footer">
    <div class="footer-img">
      <img src="../assets/img/footer-img.png" alt="" />
    </div>
    <div class="footer-text">
      <h2>Наша миссия</h2>
      <p>
        Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и
        непонятно куда нажать? Когда попадаешь на пустой экран после ввода
        данных? <br />
        <br />
        Нам тоже это не нравится! <br />
        <br />
        Мы хотим улучшать наши продукты, делать их проще и удобнее для
        пользователя. Присоединяйся, без тебя нам не обойтись!
      </p>
      <div class="footer-text__btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
          >Присоединиться</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterContent",
};
</script>

<style lang="scss" scoped>
.footer {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 105px 0;
  &-img {
    img {
      width: 100%;
    }
  }
  &-text {
    width: 445px;
    h2 {
      color: #10083f;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
    }
    p {
      padding: 40px 0;
      color: #504d64;
      font-size: 18px;
      line-height: 24px;
    }
    &__btn a {
      border-radius: 12px;
      background: #ffe14d;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 258px;
      height: 56px;
      padding: 0px 32px;
      color: #10083f;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }
  }
  @media (max-width: 1200px) {
    justify-content: center;
    text-align: center;
    padding: 60px 0;
    &-img {
      order: 2;
    }
    &-text {
      order: 1;
      margin: auto;
      text-align: center;
      margin-bottom: 48px;
      &__btn a {
        text-align: center;
        margin: auto;
      }
    }
  }
  @media (max-width: 576px) {
    &-text {
      h2 {
        font-size: 30px;
        font-weight: 700;
        line-height: 36px;
      }
      p {
        padding: 40px 0 24px 0;
      }
    }
  }
}
</style>
