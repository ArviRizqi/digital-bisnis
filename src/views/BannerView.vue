<template>
  <section class="banner">
    <div class="banner__bg" aria-hidden="true">
      <div class="blob blob--1"></div>
      <div class="blob blob--2"></div>
    </div>

    <div class="banner__container">
      <div class="banner__grid">
        <!-- ════ LEFT — Interactive Form ════ -->
        <div class="form-side" data-aos="fade-right" data-aos-duration="700">
          <div class="form-card">
            <div class="form-card__shine" aria-hidden="true"></div>

            <!-- Header -->
            <div class="form-card__header">
              <div class="header-left">
                <div class="header-icon">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="white"
                    stroke-width="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="header-title">Soil Intelligence</p>
                  <p class="header-sub">Diagnostic Model v2.4</p>
                </div>
              </div>
              <div class="header-badge"><span class="badge-dot"></span>LIVE</div>
            </div>

            <!-- Sliders -->
            <div class="sliders">
              <div v-for="feat in features" :key="feat.key" class="slider-item">
                <div class="slider-meta">
                  <label :for="`s-${feat.key}`" class="slider-name">{{ feat.label }}</label>
                  <span class="slider-val"
                    >{{ fmt(feat.key)
                    }}<span v-if="feat.unit" class="slider-unit">&nbsp;{{ feat.unit }}</span></span
                  >
                </div>
                <div class="slider-wrap">
                  <input
                    :id="`s-${feat.key}`"
                    type="range"
                    :min="feat.min"
                    :max="feat.max"
                    :step="feat.step"
                    v-model.number="vals[feat.key]"
                    class="slider"
                    :style="trackStyle(feat.key)"
                  />
                  <div class="slider-range">
                    <span>{{ feat.min }}</span
                    ><span>{{ feat.max }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <button class="form-btn" @click="analyze" :disabled="busy">
              <template v-if="!busy">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path stroke-linecap="round" d="m21 21-4.35-4.35" />
                </svg>
                Analyze Soil Conditions
              </template>
              <template v-else>
                <svg class="spin-icon" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    style="opacity: 0.25"
                  />
                  <path
                    fill="currentColor"
                    style="opacity: 0.75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Analyzing…
              </template>
            </button>

            <!-- Result panel -->
            <Transition name="pop">
              <div v-if="result" class="result">
                <div class="result__top">
                  <span class="result__emoji">{{ result.emoji }}</span>
                  <div class="result__info">
                    <p class="result__tag">Recommended Crop</p>
                    <p class="result__name">{{ result.name }}</p>
                  </div>
                  <div class="result__conf">
                    <p class="result__conf-num">{{ result.conf }}%</p>
                    <p class="result__conf-lbl">confidence</p>
                  </div>
                </div>
                <div class="result__bars">
                  <div v-for="(r, i) in result.top5" :key="r.name" class="rbar">
                    <span class="rbar__em">{{ r.emoji }}</span>
                    <span class="rbar__name" :class="{ 'rbar__name--first': i === 0 }">{{
                      r.name
                    }}</span>
                    <div class="rbar__track">
                      <div
                        class="rbar__fill"
                        :style="{
                          width: r.pct + '%',
                          background:
                            i === 0
                              ? 'linear-gradient(90deg,#60a5fa,#22d3ee)'
                              : 'rgba(255,255,255,0.22)',
                        }"
                      ></div>
                    </div>
                    <span class="rbar__pct">{{ r.pct }}%</span>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Error -->
            <Transition name="pop">
              <div v-if="error" class="form-error">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path stroke-linecap="round" d="M12 8v4m0 4h.01" />
                </svg>
                {{ error }}
              </div>
            </Transition>

            <!-- Ready bar -->
            <div v-if="!result && !error" class="ready-bar">
              <div class="ready-bar__row">
                <span class="ready-bar__lbl">Model Ready</span>
                <span class="ready-bar__pct">84%</span>
              </div>
              <div class="ready-bar__track">
                <div class="ready-bar__fill"><div class="ready-bar__stripe"></div></div>
              </div>
            </div>
          </div>

          <!-- Float chip -->
          <div class="chip" aria-hidden="true">
            <span class="chip__dot"></span>
            <span class="chip__text">99.9% Accuracy</span>
          </div>
        </div>

        <!-- ════ RIGHT — Hero Copy ════ -->
        <div class="hero-side" data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
          <div class="hero-badge">
            <span class="hero-badge__ping"></span>
            <span>AI Analysis Engine</span>
          </div>

          <h1 class="hero-title">
            We're here to<br />
            <span class="hero-title__em">help your farm</span>
          </h1>

          <p class="hero-desc">
            Let our AI analyze your soil's condition and recommend the best crops for your land
            based on accurate scientific data. Optimize your yield with precision agriculture.
          </p>

          <ButtonCTA class="btn-primary-gradient" />

          <div class="hero-stats">
            <div class="stat">
              <span class="stat__num">99.9%</span>
              <span class="stat__lbl">Data Accuracy</span>
            </div>
            <div class="stat__sep"></div>
            <div class="stat">
              <span class="stat__num">22+</span>
              <span class="stat__lbl">Crop Types</span>
            </div>
            <div class="stat__sep"></div>
            <div class="stat">
              <span class="stat__num">24/7</span>
              <span class="stat__lbl">AI Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ButtonCTA from '@/components/button/ButtonCTA.vue'

