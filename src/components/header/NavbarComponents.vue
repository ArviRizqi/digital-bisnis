<script setup lang="ts">
import IconBars from '../icons/IconBars.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const isOpen = ref(false)
const dropdownOpen = ref(false)

const handleScroll = (): void => {
  scrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) dropdownOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out',
      scrolled
        ? 'sticky bg-white/90 backdrop-blur-sm shadow-md navbar-scroll'
        : 'absolute bg-transparent navbar',
    ]"
  >
    <div class="">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center brand-link">
          <i class="fas fa-rocket text-blue-500 text-2xl mr-2"></i>
          <span :class="['brand-name font-bold', scrolled ? 'brand-name-scroll' : 'text-white']"
            >BrandName</span
          >
        </a>

        <!-- Desktop Menu -->
        <div class="desktop-menu">
          <a
            v-for="item in ['Home', 'Products', 'Services', 'About', 'Contact']"
            :key="item"
            href="#"
            :class="['nav-link px-5 py-5', scrolled ? 'nav-link-scroll' : 'text-slate-50']"
            >{{ item }}</a
          >
        </div>

        <!-- Mobile Menu Button -->
        <div class="menu-toggle">
          <button @click="toggleMenu" class="menu-button">
            <span class="sr-only">Open main menu</span>
            <IconBars :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl bar-icon" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { open: isOpen }]">
      <div class="mobile-menu-links">
        <a
          v-for="item in ['Home', 'Products', 'Services', 'About', 'Contact']"
          :key="item"
          href="#"
          class="mobile-link"
          >{{ item }}</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Struktur */
.container {
  margin: 0 auto;
}

/* Branding */
.brand-link {
  background-color: transparent;
}

.brand-name {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.brand-name-scroll {
  color: oklch(27.8% 0.033 256.848);
}

/* Navbar Layout */
.navbar {
  padding: 10px 200px;
  transition: all 0.3s ease;
}

.navbar-scroll {
  padding: 10px 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Desktop Menu */
.desktop-menu {
  display: none;
}

.nav-link {
  position: relative;
  margin: 0 30px;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link-scroll {
  color: oklch(27.8% 0.033 256.848);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: oklch(51.1% 0.096 186.391);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  background-color: transparent;
}

/* Mobile Menu */
.menu-toggle {
  display: none;
}

.menu-button {
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  background-color: #fff;
}

.mobile-menu.open {
  max-height: 500px;
}

.mobile-menu-links {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-link {
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
}

.mobile-link:hover {
  background-color: #f9fafb;
  color: #3b82f6;
}

/* Responsive */
@media (min-width: 1025px) {
  .desktop-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    margin-right: -0.5rem;
  }

  .bar-icon {
    width: 22px;
    height: 22px;
    color: #fff;
  }

  .brand-name {
    font-size: 1.2rem;
  }

  .navbar,
  .navbar-scroll {
    padding: 10px 50px;
  }

  .nav-link {
    margin: 0 10px;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .brand-name {
    font-size: 1rem;
  }

  .nav-link {
    font-size: 14px;
  }
}
</style>
