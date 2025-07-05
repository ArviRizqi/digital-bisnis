<script setup lang="ts">
import IconCircle from '../icons/IconCircle.vue'
import IconChart from '../icons/IconChart.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconRain from '../icons/IconRain.vue'
import ButtonModal from '../button/ButtonModal.vue'
import Modal from '@/components/modal/ModalView.vue'

import { ref } from 'vue'

// Contoh isi modal dari JSON
const modalContent = ref({ title: '', image: '', content: '' })
const modalOpen = ref(false)

function openModal(id: number) {
  // Ambil konten dari id tertentu, contoh statis:
  if (id === 1) {
    modalContent.value = {
      title: 'Nutrient Scanner for Smart Soil Health',
      image: '/img/soil.jpg',
      content:
        'This feature allows you to quickly access detailed information about the essential nutrients present in your soil. It includes measurements of:Nitrogen (N), which plays a critical role in promoting healthy leaf and stem growth by supporting chlorophyll production. Phosphorus (P), which is essential for strong root development, flowering, and fruiting processes. Potassium (K), which helps regulate plant metabolism, improves disease resistance, and enhances overall crop quality and yield. pH levels, which determine the acidity or alkalinity of your soil, directly affecting the availability of nutrients to plants. With this comprehensive data at your fingertips, you can strategically plan your fertilization programs, avoid nutrient deficiencies or toxicities, and ensure that each crop receives precisely what it needs to grow vigorously. Ultimately, this empowers you to maximize productivity while minimizing wasted inputs and environmental impact.',
    }
  } else if (id === 2) {
    modalContent.value = {
      title: 'Rain Forecast Powered by AI',
      image: '/img/rain.jpg',
      content:
        'Our system provides highly accurate, location-specific weather forecasts enhanced by artificial intelligence algorithms. By leveraging AI, these predictions incorporate patterns from historical climate data, current atmospheric conditions, and microclimate variations around your farm to deliver tailored insights. This enables you to: Proactively schedule planting dates to ensure seeds germinate under optimal conditions. Time irrigation efficiently, avoiding overwatering when rainfall is imminent. Plan harvest activities to prevent crop damage caused by unexpected storms or heavy rainfall. Overall, this capability helps you reduce operational risks, minimize crop losses, and make confident decisions based on advanced weather intelligence rather than generic forecasts.',
    }
  } else if (id === 3) {
    modalContent.value = {
      title: 'AI-Powered Crop Recommendation',
      image: '/img/ai.jpg',
      content:
        'Our AI-powered recommendation engine conducts an in-depth analysis of your soil’s nutrient profile, pH balance, texture, and other agronomic factors to determine the best crops for your land. This recommendation system is designed to align with your specific farming goals, whether you prioritize: Maximum yield to achieve the highest possible production output per hectare. Short harvest cycles to generate frequent revenue streams with fast-growing crops. Sustainability to maintain long-term soil health, preserve natural resources, and support environmentally friendly farming practices. By understanding the unique characteristics of your land and matching them with optimal crops, our AI engine empowers you to enhance profitability, maintain soil vitality, and achieve farming objectives efficiently and confidently.',
    }
  } else if (id === 4) {
    modalContent.value = {
      title: 'Seamless IoT Dashboard',
      image: '/img/db.jpg',
      content:
        'The platform consolidates all critical farming data and recommendations into a single, intuitive dashboard that is accessible on any smartphone or tablet. Whether you are assessing nutrient levels, checking weather forecasts, or reviewing AI-based planting suggestions, everything is organized clearly and designed for ease of use. Even if you have no prior experience with technology platforms, you will find the interface straightforward and easy to navigate, enabling you to: Check soil health reports within seconds. View real-time weather updates and alerts. Access tailored planting, fertilizing, and harvesting recommendations seamlessly. This ensures that every farmer, regardless of their digital literacy level, can leverage smart farming technology to improve productivity and operational efficiency.',
    }
  }

  modalOpen.value = true
}
</script>

