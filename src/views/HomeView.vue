<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Navbar from '../components/header/NavbarComponents.vue'
import FooterView from './FooterView.vue'

// Lazy load komponen bagian halaman
const HeaderView = defineAsyncComponent(() => import('./HeaderView.vue'))
const AboutView = defineAsyncComponent(() => import('./AboutView.vue'))
const ProductView = defineAsyncComponent(() => import('./ProductView.vue'))
const ReviewView = defineAsyncComponent(() => import('./ReviewView.vue'))
// const BannerView = defineAsyncComponent(() => import('./BannerView.vue'))
</script>

<template>
  <div>
    <Navbar />

    <main>
      <section id="home">
        <Suspense>
          <template #default><HeaderView /></template>
          <template #fallback><div>Memuat Header...</div></template>
        </Suspense>
      </section>

      <section id="about">
        <Suspense>
          <template #default><AboutView /></template>
          <template #fallback><div>Memuat Tentang Kami...</div></template>
        </Suspense>
      </section>

      <section id="products">
        <Suspense>
          <template #default><ProductView /></template>
          <template #fallback><div>Memuat Produk...</div></template>
        </Suspense>
      </section>

      <section id="reviews">
        <Suspense>
          <template #default><ReviewView /></template>
          <template #fallback><div>Memuat Ulasan...</div></template>
        </Suspense>
      </section>

      <!-- <Suspense>
        <template #default><BannerView /></template>
        <template #fallback><div>Memuat AI Section...</div></template>
      </Suspense> -->
    </main>
    <section id="contact">
      <FooterView />
    </section>
  </div>
</template>

<style scoped></style>
