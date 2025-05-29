<script setup lang="ts">
import Navbar from '../components/header/NavbarComponents.vue'
import HeaderView from './HeaderView.vue'
import AboutView from './AboutView.vue'
import ProductView from './ProductView.vue'
import ReviewView from './ReviewView.vue'
import BannerView from './BannerView.vue'
import FooterView from './FooterView.vue'
</script>

<template>
  <main>
    <Navbar />
    <HeaderView />
    <AboutView />
    <ProductView />
    <ReviewView />
    <BannerView />
    <FooterView />
  </main>
</template>

<style scoped></style>
