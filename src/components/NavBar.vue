<template>
  <div class="menu" :class="{ active: menuState }">
    <div class="menu-logo">
      <img src="../assets/img/logo-beeline.svg" alt="logo" class="menu-lg" />
    </div>
    <menu class="menu-link">
      <ul>
        <li><a href="">Какие плюсы?</a></li>
        <li><a href="">Что потребуется от тебя</a></li>
        <li><a href="">Наша миссия</a></li>
        <li><a href="">Присоединиться</a></li>
      </ul>
    </menu>
    <div class="burger" @click="menuState = !menuState">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="close" @click="menuState = !menuState">&#10006;</div>
  </div>
</template>

<script>
export default {
  computed: {
    menuState() {
      return this.$store.getters.menuState;
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit("menuActive");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-logo {
    width: 41px;
    height: 41px;
    img {
      width: 100%;
    }
  }
  &-link {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 36px;
      li a {
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
        color: #10083f;
      }
    }
  }
}
.burger {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #fff;
  padding: 8px;
}
.burger span {
  display: block;
  width: 20px;
  height: 2px;
  background: black;
}
.burger span:nth-child(2) {
  margin: 5px 0;
}
.active {
  margin-left: 0 !important;
}
.close {
  display: none;
  position: absolute;
  text-align: center;
  line-height: 36px;
  top: 28px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #f1f1f4;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    transition: 1s;
    &-logo {
      position: absolute;
      padding: 0;
      top: 28px;
      left: 20px;
    }
    &-link {
      ul {
        display: block;
        width: 100vw;
        height: 100vh;
        background: #fff;
        padding-left: 0;
        padding-top: 215px;
        li {
          margin-bottom: 36px;
          a {
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
          }
        }
      }
    }
    .gam {
      display: block;
    }
  }
  .close {
    display: block;
  }
}
@media (max-width: 576px) {
  .close {
    display: block;
  }
}
</style>
