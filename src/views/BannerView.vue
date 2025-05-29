<script setup lang="ts">
import ButtonCTA from '@/components/button/ButtonCTA.vue'
</script>

<template>
  <section
    class="relative bg-cover bg-center min-h-[700px] flex items-center justify-center"
    :style="{ backgroundImage: 'url(/img/tryai.jpg)', filter: 'brightness(0.9)' }"
  >
    <div class="content">
      <h1 class="text-content">
        Let our AI engine analyze your soil’s health and suggest the most suitable crops for your
        land
      </h1>

      <ButtonCTA class="button" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}

.hero img {
  width: 100%;
  object-position: center;
  filter: brightness(0.9);
}

.text-content {
  width: 70%;
  margin: auto;
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: bold;
  text-align: center;
  color: var(--text-white-soft);
}

.button {
  margin: 3rem auto;
}
</style>
