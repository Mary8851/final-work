<template>
  <div id="wrap" class="app-wrapper">
    <h2>Как принять участие?</h2>
    <div class="app-wrapper-points">
      <div class="app-wrapper-points__card">
        <div class="point one">1</div>
        <h5>
          Оставь
          <span
            ><a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
              >заявку</a
            ></span
          >
        </h5>
        <p>
          Заполни форму максимально честно, выбери продукты которые хочешь
          тестировать
        </p>
      </div>
      <div class="app-wrapper-points__card">
        <div class="point two">2</div>
        <h5>Ожидай приглашения на интервью</h5>
        <p>
          Будь на связи :) Мы напишем/позвоним тебе заранее и договоримся об
          удобном времени. Обычно интервью не занимает больше 30-40 минут.
        </p>
      </div>
      <div class="app-wrapper-points__card">
        <div class="point three">3</div>
        <h5>Позаботься об окружении</h5>
        <p>
          Выбери спокойное, тихое место с хорошим интернетом. Обязательно
          приноси с собой хорошее настроение 😉
        </p>
      </div>
      <div class="app-wrapper-points__card">
        <div class="point four">4</div>
        <h5>Получи клевую ачивку</h5>
        <p>
          После первого интервью, в приложении Мой Билайн тебе откроется новая
          ачивка «Яркий пиздюк». Спасибо, что ты с нами!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationPoints",
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  h2 {
    color: #10083f;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
  }
  &-points {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__card {
      width: 445px;
      margin: 46px 0;
      h5 {
        color: #000;
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        padding: 18px 0;
        span {
          color: #0c4dce;
          text-decoration: underline;
        }
      }
      p {
        color: #858295;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
.point {
  width: 62px;
  height: 62px;
  border-radius: 16px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.one {
  background: #eaf4ff;
  color: #0183d4;
}
.two {
  background: #f3ecff;
  color: var(--dark-label-link-visited, #9e66ff);
}
.three {
  background: #dff6d9;
  color: var(--light-label-success, #61ca45);
}
.four {
  background: #fff7e2;
  color: #ffbd12;
}
@media (max-width: 1024px) {
  .app-wrapper {
    text-align: center;
    &-points {
      justify-content: center;
    }
  }
  .point {
    margin: auto;
  }
}
@media (max-width: 576px) {
  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin: 0;
  }
  .app-wrapper-points {
    h5 {
      padding: 20px 0 12px 0;
    }
    &__card {
      margin: 20px 0 20px 0;
    }
  }
}
</style>
