<template>
  <div>
    <div class="h-[80px]" />
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-[#f0ead6]/95 backdrop-blur-md border-b border-[#d4c0a0] px-6 md:px-16"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 flex items-center justify-between h-[80px]"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="Mckarekins logo"
            width="112"
            height="160"
          />
        </NuxtLink>

        <!-- Desktop Links -->
        <div
          class="hidden md:flex items-center gap-8 text-[#1c3d27] text-sm font-medium"
        >
          <NuxtLink
            to="/"
            class="text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1c3d27] after:transition-all after:duration-300 hover:after:w-full"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1c3d27] after:transition-all after:duration-300 hover:after:w-full"
            >About</NuxtLink
          >
          <NuxtLink
            to="/services"
            class="text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1c3d27] after:transition-all after:duration-300 hover:after:w-full"
            >Products</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1c3d27] after:transition-all after:duration-300 hover:after:w-full"
            >Contact</NuxtLink
          >
        </div>

        <!-- Hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#1c3d27] hover:bg-[#1c3d27]/10 transition-colors duration-200"
        >
          <Icon v-if="!menuOpen" name="ion:menu" class="text-2xl" />
          <Icon v-else name="eva:close-fill" class="text-2xl" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div
          v-if="menuOpen"
          class="md:hidden absolute inset-x-0 top-full bg-[#f0ead6] backdrop-blur-md border-t border-[#d4c0a0]/60 shadow-xl rounded-b-2xl overflow-hidden"
        >
          <ul class="flex flex-col px-4 py-3 gap-1">
            <li v-for="link in navLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                @click="menuOpen = false"
                class="flex items-center px-4 py-3 rounded-xl text-[#1c3d27] font-medium text-base hover:bg-[#1c3d27]/08 transition-colors duration-200"
                active-class="bg-[#1c3d27] !text-[#e8cfa0]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
            <!-- Mobile CTA -->
            <li class="pt-2 pb-1">
              <a
                href="https://api.whatsapp.com/send?phone=+2349136230385&text=Hello,%20I%20need%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 bg-gradient-to-br from-[#1c3d27] via-[#234d32] to-[#2a4a35] text-white font-bold px-6 py-3 rounded-xl text-sm"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
    <slot />

    <footer class="bg-[#1c3d27] text-clay pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center">
              <NuxtImg
                src="/images/IMG_1480.png"
                class="w-32 h-32 object-contain"
              />
            </div>
            <p class="text-clay">
              Our aim is to produce high-quality food sustainably, using
              responsible farming practices that respect both animals and crops.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-lg text-clay">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="text-clay hover:text-accent transition"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/services"
                  class="text-clay hover:text-accent transition"
                  >Products</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-clay hover:text-accent transition"
                  >Contact</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/faq"
                  class="text-clay hover:text-accent transition"
                  >Faq</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h3 class="text-lg text-clay">Products</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Cassava</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Catfish</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Chicken</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Cow</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Cattle</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="text-clay hover:text-accent transition"
                  >Goat</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h3 class="text-lg text-clay">Contact Us</h3>
            <address class="not-italic text-clay">
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
          class="border-t border-[#d4c0a0]/50 pt-6 flex justify-center items-center"
        >
          <p class="text-clay text-sm mb-4 md:mb-0">
            © 2026 Mckarekins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const scrolled = ref(false);
const menuOpen = ref(false);
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/services" },
  { label: "Contact", to: "/contact" },
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