// ── Config ─────────────────────────────────────────────────────────────────
const API_BASE = 'https://artz-03-crop-service.hf.space'

// Nama key harus PERSIS sama dengan yang diterima API
const features = [
  { key: 'N', label: 'Nitrogen (N)', min: 0, max: 140, step: 1, default: 50, unit: 'kg/ha' },
  { key: 'P', label: 'Phosphorus (P)', min: 5, max: 145, step: 1, default: 53, unit: 'kg/ha' },
  { key: 'K', label: 'Potassium (K)', min: 5, max: 205, step: 1, default: 48, unit: 'kg/ha' },
  { key: 'temperature', label: 'Temperature', min: 8, max: 43, step: 0.1, default: 25, unit: '°C' },
  { key: 'humidity', label: 'Humidity', min: 14, max: 100, step: 0.1, default: 71, unit: '%' },
  { key: 'ph', label: 'Soil pH', min: 3.5, max: 9.9, step: 0.01, default: 6.5, unit: '' },
  { key: 'rainfall', label: 'Rainfall', min: 20, max: 300, step: 0.1, default: 103, unit: 'mm' },
]

const EMOJI: Record<string, string> = {
  rice: '🍚',
  maize: '🌽',
  lentil: '🫘',
  jute: '🌾',
  banana: '🍌',
  apple: '🍎',
  coconut: '🥥',
  coffee: '☕',
  grapes: '🍇',
  mango: '🥭',
  orange: '🍊',
  watermelon: '🍉',
  cotton: '🌿',
  papaya: '🍈',
  mungbean: '🫘',
  blackgram: '🫘',
  chickpea: '🫘',
  kidneybeans: '🫘',
  mothbeans: '🫘',
  muskmelon: '🍈',
  pigeonpeas: '🫘',
  pomegranate: '🍎',
}

// ── State ──────────────────────────────────────────────────────────────────
const vals = reactive<Record<string, number>>(
  Object.fromEntries(features.map((f) => [f.key, f.default])),
)
const busy = ref(false)
const error = ref<string | null>(null)

interface CropResult {
  emoji: string
  name: string
  pct: number
}
interface Result {
  emoji: string
  name: string
  conf: number
  top5: CropResult[]
}
const result = ref<Result | null>(null)

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(key: string) {
  const f = features.find((f) => f.key === key)!
  return key === 'ph' ? vals[key].toFixed(2) : f.step < 1 ? vals[key].toFixed(1) : vals[key]
}

function trackStyle(key: string) {
  const f = features.find((f) => f.key === key)!
  const pct = ((vals[key] - f.min) / (f.max - f.min)) * 100
  return { background: `linear-gradient(to right,#3b82f6 0%,#06b6d4 ${pct}%,#e2e8f0 ${pct}%)` }
}

