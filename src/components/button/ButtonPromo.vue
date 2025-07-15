<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

// Props
const props = defineProps<{
  modalId: number
}>()

// Emit
const emit = defineEmits<{
  (e: 'open', id: number): void
}>()

// Handler
function handleClick() {
  emit('open', props.modalId)
}
</script>

<template>
  <div>
    <button class="px-4 py-2 font-medium button-promo rounded-sm" @click="handleClick">
      Get Now
    </button>
  </div>
</template>

<style scoped>
.button-promo {
  width: 200px;
  height: 50px;
  margin: 30px 0;
  padding: 10px 15px;
  background: linear-gradient(to right, var(--background-color), var(--button-color));
  border: 1px solid #d2d2d2;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
}

.button-promo:hover {
  background: linear-gradient(to right, var(--button-color), var(--background-color));
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}
</style>
