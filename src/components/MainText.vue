<template>
  <div class="main-title">
    <h2>Кто такой респондент?</h2>
    <div class="main-title__text">
      <p>
        Респондент - человек, принимающий участие в опросе, интервью или
        тестировании дизайна. Мы используем твои ответы в проектировании новых
        продуктов, чтобы сделать их понятнее, удобнее и приятнее для
        пользователей.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainText",
};
</script>
<style lang="scss" scoped>
.main-title {
  padding: 110px 27px;
  h2 {
    color: #10083f;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    padding-bottom: 36px;
  }
  &__text {
    max-width: 642px;
    width: 100%;
    margin: auto;
    p {
      color: #504d64;
      text-align: center;
      font-size: 18px;
      line-height: 24px;
    }
  }
}
@media (max-width: 576px) {
  .main-title {
    padding: 64px 0;
    h2 {
      padding-bottom: 12px;
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
