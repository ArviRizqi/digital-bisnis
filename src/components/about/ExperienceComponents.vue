<script setup lang="ts">
import IconArrowup from '../icons/IconArrowup.vue'
</script>

<template>
  <div class="grid-container">
    <!-- Card 1 -->
    <div class="card">
      <img
        class="card-image"
        src="/img/community-people-working-together-agriculture-grow-food.jpg"
        alt="Agriculture Community"
      />
    </div>

    <!-- Card 2 -->
    <div class="card bg-card-light">
      <div class="text-container">
        <div class="text-title">
          <h1>5+</h1>
          <button><IconArrowup /></button>
        </div>
        <div class="text-subtitle">Years of Agricultural Innovation</div>
        <div class="text-content">
          With a decade of experience, we've pioneered advancements in precision agriculture,
          helping farmers increase yields by 30% while reducing water consumption by 25%.
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="card">
      <img class="card-image" src="/img/senior-woman-with-vegetables.jpg" alt="Senior Farmer" />
    </div>

    <!-- Card 4 -->
    <div class="card bg-card-dark">
      <div class="text-container">
        <div class="text-title">
          <h1>80%</h1>
          <button><IconArrowup /></button>
        </div>
        <div class="text-subtitle">Customer Satisfaction Rate</div>
        <div class="text-content">
          With an 80% customer satisfaction rate, our users trust us to deliver valuable tools and
          support that enable them to work smarter and grow better.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.card {
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  min-height: 320px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Background Colors (can customize your vars) */
.bg-card-light {
  background-color: var(--background-light, #f9f9f9);
}

.bg-card-dark {
  background-color: var(--background-color, #e5e5e5);
}

/* Text Styling */
.text-container {
  padding: 20px;
}

.text-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.text-title h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-black, #000);
}

.text-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-black, #000);
  margin-bottom: 10px;
}

.text-content {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-black-soft, #555);
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
}

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .text-title h1 {
    font-size: 2rem;
  }

  .text-subtitle {
    font-size: 1rem;
  }

  .text-content {
    font-size: 0.95rem;
  }
}
</style>
