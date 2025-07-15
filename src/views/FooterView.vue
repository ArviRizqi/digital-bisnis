<script setup lang="ts">
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconInstagram from '../components/icons/IconInstagram.vue'
import IconTwitter from '../components/icons/IconTwitter.vue'
import IconGithub from '../components/icons/IconGithub.vue'
</script>

<template id="contact">
  <footer class="footer">
    <!-- Footer Main Content -->
    <div
      class="container footer-content mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm"
    >
      <!-- Brand Info -->
      <div class="col-span-1 sm:col-span-2">
        <h2 class="brand-name text-2xl font-bold italic text-green-700">Jtech.</h2>
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
          <li><a href="#" class="col-text">About</a></li>
          <li><a href="#" class="col-text">Product</a></li>
          <li><a href="#" class="col-text">Reviews</a></li>
          <li><a href="#" class="col-text">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="col-name mb-2">Support Us</h3>
        <ul class="space-y-1">
          <li><a href="#" class="col-text">FAQ's</a></li>
          <p class="text-gray-600 col-text">jtech@gmail.com</p>
          <p class="text-gray-600 col-text">(+62) 850-000-1234</p>
        </ul>
      </div>

      <div class="col-span-1 sm:col-span-2">
        <h3 class="col-name mb-2">Subscribe to our newsletter</h3>
        <p class="text-gray-400 mb-4 text-[1.1rem]">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <form class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="input flex-1 rounded-md px-4 py-2 bg-gray-50 border border-gray-500 placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-blue-200"
          />
          <button
            type="submit"
            class="button rounded-md bg-[var(--button-color-hover)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--button-color)] focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Subscribe
          </button>
        </form>
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
  letter-spacing: -2px;
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

.copyright span {
  margin: 0 5px;
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

.input {
  height: 35px;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
}

.button {
  width: 100px;
  height: 35px;
  padding: 5px;
  color: white;
  font-weight: bold;
  margin: 10px 0;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 15px 20px 30px;
    width: 100%;
  }
}
</style>
