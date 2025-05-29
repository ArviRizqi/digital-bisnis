<script setup lang="ts">
import ButtonLearn from '../button/ButtonLearn.vue'
import IconCircle from '../icons/IconCircle.vue'
</script>

<template>
  <div class="flex text-content">
    <div class="flex tab-judul w-3/12">
      <IconCircle class="left-0 circle" />
      <h1>Our Mission</h1>
    </div>
    <div class="space-y-4 content-tab w-9/12">
      <div class="text">
        <ul>
          <li class="flex">
            <IconCircle class="left-0 circle circle-list" />
            To simplify precision farming using affordable and accessible IoT technology.
          </li>
          <li class="flex">
            <IconCircle class="left-0 circle circle-list" />
            To support farmers in making smarter decisions through data-driven insights.
          </li>
          <li class="flex">
            <IconCircle class="left-0 circle circle-list" />
            To promote sustainability by reducing resource waste and increasing yield efficiency.
          </li>
          <li class="flex">
            <IconCircle class="left-0 circle circle-list" />
            To bridge the gap between traditional knowledge and modern innovation.
          </li>
        </ul>
      </div>

      <ButtonLearn />
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 15px;
}

.circle-list {
  margin-top: 15px;
}

/* Responsive */
@media (max-width: 1024px) {
  li {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .circle-list {
    margin-top: 13px;
  }
}

@media (max-width: 768px) {
  li {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .circle-list {
    margin-top: 10px;
  }
}
</style>
