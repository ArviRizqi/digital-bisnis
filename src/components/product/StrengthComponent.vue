<script setup lang="ts">
import IconArrowup from '../icons/IconArrowup.vue'
import IconCircle from '../icons/IconCircle.vue'
import IconChart from '../icons/IconChart.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconRain from '../icons/IconRain.vue'
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
          <button>
            <IconArrowup />
          </button>
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
          <button>
            <IconArrowup />
          </button>
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
          <button>
            <IconArrowup />
          </button>
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
          <button>
            <IconArrowup />
          </button>
        </div>

        <div class="text-subtitle">Seamless IoT Dashboard</div>

        <div class="text-content">
          Monitor everything — from soil conditions to planting advice — in one simple,
          mobile-friendly dashboard. No tech background required.
        </div>
      </div>
    </div>
  </div>
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

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
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
