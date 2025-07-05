<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import data from '../assets/testimonial.json'

interface Testimonial {
  name: string
  title: string
  quote: string
  avatar: string
}

const testimonials = ref<Testimonial[]>(data)
const currentSlide = ref(0)
const itemsPerSlide = 3

const totalSlides = computed(() => Math.ceil(testimonials.value.length / itemsPerSlide))

const visibleTestimonials = computed(() => {
  const start = currentSlide.value * itemsPerSlide
  return testimonials.value.slice(start, start + itemsPerSlide)
})

// Tambahkan tipe eksplisit pada parameter index
const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Perbaiki deklarasi interval
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  }, 10000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="title2 max-w-3xl mx-auto text-center">
      <h2 class="title-text2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        What Our Customers Are Saying
      </h2>
    </div>
    <div class="text">
      <p class="text-content">
        Explore the whole collection of open-source web components and elements built with the
        utility classes from Tailwind
      </p>
    </div>

        <div class="testimoni-section">
          <!-- Navigation -->
          <div class="testi-nav flex items-center mb-4">
            <!-- Prev Button -->
            <button
              @click="prev"
              class="mr-4 rounded-full border border-blue-200 text-black hover:bg-blue-100 w-10 h-10 flex items-center justify-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Page Indicator -->
            <span class="text-sm">{{ currentIndex + 1 }} of {{ testimonials.length }}</span>

            <!-- Next Button -->
            <button
              @click="next"
              class="ml-4 rounded-full bg-green-600 text-white w-10 h-10 flex items-center justify-center hover:bg-green-700"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Testimonial Box -->
          <div class="bg-gray-100 testimoni rounded-lg p-4">
            <!-- Stars -->
            <div class="flex mb-4">
              <template v-for="i in 5" :key="i">
                <svg
                  class="w-5 h-5"
                  :class="i <= currentTestimonial.rating ? 'text-yellow-500' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955
                    6.564.955-4.756 4.635 1.122 6.545z"
                  />
                </svg>
              </template>
            </div>

            <!-- Content -->
            <p class="text-gray-700 mb-4">
              {{ currentTestimonial.content }}
            </p>
          </div>

          <!-- Identitas -->
          <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
            <div class="text3 text-left">
              <p class="text-slate-900 font-medium">{{ item.name }}</p>
              <p class="text-sm text-slate-500">{{ item.title }}</p>
            </div>
            <img
              :src="item.avatar"
              :alt="item.name"
              class="image2 h-14 w-14 rounded-full object-cover border border-slate-200"
            />
          </div>
        </div>
      </transition-group>

      <!-- Dot Navigation -->
      <div class="button1 flex justify-center mt-8 space-x-2">
        <button
          v-for="(_, i) in totalSlides"
          :key="i"
          @click="goToSlide(i)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentSlide === i ? 'bg-slate-800' : 'bg-slate-300',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 60px;
  height: 700px;
}
.section-2 {
  padding: 50px;
}
.image-testimoni {
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
}

.image {
  width: 100%;
  height: 600px;
}

.testimoni-title {
  margin-bottom: 20px;
  margin-top: 80px;
}

.title {
  margin: 10px 0;
}

.text-title {
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--font-black);
}

.text {
  padding: 0 20px 20px;
  width: 60%;
  text-align: center;
  margin: auto;
}

.text-content {
  font-size: 1.6rem;
  line-height: 1;
  color: var(--font-black-soft);
}

.content {
  padding: 20px;
  margin: auto;
  margin-top: 20px;
}

.tsemicolon-icon {
  width: 80px;
  height: 80px;
  margin: auto;
}

.text-quote {
  font-size: 2rem;
  line-height: 1.1;
  color: var(--font-black);
  font-weight: 600;
  margin-bottom: 60px;
  height: 100px;
}

.image {
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 10px 0 20px;
  margin-bottom: 20px;
}
.name {
  font-size: 1.5rem;
  line-height: 1.2;
  color: var(--font-black);
  font-weight: 600;
}
.position {
  font-size: 1.5rem;
  line-height: 1.2;
  color: var(--font-black-soft);
  font-weight: 400;
}

.mark-corousel {
  margin: 10px 5px;
}
/* Animasi untuk fadeout */
.fadeout-enter-active,
.fadeout-leave-active {
  transition: all 0.5s ease;
}

.fadeout-enter-from,
.fadeout-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/*style baru*/

.title2 {
  padding: 0 20px 20px;
  width: 60%;
  text-align: center;
  margin: auto;
}
.title-text2 {
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--font-black);
}
.row3 {
  margin: 20px 75px 0 75px;
  padding: 20px;
}
.image2 {
  height: 50px;
  width: 50px;
  margin: 20px 20px;
}
.text2 {
  padding: 0px 10px 0px 15px;
  margin-bottom: 20px;
}
.text3 {
  padding: 0px 10px 0px 15px;
}
.button1 {
  margin-top: 20px;
}
</style>
