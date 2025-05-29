<script setup lang="ts"></script>

<template>
  <div class="hero">
    <img src="/img/nurturing-new-life.jpg" alt="" srcset="" />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%; /* tinggi penuh viewport */
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.9);
}

.text {
  position: relative;
  z-index: 99;
}
</style>
