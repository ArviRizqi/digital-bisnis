<script setup lang="ts">
import HeroImage from '../components/header/HeroImage.vue'
import BannerText from '../components/header/BannerText.vue'
import ButtonTryNow from '../components/button/ButtonCTA.vue'
</script>

<template>
  <main>
    <div class="heroImage">
      <HeroImage />
    </div>

    <div class="heroText">
      <BannerText />
      <ButtonTryNow class="button-icon" />
    </div>
  </main>
</template>

<style scoped>
.heroImage {
  position: relative;
}
.heroText {
  position: absolute;
  top: 350px;
  left: 200px;
  display: block;
  justify-content: left;
  align-items: left;
  z-index: 1;
}

/* Responsive */
@media (max-width: 1280px) {
  .heroText {
    position: absolute;
    top: 130px;
    left: 50px;
    display: block;
    justify-content: left;
    align-items: left;
    z-index: 1;
  }
}
@media (max-width: 768px) {
  .heroText {
    position: absolute;
    top: 100px;
    left: 50px;
    display: block;
    justify-content: left;
    align-items: left;
    z-index: 1;
  }
}
</style>
