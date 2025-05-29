<script setup lang="ts">
import Product from '@/components/product/ProductComponent.vue'
import Strength from '@/components/product/StrengthComponent.vue'
</script>

<template>
  <div class="container">
    <Product />
    <Strength />
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  margin-bottom: 50px;
}
</style>
