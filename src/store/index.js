import { createStore } from "vuex";

export default createStore({
  state: {
    contents: [
      {
        path: require("../assets/img/card1.png"),
        title: "Будь первым",
        text: "Ты первым увидишь наши новые продукты и поучаствуешь в их разработке",
        color: "#FFF6CC",
      },
      {
        path: require("../assets/img/card2.png"),
        title: "Поделись опытом",
        text: "Будем рады узнать о твоем опыте использования наших продуктов",
        color: "#EAF4FF",
      },
      {
        path: require("../assets/img/card3.png"),
        title: "Получи уникальную ачивку",
        text: "Блестящая, свеженькая и такая уникальная ачивка в приложении “Мой Билайн”",
        color: "#000",
      },
    ],
    menuState: false,
  },
  getters: {
    menuState(state) {
      return state.menuState;
    },
  },
  mutations: {
    menuActive(state) {
      state.menuState = !state.menuState;
    },
  },
  actions: {},
  modules: {},
});