<template>
  <div class="title flex">
    <IconCircle class="circle" />
    <h1 class="title-sub">Why Should you Choose Our</h1>
  </div>

  <div class="grid grid-cols-2 gap-6">
    <!-- Box 1 -->
    <div class="content-box rounded-xl p-4 relative h-65">
      <div class="text-container">
        <div class="text-title">
          <IconEcosystem class="icon" />
          <ButtonModal :modalId="1" @open="openModal" />
        </div>

        <div class="text-subtitle">Nutrient Scanner for Smart Soil Health</div>

        <div class="text-content">
          Gain instant insights into your soil’s nutrient composition — including nitrogen (N),
          phosphorus (P), potassium (K), and pH levels — so you can make informed fertilization
          decisions and optimize crop performance.
        </div>
      </div>
    </div>

    <!-- Box 4 -->
    <div class="content-box rounded-xl p-4 relative h-65">
      <div class="text-container">
        <div class="text-title">
          <IconRain class="icon" />
          <ButtonModal :modalId="2" @open="openModal" />
        </div>

        <div class="text-subtitle">Rain Forecast Powered by AI</div>

        <div class="text-content">
          Plan ahead with localized, AI-enhanced weather predictions. Avoid losses due to unexpected
          rainfall and choose the best days for planting, watering, or harvesting.
        </div>
      </div>
    </div>

    <!-- Box 2 -->
    <div class="content-box rounded-xl p-4 relative h-65">
      <div class="text-container">
        <div class="text-title">
          <IconSupport class="icon" />
          <ButtonModal :modalId="3" @open="openModal" />
        </div>

        <div class="text-subtitle">AI-Powered Crop Recommendation</div>

        <div class="text-content">
          Let our AI engine analyze your soil’s health and suggest the most suitable crops for your
          land — whether you're aiming for maximum yield, short harvest cycles, or sustainability.
        </div>
      </div>
    </div>

    <!-- Box 5 -->
    <div class="content-box rounded-xl p-4 relative h-65">
      <div class="text-container">
        <div class="text-title">
          <IconChart class="icon" />
          <ButtonModal :modalId="4" @open="openModal" />
        </div>

        <div class="text-subtitle">Seamless IoT Dashboard</div>

        <div class="text-content">
          Monitor everything — from soil conditions to planting advice — in one simple,
          mobile-friendly dashboard. No tech background required.
        </div>
      </div>
    </div>
  </div>

  <Modal
    :isOpen="modalOpen"
    :title="modalContent.title"
    :image="modalContent.image"
    :content="modalContent.content"
    @close="modalOpen = false"
  />
</template>

<style scoped>
.circle {
  width: 15px;
  height: 15px;
  margin: 18px 10px;
}

.title {
  margin: 30px 0;
}

.title-sub {
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--font-black);
}

.content-box {
  background-color: var(--background-light);
  border: 1px solid #eaeaea;
  cursor: auto;
  transition: all 0.3s ease;
}

.text-container {
  padding: 10px 20px;
  width: 100%;
}

.text-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.text-subtitle {
  font-size: 22px;
  font-weight: 500;
  color: var(--text-black);
  margin: 20px 0 0 0;
}

.text-content {
  font-size: 16px;
  font-weight: 400;
  color: var(--text-black-mute);
  padding: 5px 0 10px;
}

.icon {
  align-items: center;
  width: 35px;
  height: 35px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr; /* 1 kolom di tablet */
    padding: 15px 20px;
  }

  .text-subtitle {
    font-size: 20px;
  }

  .text-content {
    font-size: 15px;
  }

  .title-sub {
    font-size: 1.6rem;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
  .circle {
    width: 15px;
    height: 15px;
    margin: 15px 10px;
  }
  .title {
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .text-subtitle {
    font-size: 18px;
  }

  .text-content {
    font-size: 14px;
  }

  .title-sub {
    font-size: 1.4rem;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .circle {
    width: 12px;
    height: 12px;
    margin: 13px 8px;
  }
  .grid {
    padding: 10px 15px;
  }
}

@media (max-width: 640px) {
  .text-subtitle {
    font-size: 16px;
  }

  .text-content {
    font-size: 13px;
  }

  .title-sub {
    font-size: 1.2rem;
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .circle {
    width: 12px;
    height: 12px;
    margin: 10px 8px;
  }
  .text-container {
    padding: 10px 15px;
  }

  .content-box {
    padding: 10px;
  }
  .grid {
    padding: 8px 10px;
  }
}
</style>
