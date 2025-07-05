<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import IconArrowup from '../icons/IconArrowup.vue'

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
  <button @click="handleClick">
    <IconArrowup />
  </button>
</template>

<style scoped>
/* styling tambahan jika perlu */
button {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-5px);
}
</style>