// ── API Call ───────────────────────────────────────────────────────────────
async function analyze() {
  if (busy.value) return
  busy.value = true
  error.value = null
  result.value = null

  try {
    // Kirim semua nilai slider sebagai satu objek ke POST /predict/top5
    const payload = Object.fromEntries(features.map((f) => [f.key, vals[f.key]]))

    const res = await fetch(`${API_BASE}/predict/top5`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}))
      throw new Error(errBody?.detail ?? `HTTP ${res.status}`)
    }

    // Ekspektasi response: { predictions: [{ crop, probability }] }
    // atau { crop, probability, top5: [...] } — handle keduanya
    const data = await res.json()

    // Normalise: cari array top-5
    let top5Raw: Array<{ crop: string; probability: number }> = []

    if (Array.isArray(data.predictions)) {
      top5Raw = data.predictions // [{ crop, probability }]
    } else if (Array.isArray(data.top5)) {
      top5Raw = data.top5
    } else if (data.crop) {
      // Kalau API hanya return top-1, bungkus jadi array
      top5Raw = [{ crop: data.crop, probability: data.probability ?? 1 }]
    }

    if (!top5Raw.length) throw new Error('Response tidak dikenali')

    const top = top5Raw[0]
    result.value = {
      name: top.crop,
      emoji: EMOJI[top.crop] ?? '🌱',
      conf: +(top.probability * 100).toFixed(1),
      top5: top5Raw.map((c) => ({
        name: c.crop,
        emoji: EMOJI[c.crop] ?? '🌱',
        pct: +(c.probability * 100).toFixed(1),
      })),
    }
  } catch (e: any) {
    error.value = e?.message ?? 'Terjadi kesalahan. Coba lagi.'
  } finally {
    busy.value = false
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #eef5ff;
  padding: 5rem 0;
  display: flex;
  align-items: center;
}
@media (min-width: 1024px) {
  .banner {
    min-height: 100vh;
    padding: 0;
  }
}

/* blobs */
.banner__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}
.blob--1 {
  width: 60vw;
  height: 60vw;
  max-width: 750px;
  max-height: 750px;
  background: radial-gradient(circle, #bfdbfe 0%, #e0f2fe 50%, transparent 80%);
  top: -25%;
  left: -20%;
  opacity: 0.55;
}
.blob--2 {
  width: 45vw;
  height: 45vw;
  max-width: 560px;
  max-height: 560px;
  background: radial-gradient(circle, #cffafe 0%, transparent 70%);
  bottom: -20%;
  right: -15%;
  opacity: 0.4;
}

.banner__container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.banner__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .banner__grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
}

/* ── Form Card ── */
.form-side {
  position: relative;
}

.form-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 1.75rem;
  padding: 1.875rem;
  box-shadow:
    0 0 0 1px rgba(59, 130, 246, 0.1),
    0 32px 72px -20px rgba(37, 99, 235, 0.18),
    0 8px 24px rgba(0, 0, 0, 0.04);
}
@media (min-width: 480px) {
  .form-card {
    padding: 2.25rem;
  }
}

.form-card__shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6 35%, #06b6d4 65%, transparent);
}

/* header */
.form-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(226, 232, 240, 0.9);
}
.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.header-icon {
  width: 2.625rem;
  height: 2.625rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}
.header-title {
  font-weight: 700;
  font-size: 1rem;
  color: #0f172a;
}
.header-sub {
  font-size: 0.595rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.13em;
}
.header-badge {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
  font-size: 0.595rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: blink 1.4s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

/* sliders */
.sliders {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.375rem;
  margin-bottom: 1.5rem;
}
@media (max-width: 440px) {
  .sliders {
    grid-template-columns: 1fr;
  }
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.slider-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.slider-name {
  font-size: 0.66rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 64%;
}
.slider-val {
  font-size: 0.82rem;
  font-weight: 800;
  color: #2563eb;
  white-space: nowrap;
}
.slider-unit {
  font-size: 0.62rem;
  font-weight: 500;
  color: #94a3b8;
}

.slider-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 2.5px solid #3b82f6;
  box-shadow: 0 1px 8px rgba(59, 130, 246, 0.45);
  cursor: pointer;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.slider::-webkit-slider-thumb:hover {
  transform: scale(1.3);
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.6);
}
.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 2.5px solid #3b82f6;
  box-shadow: 0 1px 8px rgba(59, 130, 246, 0.45);
  cursor: pointer;
}

