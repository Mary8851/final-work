<template>
  <div class="header">
    <div class="menu-logo">
      <img src="../assets/img/logo-beeline.svg" alt="logo" class="menu-lg" />
    </div>
    <div class="menu" :class="{ active: menuState }" @click="closeMenu">
      <ul>
        <li><a href="#card">Какие плюсы?</a></li>
        <li><a href="#wrap">Что потребуется от тебя</a></li>
        <li><a href="#footer">Наша миссия</a></li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
            >Присоединиться</a
          >
        </li>
      </ul>
    </div>
  </div>

  <div class="mb-menu" @click="MenuActive" :class="{ active: menuState }">
    <span></span>
    <span></span>
    <span></span>
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
    MenuActive() {
      this.$store.commit("menuActive");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 1140px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.menu-logo {
  width: 41px;
  height: 41px;
  img {
    width: 100%;
  }
}
.menu {
  display: flex;
  align-items: center;
  text-align: right;
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
.mb-menu {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #fff;
  padding: 8px;
  position: absolute;
  top: 28px;
  right: 20px;
}
.mb-menu span {
  width: 20px;
  height: 2px;
  background: #000;
}
.mb-menu span:nth-child(2) {
  margin: 4px 0;
}
.mb-menu.active {
  background: #f1f1f4;
}
.mb-menu.active span:nth-child(2) {
  display: none;
}
.mb-menu.active span:first-child {
  transform: rotate(45deg);
}
.mb-menu.active span:last-child {
  transform: rotate(-45deg);
  position: absolute;
}
@media (max-width: 768px) {
  .mb-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .menu {
    position: fixed;
    top: 0;
    left: -100%;
    text-align: center;
    width: 100%;
    transition: 1s;
    &-logo {
      position: absolute;
      padding: 0;
      top: 28px;
      left: 20px;
      z-index: 9;
    }
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

  .menu.active {
    left: 0;
  }
}
</style>
