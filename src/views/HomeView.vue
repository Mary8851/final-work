<template>
  <div class="block1">
    <div class="container">
      <NavBar />
      <MainBanner />
    </div>
  </div>
  <div class="container">
    <MainText />
    <AdvantageCards />
    <ApplicationPoints />
    <FooterContent />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainBanner from "@/components/MainBanner.vue";
import MainText from "@/components/MainText.vue";
import ApplicationPoints from "@/components/ApplicationPoints.vue";
import FooterContent from "@/components/FooterContent.vue";
import AdvantageCards from "@/components/AdvantageCards.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    MainBanner,
    MainText,
    ApplicationPoints,
    FooterContent,
    AdvantageCards,
  },
};
</script>

<style>
.block1 {
  background: #f1f1f4;
  padding: 32px 0;
}
</style>