.slider-range {
  display: flex;
  justify-content: space-between;
  font-size: 0.57rem;
  color: #cbd5e1;
}

/* button */
.form-btn {
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.875rem;
  background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}
.form-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.09), transparent);
  pointer-events: none;
}
.form-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.45);
}
.form-btn:active:not(:disabled) {
  transform: scale(0.98);
}
.form-btn:disabled {
  opacity: 0.75;
  cursor: wait;
}
.spin-icon {
  animation: spin 0.9s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* result */
.pop-enter-active {
  transition: all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-leave-active {
  transition: all 0.2s ease;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.pop-leave-to {
  opacity: 0;
}

.result {
  margin-top: 1.25rem;
  background: linear-gradient(135deg, #0c1a35 0%, #0f2d50 55%, #0b3844 100%);
  border-radius: 1.125rem;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.result__top {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-bottom: 0.875rem;
  margin-bottom: 0.875rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.result__emoji {
  font-size: 2.5rem;
  line-height: 1;
}
.result__tag {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.result__name {
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  text-transform: capitalize;
  margin-top: 0.1rem;
}
.result__conf {
  margin-left: auto;
  text-align: right;
}
.result__conf-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: #38bdf8;
  line-height: 1;
}
.result__conf-lbl {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.15rem;
}

.result__bars {
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
}
.rbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.rbar__em {
  font-size: 0.85rem;
  width: 1.25rem;
  text-align: center;
}
.rbar__name {
  width: 70px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.55);
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rbar__name--first {
  font-weight: 700;
  color: #fff;
}
.rbar__track {
  flex: 1;
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  overflow: hidden;
}
.rbar__fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.rbar__pct {
  width: 34px;
  text-align: right;
  font-size: 0.66rem;
  color: rgba(255, 255, 255, 0.45);
}

/* ready bar */
/* error */
.form-error {
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  font-size: 0.8rem;
  font-weight: 600;
}

.ready-bar {
  margin-top: 1.25rem;
  background: rgba(241, 245, 249, 0.65);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(226, 232, 240, 0.6);
}
.ready-bar__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.45rem;
}
.ready-bar__lbl {
  font-size: 0.6rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.ready-bar__pct {
  font-size: 0.6rem;
  font-weight: 700;
  color: #3b82f6;
}
.ready-bar__track {
  height: 7px;
  background: rgba(203, 213, 225, 0.5);
  border-radius: 999px;
  overflow: hidden;
}
.ready-bar__fill {
  width: 84%;
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  border-radius: 999px;
  position: relative;
}
.ready-bar__stripe {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.18) 0,
    rgba(255, 255, 255, 0.18) 6px,
    transparent 6px,
    transparent 14px
  );
  background-size: 20px 20px;
  animation: stripe 0.9s linear infinite;
}
@keyframes stripe {
  from {
    background-position: 20px 0;
  }
  to {
    background-position: 0 0;
  }
}

/* chip */
.chip {
  position: absolute;
  top: -0.875rem;
  right: 1rem;
  background: #fff;
  border-radius: 0.625rem;
  padding: 0.45rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  animation: float 3s ease-in-out infinite;
}
.chip__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
}
.chip__text {
  font-size: 0.62rem;
  font-weight: 700;
  color: #334155;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}
@media (max-width: 520px) {
  .chip {
    display: none;
  }
}

/* ── Hero ── */
.hero-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
}
@media (max-width: 1023px) {
  .hero-side {
    align-items: center;
    text-align: center;
    order: -1;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 999px;
  background: rgba(239, 246, 255, 0.95);
  border: 1px solid #bfdbfe;
  font-size: 0.82rem;
  font-weight: 600;
  color: #2563eb;
}
.hero-badge__ping {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
  animation: ripple 1.5s ease-out infinite;
}
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
  }
  100% {
    box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #0f172a;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.hero-title__em {
  background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.8;
  max-width: 32rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
}
@media (max-width: 1023px) {
  .hero-stats {
    justify-content: center;
  }
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.stat__num {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
}
.stat__lbl {
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 500;
}
.stat__sep {
  width: 1px;
  height: 2.25rem;
  background: #e2e8f0;
}

:deep(.btn-primary-gradient) {
  min-width: 180px;
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-weight: 600;
}
</style>
