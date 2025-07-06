<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50 px-4">
    <div
      class="container mx-auto bg-white rounded-xl shadow p-6 flex flex-col md:flex-row w-full h-[80vh]"
    >
      <!-- Left Image -->
      <div class="w-1/3 section-1 flex justify-center">
        <!-- Adjusted padding for better alignment -->
        <div class="image-testimoni">
          <img
            :src="currentTestimonial.image"
            alt="Customer Photo"
            class="image rounded-lg object-cover"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="w-2/3 section-2 justify-center">
        <div class="testimoni-title">
          <h2 class="title">What our customers are saying</h2>
          <p class="text-gray-500 font-medium text-xl mb-4">
            Serving over 50k+ customers every month
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
              class="ml-4 rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center hover:bg-indigo-700"
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

            <!-- Reviewer -->
            <div class="user-testimoni flex items-center">
              <p class="font-semibold mr-2">{{ currentTestimonial.name }}</p>
              <span class="text-sm text-indigo-600">{{ currentTestimonial.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testimonials = ref([
  {
    image: '/img/testimonial1.jpg',
    rating: 5,
    content:
      "As a busy professional, I don't have a lot of time to manage my investments, but this platform has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: 'Harsh P.',
    position: 'Product Designer',
  },
  {
    image: '/img/testimonial2.jpg',
    rating: 4,
    content:
      'This tool saves me hours every week. I can now focus on my clients without worrying about the backend processes.',
    name: 'Rina S.',
    position: 'Marketing Manager',
  },
  {
    image: '/img/testimonial3.jpg',
    rating: 5,
    content:
      'Excellent customer service and intuitive design. Highly recommended for professionals looking to streamline their workflow.',
    name: 'Doni K.',
    position: 'Photographer',
  },
])

const currentIndex = ref(0)
const currentTestimonial = ref(testimonials.value[currentIndex.value])

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  currentTestimonial.value = testimonials.value[currentIndex.value]
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  currentTestimonial.value = testimonials.value[currentIndex.value]
}
</script>

<style scoped>
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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.testimoni-section {
  width: 90%;
  height: 400px;
}

.testimoni {
  margin-top: 20px;
  width: 100%;
  padding: 30px;
}

.testimoni p {
  font-size: 1.2rem;
  margin: 15px 0 20px;
  line-height: 1.2;
}

.user-testimoni {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.user-testimoni p {
  font-size: 1.1rem;
  font-weight: 600;
}
.user-testimoni span {
  font-size: 1rem;
  color: #4a5568;
  margin-left: 20px;
}

.testi-nav {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 70px;
}

.testi-nav span {
  margin: 0 20px;
  font-size: 1.2rem;
}
</style>
