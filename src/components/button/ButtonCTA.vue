<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue'
</script>

<template>
  <div class="buttonComponents rounded-full">
    <button class="rounded-full flex">
      <div class="text w-2/3">Try Now</div>
      <IconArrow class="icon w-1/3" />
    </button>
  </div>
</template>

<style scoped>
.buttonComponents {
  background-color: var(--button-color);
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 20px;
  margin-left: 20px;
  width: 180px;
  height: 60px;
}

.buttonComponents button {
  font-family: 'Barlow', sans-serif;
  width: 100%;
  background-color: var(--button-color);
  color: var(--text-black-soft);
  padding: 8px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--button-color-hover);
  color: var(--text-black);
  transition: background-color 0.3s ease;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.text {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-black);
  left: 0;
  text-align: center;
  padding: 3px 0;
}

.icon {
  width: 25px;
  right: 0;
  margin-left: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .buttonComponents {
    width: 150px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .text {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-black);
    left: 0;
    text-align: center;
    padding: 3px 0;
  }

  .icon {
    width: 20px;
    right: 0;
    margin-left: 10px;
  }
}
@media (max-width: 768px) {
  .buttonComponents {
    width: 120px;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .text {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-black);
    left: 0;
    text-align: center;
    padding: 3px 0;
  }

  .icon {
    width: 14px;
    right: 0;
    margin-left: 10px;
  }
}
</style>
