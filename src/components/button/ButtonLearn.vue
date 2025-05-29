<script setup lang="ts"></script>

<template>
  <div>
    <button class="px-4 py-2 font-medium button-learn rounded-full">Learn More</button>
  </div>
</template>

<style scoped>
.button-learn {
  width: auto;
  margin: 30px 0;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #d2d2d2;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
}

.button-learn:hover {
  background-color: var(--button-color);
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}
</style>
