<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background texture -->
    <!-- <div
      class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"
    ></div> -->

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary via-[#234d32] to-secondary">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10"
      >
        <div
          class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full py-12"
        >
          <!-- Left Content -->
          <div class="space-y-6 lg:w-1/2 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-[#d4c0a0]/20 text-[#e8cfa0] text-sm font-medium"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"
              ></span>
              Sustainable Agriculture Since 2019
            </div>

            <h1
              class="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white text-balance"
            >
              Farming for a Better
              <span class="text-[#e8cfa0] block mt-2">Tomorrow</span>
            </h1>

            <p
              class="text-lg text-[#ede3ce]/90 leading-relaxed max-w-lg mx-auto lg:mx-0 text-balance"
            >
              Premium catfish, tilapia, poultry, and cassava — cultivated with
              traditional wisdom and modern innovation across 50+ acres of
              Nigerian farmland.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                class="group relative px-8 py-4 bg-[#e8cfa0] text-[#1c3d27] rounded-full font-semibold hover:bg-[#d4b88a] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Explore Our Farm
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                class="px-8 py-4 text-white rounded-full font-medium border-2 border-[#d4c0a0]/50 hover:border-[#e8cfa0] hover:bg-white/5 transition-all duration-300"
              >
                Watch Our Story
              </button>
            </div>

            <!-- Stats -->
            <div
              class="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-[#d4c0a0]/30"
            >
              <div class="text-center lg:text-left">
                <div class="text-3xl font-serif font-bold text-[#e8cfa0]">
                  50+
                </div>
                <div class="text-sm text-[#ede3ce]/70">Acres Cultivated</div>
              </div>
              <div class="w-px h-12 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-serif font-bold text-[#e8cfa0]">
                  3
                </div>
                <div class="text-sm text-[#ede3ce]/70">Core Sectors</div>
              </div>
              <div class="w-px h-12 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-serif font-bold text-[#e8cfa0]">
                  6
                </div>
                <div class="text-sm text-[#ede3ce]/70">Years Experience</div>
              </div>
            </div>
          </div>

          <!-- Right Side: Carousel -->
          <div class="lg:w-1/2 w-full relative flex justify-center">
            <!-- Swiper -->
            <swiper
              :modules="modules"
              :effect="'fade'"
              :fadeEffect="{ crossFade: true }"
              :loop="true"
              :speed="800"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
              class="w-full max-w-[500px] relative"
              @slideChange="onSlideChange"
              @swiper="onSwiper"
            >
              <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div
                  class="relative aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group"
                >
                  <img
                    :src="slide.image"
                    :alt="slide.alt"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <!-- Gradient overlay -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  ></div>

                  <!-- Content -->
                  <div
                    class="absolute bottom-12 left-0 right-0 text-center px-8"
                  >
                    <p
                      class="text-[#e8cfa0] text-sm font-medium tracking-widest uppercase mb-2"
                    >
                      {{ slide.sector }}
                    </p>
                    <h3
                      class="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-3 px-4"
                    >
                      {{ slide.title }}
                    </h3>
                    <!-- <p class="text-white/90 text-sm font-medium">
                      {{ slide.subtitle }}
                    </p> -->
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <!-- Dynamic Floating Badges -->
            <div
              class="absolute inset-0 pointer-events-none z-20 max-w-[500px] mx-auto"
            >
              <transition-group name="badge">
                <div
                  v-for="(badge, idx) in currentBadges"
                  :key="badge.text"
                  class="absolute pointer-events-auto"
                  :class="[badge.position, badge.animation]"
                >
                  <div
                    :class="[
                      'px-4 py-2 rounded-full shadow-lg backdrop-blur-sm text-sm font-bold border border-white/20',
                      badge.style,
                    ]"
                  >
                    {{ badge.text }}
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div
        class="border-t border-b border-[#e8cfa0]/20 bg-[#1c3d27]/80 backdrop-blur-sm py-3 overflow-hidden bottom-0 w-full"
      >
        <div class="flex whitespace-nowrap animate-marquee">
          <div
            v-for="(item, i) in [...marqueeItems, ...marqueeItems]"
            :key="i"
            class="flex items-center gap-8 flex-shrink-0 pr-8"
          >
            <span
              class="text-lg text-[#e8cfa0] tracking-widest uppercase font-medium"
              >{{ item }}</span
            >
            <span
              class="flex-shrink-0 rounded-full bg-[#e8cfa0] w-2 h-2"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Organic Farming -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-8">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <NuxtImg
          src="/images/cassava.jpg"
          alt="Organic farming leaf"
          class="w-full object-cover rounded-2xl shadow-lg"
        />

        <div>
          <h2 class="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Organic Farming
          </h2>

          <p class="text-lg text-black leading-relaxed mb-2">
            GreenRoot Farms was founded with a single mission: to produce
            high-quality food sustainably, using responsible farming practices
            that respect both animals and the land.
          </p>

          <p class="text-lg text-black leading-relaxed mb-6">
            From cattle and goats to poultry, catfish ponds, and extensive
            cassava and maize fields, every corner of our farm is carefully
            managed.
          </p>

          <NuxtLink
            to="/about"
            class="bg-primary hover:bg-secondary text-white py-2.5 px-6 rounded-full mt-12"
          >
            Learn More →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="bg-[#ede3ce] py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        <h2 class="text-4xl md:text-5xl mb-8 font-semibold text-center">
          Our Services
        </h2>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="bg-[#f6efdf] shadow-xl border border-border-amber-600 rounded-2xl"
          >
            <div class="p-6">
              <div
                class="bg-[#f2e2cd] w-14 h-14 p-2.5 rounded-lg shadow-inner mb-2"
              >
                <Icon
                  name="healthicons:animal-chicken-outline"
                  class="w-10 h-10 text-secondary"
                />
              </div>
              <h3 class="text-xl font-semibold mb-2">Poultry Farming</h3>
              <p class="text-gray-600">
                Free-range chickens raised on natural feed. We supply live
                birds, dressed chicken, and fresh eggs to households and markets
                daily.
              </p>
            </div>
          </div>

          <div
            class="bg-[#f6efdf] shadow-xl border border-gray-200 rounded-2xl border-t-2 border-transparent service-card"
          >
            <div class="p-6">
              <div
                class="bg-[#f2e2cd] w-14 h-14 p-2.5 rounded-lg shadow-inner mb-2"
              >
                <Icon
                  name="famicons:fish-outline"
                  class="w-10 h-10 text-secondary"
                />
              </div>
              <h3 class="text-xl font-semibold mb-2">Sustainable Farming</h3>
              <p class="text-gray-600">
                We prioritize eco-friendly practices to ensure a healthier
                planet for future generations.
              </p>
            </div>
          </div>

          <div
            class="bg-[#f6efdf] shadow-xl border border-border-amber-600 rounded-2xl"
          >
            <div class="p-6">
              <div
                class="bg-[#f2e2cd] w-14 h-14 p-2.5 rounded-lg shadow-inner mb-2"
              >
                <Icon name="ph:plant" class="w-10 h-10 text-secondary" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Sustainable Farming</h3>
              <p class="text-gray-600">
                Cassava, maize, plantain, and vegetables grown with organic
                fertilizers. From planting to harvest, done right every season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 px-6 md:px-16 relative overflow-hidden">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none"
      ></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <!-- <div class="flex items-center space-x-2 mb-2">
            <div class="border border-amber-700 w-12" />
            <h2 class="uppercase text-secondary">What We Offer</h2>
          </div> -->
          <h2 class="text-4xl md:text-5xl font-bold mt-3">
            What Our <em class="text-sun not-italic">Clients</em> Say
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl shadow-lg p-6"
          >
            <p class="leading-relaxed">
              GreenRoot supplied our restaurant with fresh catfish every week
              for two years. The quality is unmatched and delivery is always on
              time. Highly recommend!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg"
              ></div>
              <div>
                <div class="font-bold">Chukwuemeka O.</div>
                <div class="text-sm">Restaurant Owner, Lagos</div>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl shadow-lg p-6"
          >
            <p class="leading-relaxed">
              I started my own poultry farm after their advisory workshop. The
              support and training I received was practical and life-changing.
              My farm is thriving!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg"
              ></div>
              <div>
                <div class="font-bold">Aisha M.</div>
                <div class="text-sm">New Farmer, Kaduna</div>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl shadow-lg p-6"
          >
            <p class="leading-relaxed">
              We source all our cassava tubers and garri from GreenRoot. Their
              bulk pricing is fair and the produce is always clean and fresh.
              Great partnership!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg"
              ></div>
              <div>
                <div class="font-bold">Babatunde A.</div>
                <div class="text-sm">Food Distributor, Ibadan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-8">
      <banner />
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [EffectFade, Navigation, Pagination, Autoplay];

