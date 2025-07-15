<template>
  <div
    class="container-banner grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 overflow-hidden text-black"
  >
    <!-- Left Gradient Section -->
    <div class="left-section">
      <img class="h-auto max-w-full" src="/public/img/digbis3.png" alt="image description" />
    </div>
    <!-- Right Text Section -->
    <div
      class="right-section flex flex-col justify-center items-start p-10 space-y-6 sm:block sm:w-full"
    >
      <h2 class="tittle text-4xl font-bold">We're here to help</h2>
      <p class="text text-black-300 leading-relaxed">
        Let our AI analyze your soil's condition and recommend the best possible crops for your land
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
  height: 800px;
}

.right-section {
  padding: 25px 50px 75px 100px;
}

.left-section {
  margin-left: 150px;
  border-radius: 20px;
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

/* Tablet: 1 column */
@media (max-width: 1024px) {
  .container-banner {
    grid-template-columns: 1fr;
    height: auto;
    padding: 40px 20px;
  }

  .left-section {
    margin-left: 0;
    margin-bottom: 40px;
    text-align: center;
  }

  .right-section {
    padding: 20px;
    text-align: center;
    align-items: center;
  }

  .tittle {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .text {
    width: 100%;
    max-width: 600px;
    font-size: 1.1rem;
    text-align: center;
    margin: 0 auto;
  }
  .button-icon {
    width: 200px;
    margin: 20px auto;
  }
}

/* Mobile: 1 column, hide image */
@media (max-width: 640px) {
  .container-banner {
    grid-template-columns: 1fr;
    height: auto;
    padding: 30px 15px;
  }

  .left-section {
    display: none; /* Hide image on mobile */
  }

  .right-section {
    padding: 20px 15px;
    text-align: center;
    align-items: center;
  }

  .tittle {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .text {
    width: 100%;
    font-size: 1rem;
    line-height: 1.6;
  }

  .button-icon {
    width: 180px;
    margin-top: 30px;
  }
}
</style>
