<script setup lang="ts">
import ButtonLearn from '../button/ButtonLearn.vue'
import IconCircle from '../icons/IconCircle.vue'
</script>

<template>
  <div class="flex w-full text-content">
    <div class="flex tab-judul w-3/12">
      <IconCircle class="left-0 circle" />
      <h1>Our Journey</h1>
    </div>

    <div class="space-y-4 content-tab w-9/12">
      <div class="text">
        <p class="main-text">
          It all started with a simple question: “What if farmers could understand their land just
          like doctors understand patients?”
        </p>
        <p class="second-text">
          From that idea, we built a powerful, easy-to-use IoT system designed for real-world
          farming conditions.
        </p>
      </div>

      <ButtonLearn />
    </div>
  </div>
</template>
