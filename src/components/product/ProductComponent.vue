<script setup lang="ts">
import ButtonPromo from '@/components/button/ButtonPromo.vue'
</script>

<template>
  <section class="product">
    <div class="title">
      <h1 class="text-title">Our Product</h1>
    </div>
    <div class="mx-auto">
      <div class="content-card overflow-hidden flex flex-col lg:flex-row bg-white">
        <!-- Image Section -->
        <div class="w-1/2 lg:w-1/2 image-container relative">
          <div class="image">
            <img
              src="/img/iot.jpg"
              alt="IoT Solutions"
              class="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <!-- Text Content Section -->
        <div class="w-1/2 lg:w-1/2 text-container flex flex-col justify-center">
          <span class="promo-text">
            Limited Offer! <br />
            Buy Now Before It’s Gone!
          </span>
          <h2 class="text-3xl md:text-4xl pracontent-text font-bold text-gray-800 mb-4">
            Transform Your Farm Today
          </h2>
          <p class="text-gray-600 mb-6 leading-relaxed content-text">
            Our smart agricultural solutions are designed to help modern farmers manage their land
            more efficiently, increase crop yields, and maintain soil health sustainably. Join
            thousands of farmers and agribusinesses who have already embraced our technology to
            revolutionize their operations!
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <ButtonPromo />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product {
  margin: 80px auto 50px;
}

.title {
  margin: 20px 0;
}

.text-title {
  font-weight: 600;
  font-size: 2.3rem;
  color: var(--font-black);
}

.image-container {
  padding: 20px;
  background-color: transparent;
}

.text-container {
  padding: 30px;
}

.promo-text {
  font-size: 2.3rem;
  line-height: 1.2;
  color: var(--font-black);
  font-weight: 600;
  margin-bottom: 25px;
}

.pracontent-text {
  font-size: 1.9rem;
  line-height: 1.2;
  color: var(--font-black);
  font-weight: 600;
  margin-bottom: 10px;
}

.content-text {
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--font-black-soft);
}

@media (max-width: 1024px) {
  .content-card {
    flex-direction: column; /* Stack image and text vertically */
  }

  .image-container,
  .text-container {
    width: 100%;
    padding: 20px;
  }

  .promo-text {
    font-size: 2rem;
  }

  .pracontent-text {
    font-size: 1.7rem;
  }

  .content-text {
    font-size: 1rem;
    width: 100%;
  }
  .text-title {
    padding-left: 20px;
  }
}

@media (max-width: 768px) {
  .promo-text {
    font-size: 1.6rem;
  }

  .pracontent-text {
    font-size: 1.4rem;
  }

  .content-text {
    font-size: 0.95rem;
  }

  .text-title {
    font-size: 2rem;
    padding-left: 20px;
  }

  .text-container {
    padding: 20px 15px;
  }

  .image-container {
    padding: 15px;
  }
}

@media (max-width: 640px) {
  .promo-text {
    font-size: 1.3rem;
  }

  .pracontent-text {
    font-size: 1.2rem;
  }

  .content-text {
    font-size: 0.9rem;
  }

  .text-title {
    font-size: 1.6rem;
    padding-left: 20px;
  }
}
</style>
