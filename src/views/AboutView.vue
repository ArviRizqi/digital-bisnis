<script setup lang="ts">
import { ref, computed } from 'vue'
import AboutTab from '../components/about/AboutComponent.vue'
import JourneyTab from '../components/about/JourneyComponent.vue'
import VisionTab from '../components/about/VisionComponent.vue'
import MissionTab from '../components/about/MissionComponent.vue'
import Experience from '@/components/about/ExperienceComponents.vue'

const activeTab = ref('about')

const tabs = [
  { key: 'about', label: 'About' },
  { key: 'journey', label: 'Journey' },
  { key: 'vision', label: 'Vision' },
  { key: 'mission', label: 'Mission' },
]

const currentTabComponent = computed(() => {
  return {
    about: AboutTab,
    journey: JourneyTab,
    vision: VisionTab,
    mission: MissionTab,
  }[activeTab.value]
})
</script>

<template>
  <div class="about-section container">
    <div class="flex space-x-4 border-b">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="[
          'px-4 py-2 font-medium button rounded-full',
          tab.key === activeTab
            ? 'border-b-2 border-blue-500 text-slate-900 active'
            : 'text-slate-600',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <transition name="fade" mode="out-in">
        <component :is="currentTabComponent" :key="activeTab" />
      </transition>
    </div>

    <Experience />
  </div>
</template>

<style>
.about-section {
  padding: 10px 0;
  background-color: #fff;
  border-radius: 8px;
  height: auto;
  margin: 30px auto 50px;

  .button {
    width: 100px;
    padding: 10px 15px;
    margin: 30px 15px;
    background-color: transparent;
    border: 1px solid #e2e8f0;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 17px;
    font-weight: 500;
  }

  .active {
    background-color: var(--background-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  .button:first-child {
    margin-left: 0;
  }

  .button:hover {
    background-color: var(--background-color);
    border: 1px solid #e2e8f0;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  .tab-content {
    height: 370px;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 8px;
    width: 100%;
  }
}

.tab-judul {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--font-black);
}

.content-tab {
  padding: 0 30px;
}

.main-text {
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--font-black);
  line-height: 1.5;
}

.second-text {
  width: 70%;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--font-black-mute);
}

.circle {
  margin: 10px;
  width: 10ox;
  height: 10px;
  margin-right: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .text-content {
    flex-direction: column; /* Stack vertically on smaller screens if needed */
    gap: 1rem;
  }

  .tab-content {
    height: auto;
    margin: 20px 0;
    padding: 0 15px;
  }

  .content-tab {
    padding: 0 20px;
  }

  .button {
    width: auto;
    min-width: 70px;
    padding: 8px 12px;
    font-size: 15px;
    margin: 15px 10px;
  }

  .tab-judul {
    width: 100%;
  }

  .content-tab {
    width: 100%;
  }
  .main-text {
    font-size: 2rem;
    line-height: 1.3;
  }

  .second-text {
    width: 100%;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .text-content {
    flex-direction: column; /* Stack vertically on smaller screens if needed */
    gap: 1rem;
  }

  .tab-content {
    height: auto;
    margin: 20px 0;
    padding: 0 15px;
  }

  .content-tab {
    padding: 0 20px;
    overflow: auto;
  }

  .tab-judul {
    width: 100%;
  }

  .content-tab {
    width: 100%;
  }
  .button {
    font-size: 12px;
    padding: 6px 10px;
    margin: 10px 8px;
  }

  .main-text {
    font-size: 1.75rem;
  }

  .second-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 640px) {
  .text-content {
    flex-direction: column; /* Stack vertically on smaller screens if needed */
    gap: 1rem;
  }

  .tab-content {
    height: auto;
    margin: 20px 0;
    padding: 0 15px;
  }

  .content-tab {
    padding: 0 20px;
    overflow: auto;
  }

  .tab-judul {
    width: 100%;
  }

  .button {
    font-size: 12px;
    padding: 5px 8px;
    margin: 8px 6px;
  }

  .main-text {
    font-size: 1.5rem;
  }

  .second-text {
    font-size: 0.9rem;
  }

  .content-tab {
    padding: 0 10px;
    width: 100%;
  }
}
</style>
