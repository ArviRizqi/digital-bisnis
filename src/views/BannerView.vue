<template>
  <div
    class="container-banner grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-gray-900 text-white"
  >
    <!-- Left Gradient Section -->
    <div
      class="left-section bg-[url('../../public/img/ai.jpg')] filter brightness-75 h-full w-full bg-cover"
    ></div>
    <!-- Right Text Section -->
    <div
      class="right-section flex flex-col justify-center items-start p-10 space-y-6 bg-gradient-to-r from-grey-600 via-green-800 to-green-600"
    >
      <h2 class="tittle text-4xl font-bold">We’re here to help</h2>
      <p class="text text-gray-300 leading-relaxed">
        Let our AI analyze your soil’s condition and recommend the best possible crops for your land
        based on accurate scientific data.
      </p>

      <ButtonCTA class="button-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic needed for static component
import ButtonCTA from '@/components/button/ButtonCTA.vue'
</script>

<style scoped>
.container-banner {
  width: 100%;
  margin: 0;

  height: 500px;
}

.right-section {
  padding: 25px 50px 75px 100px;
}
.tittle {
  font-weight: 600;
  font-size: 3rem;
  color: var(--font-black);
}
.text {
  font-size: 1.25rem;
  width: 400px;
}
.button-icon {
  width: 200px;
  margin-top: 50px;
}
</style>
