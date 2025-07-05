<script setup lang="ts">
import IconClose from '../icons/IconClose.vue'
const props = defineProps<{
  isOpen: boolean
  title: string
  image: string
  content: string
}>()
</script>

<template>
  <div v-if="props.isOpen" class="modal-open fixed inset-0 flex justify-center items-center z-50">
    <div class="container container-modal mx-auto bg-white p-4 rounded-lg w-6xl relative h-[600px]">
      <div class="modal-head">
        <h2 class="text-xl font-bold mb-2 modal-title">{{ props.title }}</h2>
        <button class="absolute top-2 right-2 text-4xl" @click="$emit('close')">
          <IconClose class="icon-close" />
        </button>
      </div>
      <div class="modal-content flex">
        <div class="sidebar-modal w-2/6">
          <img
            v-if="props.image"
            :src="props.image"
            alt="Modal Image"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="modal-main w-4/6">
          <p>{{ props.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahan styling jika dibutuhkan */
.modal-open {
  background-color: rgba(0, 0, 0, 0.5);
}

.container-modal {
  padding: 20px 30px;
}

.modal-head {
  padding-bottom: 10px;
}

.modal-title {
  font-size: 1.7rem;
  font-weight: bold;
}

.icon-close {
  width: 26px;
  height: 26px;
  fill: currentColor;
}

.sidebar-modal {
  margin-top: 20px;
  padding: 10px 20px 10px 10px;
}

.modal-content p {
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.6;
  color: #000;
  text-align: justify;
  padding: 0 30px 0 10px;
}
</style>
