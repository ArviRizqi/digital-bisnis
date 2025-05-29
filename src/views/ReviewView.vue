<script setup lang="ts">
import data from '../assets/data/testimonial.json'
import IconTsemicolon from '@/components/icons/IconTsemicolon.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = ref(data)
const current = ref(0)
let interval: number

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % testimonials.value.length
  }, 10000)
})

onBeforeUnmount(() => clearInterval(interval))

function goTo(index: number) {
  current.value = index
}
</script>

<template>
  <section class="w-full bg-white transition-all duration-500">
    <div class="container px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <div class="title">
        <h1 class="text-title">Testimonials</h1>
      </div>

      <div class="text">
        <p class="text-content">
          Explore the whole collection of open-source web components and elements built with the
          utility classes from Tailwind
        </p>
      </div>
      <figure class="w-4/6 content">
        <IconTsemicolon class="tsemicolon-icon" />

        <!-- Transition Slide -->
        <transition name="fade" mode="out-in">
          <div :key="current">
            <blockquote>
              <p class="text-quote">"{{ testimonials[current].quote }}"</p>
            </blockquote>
            <figcaption class="flex mb-3 items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 image rounded-full"
                :src="testimonials[current].avatar"
                :alt="testimonials[current].name"
              />
              <div class="flex items-center divide-x-2 divide-gray-500">
                <div class="pr-3 name font-medium text-gray-900 dark:text-white">
                  {{ testimonials[current].name }}
                </div>
                <div class="pl-3 position text-sm font-light text-gray-500 dark:text-gray-400">
                  {{ testimonials[current].title }}
                </div>
              </div>
            </figcaption>
          </div>
        </transition>

        <!-- Dot Navigation -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            @click="goTo(i)"
            :class="[
              'w-4 h-4 mark-corousel rounded-full transition-all duration-300',
              current === i ? 'bg-gray-900' : 'bg-gray-300 ',
            ]"
          />
        </div>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: auto;
  height: 500px;
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
  margin-bottom: 25px;
  height: 100px;
}

.image {
  width: 50px;
  height: 50px;
  margin: 0 10px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
