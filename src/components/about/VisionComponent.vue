<script setup lang="ts">
import ButtonLearn from '../button/ButtonLearn.vue'
import IconCircle from '../icons/IconCircle.vue'
</script>

<template>
  <div class="flex text-content">
    <div class="flex tab-judul w-3/12">
      <IconCircle class="left-0 circle" />
      <h1>Our Vission</h1>
    </div>
    <div class="space-y-4 content-tab w-9/12">
      <div class="text">
        <p class="main-text">
          To become the leading smart agriculture partner for farmers across the globe by
          transforming traditional farming into data-driven and efficient agriculture.
        </p>
        <p class="second-text">
          We envision a future where every farmer, no matter how remote, has access to the power of
          real-time insights and intelligent tools.
        </p>
      </div>

      <ButtonLearn />
    </div>
  </div>
</template>
