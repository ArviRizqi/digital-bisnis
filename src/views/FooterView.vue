<script setup lang="ts">
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconInstagram from '../components/icons/IconInstagram.vue'
import IconTwitter from '../components/icons/IconTwitter.vue'
import IconGithub from '../components/icons/IconGithub.vue'
</script>

<template>
  <footer class="footer">
    <!-- Footer Main Content -->
    <div
      class="container footer-content mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm"
    >
      <!-- Brand Info -->
      <div class="col-span-1 sm:col-span-2">
        <h2 class="brand-name text-2xl font-bold text-green-700">AgriVista.</h2>
        <p class="brand-text mt-2 text-gray-600">
          Our platform is dedicated to helping farmers and agricultural professionals thrive by
          providing access to valuable resources, expert advice, and a supportive community.
        </p>
      </div>

      <!-- Other Columns (Navigate, Support Us, Partners, Contact) -->
      <div>
        <h3 class="col-name mb-2">Navigate</h3>
        <ul class="space-y-1">
          <li><a href="#" class="col-text">Home</a></li>
          <li><a href="#" class="col-text">Pricing</a></li>
          <li><a href="#" class="col-text">Blog</a></li>
          <li><a href="#" class="col-text">About</a></li>
        </ul>
      </div>

      <div>
        <h3 class="col-name mb-2">Support Us</h3>
        <ul class="space-y-1">
          <li><a href="#" class="col-text">FAQ's</a></li>
          <li><a href="#" class="col-text">Contact Us</a></li>
          <li><a href="#" class="col-text">Support</a></li>
          <li><a href="#" class="col-text">Security</a></li>
          <li><a href="#" class="col-text">Center</a></li>
        </ul>
      </div>

      <div>
        <h3 class="col-name mb-2">Partners</h3>
        <ul class="space-y-1">
          <li><a href="#" class="col-text">Our Partners</a></li>
          <li><a href="#" class="col-text">Subscriber</a></li>
        </ul>
      </div>

      <div>
        <h3 class="col-name mb-2">Contact US</h3>
        <p class="text-gray-600 col-text">alma.lawson@example.com</p>
        <p class="text-gray-600 col-text">(207) 555-0119</p>
        <div class="flex mt-2 space-x-4">
          <IconFacebook class="icon" />
          <IconInstagram class="icon" />
          <IconTwitter class="icon" />
          <IconGithub class="icon" />
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div
      class="container copyright border-t mt-8 pt-4 text-xs text-gray-500 text-center flex flex-col md:flex-row justify-between gap-2 px-4"
    >
      <p class="copy-text">&copy; 2023 Groclone, We love our users!</p>
      <div class="terms space-x-2">
        <a href="#">Terms & Conditions</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Optional: Load FontAwesome if needed */
.footer {
  background-color: #f9f9f9;
  margin-top: 50px;
  padding: 30px 0;
}
.footer-content {
  margin: auto;
  padding-bottom: 30px;
}

.brand-name {
  color: var(--button-color-hover);
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.brand-text {
  width: 80%;
  color: var(--text-black-mute);
  font-size: 1.1rem;
}

.col-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-black-soft);
  margin-bottom: 10px;
}

.col-text {
  color: var(--text-black-mute);
  font-size: 1.2rem;
  margin: 5px 0;
}

li {
  margin: 5px 0;
}

.copyright {
  margin: auto;
  padding: 30px 0;
}

.copy-text {
  color: var(--text-black-mute);
  font-size: 1.1rem;
}

.terms {
  color: var(--text-black-mute);
  font-size: 1.1rem;
}

a:hover {
  color: var(--button-black);
  background-color: transparent;
}

.icon {
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 20px 10px;
}

.icon:first-child {
  margin-left: 0;
}
</style>
