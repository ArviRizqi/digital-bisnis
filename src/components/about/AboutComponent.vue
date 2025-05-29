<script setup lang="ts">
import ButtonLearn from '../button/ButtonLearn.vue'
import IconCircle from '../icons/IconCircle.vue'
</script>

<template>
  <div class="flex w-full text-content">
    <div class="flex tab-judul w-3/12">
      <IconCircle class="left-0 circle" />
      <h1>Who We Are at Farmora</h1>
    </div>

    <div class="space-y-4 content-tab w-9/12">
      <div class="text">
        <p class="main-text">
          With a strong foundation in both agriculture and smart technology, we aim to revolutionize
          farming for smallholders and agribusinesses alike.
        </p>
        <p class="second-text">
          By using IoT, data science, and automation, we help farmers gain control over their fields
          — making every seed, drop of water, and decision count.
        </p>
      </div>

      <ButtonLearn />
    </div>
  </div>
</template>

<style scoped>
/* Optional additional styling if needed */
</style>
