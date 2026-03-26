<template>
  <div>
    <div class="sticky top-0 bg-[#f0ead6] z-50">
      <nav
        class="top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 transition-all duration-500 border-b border-[#d4c0a0]"
      >
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3">
            <div>
              <span
                class="font-sans font-black text-cream text-xl leading-none block"
                >Mckarekins</span
              >
            </div>
          </NuxtLink>

          <!-- Desktop Links -->
          <div
            class="hidden md:flex items-center gap-8 text-cream/80 text-sm font-medium"
          >
            <NuxtLink to="/" class="text-base">Home</NuxtLink>
            <NuxtLink to="/about" class="text-base">About</NuxtLink>
            <NuxtLink to="" class="text-base">Products</NuxtLink>
            <NuxtLink to="/contact" class="text-base">Contact</NuxtLink>
          </div>

          <!-- CTA -->
          <a
            href="https://api.whatsapp.com/send?phone=+2349136230385&text=Hello,%20I%20need%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex items-center gap-2 bg-gradient-to-br from-[#1c3d27] via-[#234d32] to-[#2a4a35] text-white font-bold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>

          <!-- Hamburger -->
          <button
            @click="menuOpen = !menuOpen"
            class="md:hidden text-cream text-2xl p-2"
          >
            <span v-if="!menuOpen">
              <Icon name="ion:menu" class="" />
            </span>
            <span v-else>
              <Icon name="eva:close-fill" />
            </span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="mobile-menu">
          <div
            v-if="menuOpen"
            class="md:hidden fixed inset-x-0 top-[72px] z-50 bg-[#f0ead6] border-t border-[#d4c0a0]/40 shadow-lg rounded-b-2xl"
          >
            <ul class="flex flex-col px-6 py-4 gap-1">
              <li v-for="link in navLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  @click="menuOpen = false"
                  class="block px-4 py-3 rounded-xl text-[#1c3d27] font-medium text-base hover:bg-[#1c3d27]/06 transition-colors duration-200"
                  active-class="bg-[#1c3d27] !text-[#e8cfa0]"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </div>

    <slot />

    <footer class="bg-[#201509] text-white pt-12 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center">
              <h2>Mckarekins</h2>
            </div>
            <p class="text-white">
              Our aim is to produce high-quality food sustainably, using
              responsible farming practices that respect both animals and crops.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Services</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Cassava</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Catfish</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Chicken</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Cow</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Cattle</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-white hover:text-accent transition"
                  >Goat</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Contact Us</h3>
            <address class="not-italic text-white">
              <p>Plot 5 - 15 Old Lagos Road,</p>
              <p>Iganke Junction,</p>
              <p>Irabu, Owu-Ikosi,</p>
              <p>Lagos State.</p>
              <p class="mt-2">
                Email:
                <a
                  href="mailto:info@company.com"
                  class="hover:text-accent transition"
                  >karekins2010@hotmail.co.uk</a
                >
              </p>
              <p class="mt-2">
                Phone:
                <a
                  href="tel:+2347077653223"
                  class="hover:text-accent transition"
                  >+234 707-7653-223</a
                >
              </p>
            </address>
          </div>
        </div>

        <div
          class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-white text-sm mb-4 md:mb-0">
            © 2026 Mckarekins. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-white hover:text-accent text-sm transition"
              >Privacy Policy</a
            >
            <a href="#" class="text-white hover:text-accent text-sm transition"
              >Terms of Service</a
            >
            <a href="#" class="text-white hover:text-accent text-sm transition"
              >Cookies</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const scrolled = ref(false);
const menuOpen = ref(false);
const navLinks = [
  { label: "Home", to: "/", icon: "🏡" },
  { label: "About", to: "/about", icon: "🌿" },
  { label: "Products", to: "/products", icon: "🌾" },
  { label: "Contact", to: "/contact", icon: "📞" },
];
</script>

<style>
/* Slide sheet */
.sheet-enter-active,
.sheet-leave-active {
  transition: all 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Backdrop fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