// Slides data
const slides = [
  {
    image: "/images/chicken.jpg",
    alt: "Free-range chickens grazing on lush green pasture",
    sector: "Poultry",
    title: "Free-Range Chicken",
    subtitle: "Ethically raised • No antibiotics • Pasture-fed",
  },
  {
    image: "/images/cassava.jpg",
    alt: "Fresh catfish and tilapia in sustainable aquaculture ponds",
    sector: "Aquaculture",
    title: "Catfish & Tilapia",
    subtitle: "Freshwater farmed • Organic feed • Premium quality",
  },
  {
    image: "/images/f.jpg",
    alt: "High-yield cassava roots harvested from fertile farmland",
    sector: "Crops",
    title: "Premium Cassava",
    subtitle: "High-yield varieties • Organic farming • Food security",
  },
];

// Badge configurations for each slide
const badgeConfigs = {
  0: [
    // Poultry
    {
      text: "🌱 100% Organic",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Free-Range",
      position: "top-[20%] left-[-5%]",
      style: "bg-[#e8cfa0] text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "No Antibiotics",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Pasture Raised",
      position: "bottom-[5%] left-[0%]",
      style: "bg-[#2a4a35] text-white border-[#e8cfa0]/30",
      animation: "animate-float-delayed",
    },
  ],
  1: [
    // Aquaculture
    {
      text: "🐟 Fresh Daily",
      position: "top-[8%] right-[0%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Sustainable",
      position: "top-[15%] left-[-5%]",
      style: "bg-[#e8cfa0] text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Organic Feed",
      position: "bottom-[20%] right-[-5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Freshwater",
      position: "bottom-[5%] left-[5%]",
      style: "bg-[#2a4a35] text-white border-[#e8cfa0]/30",
      animation: "animate-float-delayed",
    },
  ],
  2: [
    // Cassava
    {
      text: "🌾 High Yield",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Non-GMO",
      position: "top-[25%] left-[-5%]",
      style: "bg-[#e8cfa0] text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Food Security",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Organic",
      position: "bottom-[10%] left-[0%]",
      style: "bg-[#2a4a35] text-white border-[#e8cfa0]/30",
      animation: "animate-float-delayed",
    },
  ],
};

const activeIndex = ref(0);
const currentBadges = computed(
  () => badgeConfigs[activeIndex.value] || badgeConfigs[0],
);

const onSwiper = (swiper) => {
  console.log("Swiper initialized:", swiper);
};

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};

// Marquee items
const marqueeItems = [
  "Layer Hens",
  "Catfish ",
  "Broiler Chickens",
  "Cassava Farming",
  "Fresh Eggs Daily",
];
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 640px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none;
  }
}
</style>
