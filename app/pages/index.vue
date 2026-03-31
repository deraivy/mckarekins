<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <div
      class="bg-gradient-to-br from-primary via-[#234d32] to-secondary overflow-hidden"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
      >
        <div
          class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full py-12 lg:py-0"
        >
          <!-- Left Content -->
          <div class="space-y-8 lg:w-1/2 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/90 border border-[#d4c0a0]/30 text-[#e8cfa0] text-sm font-medium tracking-wide"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"
              ></span>
              Sustainable Agriculture Since 2022
            </div>

            <h1
              class="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white tracking-tighter"
            >
              Farming for a Better
              <span class="text-[#e8cfa0] block mt-1">Tomorrow</span>
            </h1>

            <p
              class="text-lg sm:text-xl text-[#ede3ce]/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Premium catfish, livestock, poultry, and cassava cultivated with
              traditional wisdom and modern innovation.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                class="group relative px-8 py-4 bg-[#e8cfa0] text-[#1c3d27] rounded-full font-semibold text-base hover:bg-[#d4b88a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                Explore Our Farm
                <svg
                  class="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                class="px-8 py-4 text-white rounded-full font-medium border-2 border-[#d4c0a0]/60 hover:border-[#e8cfa0] hover:bg-white/10 transition-all duration-300 text-base"
              >
                Watch Our Story
              </button>
            </div>

            <!-- Stats -->
            <div
              class="flex items-center justify-center lg:justify-start gap-10 pt-12 border-t border-[#d4c0a0]/30"
            >
              <div class="text-center lg:text-left">
                <div class="text-4xl font-serif font-bold text-[#e8cfa0]">
                  50+
                </div>
                <div class="text-sm text-[#ede3ce]/70 mt-1 tracking-wide">
                  Acres Cultivated
                </div>
              </div>
              <div class="w-px h-14 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-4xl font-serif font-bold text-[#e8cfa0]">
                  4
                </div>
                <div class="text-sm text-[#ede3ce]/70 mt-1 tracking-wide">
                  Core Sectors
                </div>
              </div>
              <div class="w-px h-14 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-4xl font-serif font-bold text-[#e8cfa0]">
                  4
                </div>
                <div class="text-sm text-[#ede3ce]/70 mt-1 tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: Carousel -->
          <div
            class="lg:w-1/2 w-full flex justify-center lg:justify-end pt-8 lg:pt-0"
          >
            <div class="relative w-full max-w-[480px] lg:max-w-[520px]">
              <!-- Swiper -->
              <swiper
                :modules="modules"
                :effect="'fade'"
                :fadeEffect="{ crossFade: true }"
                :loop="true"
                :speed="900"
                :autoplay="{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                class="w-full aspect-square rounded-full overflow-hidden border-8 border-white/20 shadow-2xl"
                @slideChange="onSlideChange"
                @swiper="onSwiper"
              >
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                  <div class="relative w-full h-full group">
                    <img
                      :src="slide.image"
                      :alt="slide.alt"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <!-- Gradient overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    ></div>

                    <!-- Content -->
                    <div
                      class="absolute bottom-10 left-0 right-0 text-center px-6"
                    >
                      <p
                        class="text-[#e8cfa0] text-sm font-medium tracking-[2px] uppercase mb-2"
                      >
                        {{ slide.sector }}
                      </p>
                      <h3
                        class="text-3xl sm:text-4xl font-bold text-white drop-shadow-2xl leading-tight"
                      >
                        {{ slide.title }}
                      </h3>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>

              <!-- Dynamic Floating Badges -->
              <div class="absolute inset-0 pointer-events-none z-20">
                <transition-group name="badge">
                  <div
                    v-for="(badge, idx) in currentBadges"
                    :key="badge.text"
                    class="absolute pointer-events-auto"
                    :class="[badge.position, badge.animation]"
                  >
                    <div
                      :class="[
                        'px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md text-sm font-semibold border border-white/30',
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
      </div>

      <!-- Marquee -->
      <div
        class="border-t border-b border-[#e8cfa0]/20 bg-[#1c3d27]/90 backdrop-blur-sm py-4 overflow-hidden"
      >
        <div class="flex whitespace-nowrap animate-marquee">
          <div
            v-for="(item, i) in [...marqueeItems, ...marqueeItems]"
            :key="i"
            class="flex items-center gap-8 flex-shrink-0 px-8"
          >
            <span
              class="text-[#e8cfa0] text-base sm:text-lg tracking-widest uppercase font-medium"
            >
              {{ item }}
            </span>
            <span
              class="flex-shrink-0 w-2 h-2 rounded-full bg-[#e8cfa0]"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Organic Farming -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <!-- Video -->
        <div class="relative rounded-2xl overflow-hidden group">
          <NuxtImg
            src="/images/cassavaw.jpg"
            class="w-full aspect-[5/4] md:aspect-[6/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <!-- Content -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left gap-2"
        >
          <p
            class="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3"
          >
            Our Story
          </p>

          <h2
            class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight mb-6"
          >
            Farming with Purpose, Rooted in Lagos
          </h2>

          <div class="space-y-6 text-base leading-relaxed text-primary/90">
            <p>
              Kinse Farms is nestled in the heart of Epe, Lagos one of Nigeria's
              most fertile farming regions. Founded with a clear mission: to
              drive economic growth, build agricultural capacity, create jobs,
              and eradicate poverty through sustainable farming. Though we have
              been farming for over a decade, the business was formally
              incorporated by the Corporate Affairs Commission in May 2016.
            </p>
            <p>
              Today, every corner of our farm is carefully managed — from our
              cattle, goats, and poultry to our thriving catfish ponds and
              expansive cassava fields. We don't just grow food; we grow
              opportunities for the communities around us.
            </p>
          </div>

          <div class="flex items-center gap-4 mt-4">
            <NuxtLink
              to="/about"
              class="bg-[#1c3d27] hover:bg-[#2a4a35] text-[#e8cfa0] font-semibold text-sm py-3 px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn More About Us →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="text-center mb-12">
        <p
          class="text-sm font-bold tracking-widest uppercase text-amber-600 mb-3"
        >
          What we offer
        </p>
        <h2
          class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight mb-4 max-w-lg mx-auto"
        >
          Our Products
        </h2>
        <p class="mt-6 text-lg text-secondary/80 max-w-2xl mx-auto">
          We integrate crops, livestock, aquaculture, to recycle resources,
          increase yields, diversify income, and strengthen food security across
          Nigeria.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mt-12 px-4 md:px-8"
      >
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          :style="{ background: service.background }"
        >
          <div class="p-6 h-full flex flex-col relative">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div
                class="w-12 h-12 p-1 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm bg-white/15 border border-white/25 shadow-inner group-hover:bg-white/25 transition-colors duration-300"
              >
                <Icon
                  :name="service.icon"
                  class="w-24 h-24 text-white drop-shadow-md"
                />
              </div>

              <h3
                class="text-2xl font-bold mb-3 text-white tracking-tight drop-shadow-md group-hover:text-white transition-colors"
              >
                {{ service.title }}
              </h3>

              <p class="text-base text-white/70 leading-relaxed drop-shadow-sm">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 sm:py-24 bg-[#faf7f0]">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-14">
          <p
            class="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 mb-3"
          >
            Why Choose Us
          </p>

          <h2
            class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold max-w-md mx-auto leading-tight mb-4"
          >
            The Farm That Never Cuts Corners
          </h2>

          <p
            class="text-base lg:text-lg text-[#2a4a35]/70 leading-relaxed max-w-xl mx-auto"
          >
            We combine traditional farming experience with modern practices to
            deliver quality you can trust every time.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            class="bg-white border border-[#d4c0a0]/50 rounded-2xl p-6 relative overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <!-- Number -->
            <div
              class="absolute top-3 right-5 font-serif text-5xl font-bold text-[#1c3d27]/20 leading-none select-none"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <!-- Accent line -->
            <div
              class="w-10 h-[3px] rounded-full mb-8"
              :style="{ background: pillar.lineColor }"
            ></div>

            <!-- Title -->
            <h4 class="text-xl font-semibold text-[#1c3d27] mb-2">
              {{ pillar.title }}
            </h4>

            <!-- Description -->
            <p
              class="text-base lg:text-lg text-[#2a4a35]/70 leading-relaxed mb-5"
            >
              {{ pillar.description }}
            </p>

            <!-- Tag -->
            <span
              class="inline-block text-xs font-semibold px-3 py-1 rounded-full"
              :style="{ background: pillar.tagBg, color: pillar.tagColor }"
            >
              {{ pillar.tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 px-6 md:px-16">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <p
            class="text-sm font-bold tracking-widest uppercase text-amber-600 mb-3"
          >
            Testimonials
          </p>
          <h2
            class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight"
          >
            What Our Clients Say
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="bg-white border border-[#d4c0a0]/50 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <span v-for="n in 5" :key="n" class="text-amber-500 text-sm"
                >★</span
              >
            </div>

            <p class="leading-relaxed text-base text-[#2a4a35]/80">
              {{ testimonial.quote }}
            </p>

            <div
              class="mt-6 pt-5 border-t border-[#d4c0a0]/40 flex items-center gap-3"
            >
              <div
                class="w-9 h-9 rounded-full bg-[#1c3d27] flex items-center justify-center text-[#e8cfa0] text-sm font-bold flex-shrink-0"
              >
                {{ testimonial.initials }}
              </div>
              <div>
                <div class="font-semibold text-sm text-[#1c3d27]">
                  {{ testimonial.name }}
                </div>
                <div class="text-xs text-[#2a4a35]/60">
                  {{ testimonial.role }}
                </div>
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
    subtitle: "Free-range • No antibiotics • Pasture-fed",
  },
  {
    image: "/images/catfish.jpg",
    alt: "Fresh catfish in sustainable aquaculture ponds",
    sector: "Aquaculture",
    title: "Catfish",
    subtitle: "Freshwater farmed • Organic feed • Premium quality",
  },

  {
    image: "/images/ram.jpg",
    alt: "",
    sector: "Livestock",
    title: "Ram",
    subtitle: "Healthy animals • Organic feed • Pasture raised",
  },
  {
    image: "/images/cassava.jpg",
    alt: "High-yield cassava roots harvested from fertile farmland",
    sector: "Crops",
    title: "Premium Cassava",
    subtitle: "Non-GMO • Sustainably grown • Rich in nutrients",
  },
];
const testimonials = [
  {
    quote:
      "Kinse Farms supplied our restaurant with fresh catfish every week for two years. The quality is unmatched and delivery is always on time. Highly recommend!",
    name: "Chukwuemeka O.",
    role: "Restaurant Owner, Lagos",
    initials: "CO",
  },
  {
    quote:
      "I started my own poultry farm after their advisory workshop. The support and training I received was practical and life-changing. My farm is thriving!",
    name: "Aisha M.",
    role: "New Farmer, Kaduna",
    initials: "AM",
  },
  {
    quote:
      "We source all our cassava tubers and garri from Kinse Farms. Their bulk pricing is fair and the produce is always clean and fresh. Great partnership!",
    name: "Babatunde A.",
    role: "Food Distributor, Ibadan",
    initials: "BA",
  },
];
// Badge configurations for each slide
const badgeConfigs = {
  0: [
    // Poultry - Chicken
    {
      text: "Free-range",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "No Antibiotics",
      position: "top-[20%] left-[-5%]",
      style: "bg-[#e8cfa0] text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Ethically Raised",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Pasture-fed",
      position: "bottom-[5%] left-[0%]",
      style: "bg-[#2a4a35] text-white border-[#e8cfa0]/30",
      animation: "animate-float-delayed",
    },
  ],
  1: [
    // Aquaculture - Catfish
    {
      text: "Fresh Daily",
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
      text: "Hormone-free",
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
    // Livestock - Ram
    {
      text: "Grass-fed",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Ethically Raised",
      position: "top-[25%] left-[-5%]",
      style: "bg-[#e8cfa0] text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "No Hormones",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Farm-bred",
      position: "bottom-[10%] left-[0%]",
      style: "bg-[#2a4a35] text-white border-[#e8cfa0]/30",
      animation: "animate-float-delayed",
    },
  ],
  3: [
    // Crops - Cassava
    {
      text: "High Yield",
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
      text: "Sustainably Grown",
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
  "Cattle",
  "Catfish ",
  "Cow ",
  "Broiler Chickens",
  "Goat",
  "Cassava Farming",
  "Fresh Eggs Daily",
];

const services = [
  {
    id: 1,
    title: "Poultry Farming",
    description:
      "Premium free-range chickens raised on natural, high-quality feed. Daily supply of live birds, freshly dressed chicken, and farm-fresh eggs to households, restaurants, and markets.",
    icon: "healthicons:animal-chicken-outline",
    background:
      "linear-gradient(135deg, #8B4513 0%, #D2691E 35%, #FFB74D 100%)", // Warm terracotta → golden brown (evokes healthy chickens & sunlit farms)
  },
  {
    id: 2,
    title: "Catfish Farming",
    description:
      "Premium freshwater catfish raised in clean ponds with organic feed. Consistently fresh, tender, and flavorful — perfect for homes, hotels, and local markets.",
    icon: "famicons:fish-outline",
    background:
      "linear-gradient(135deg, #01579B 0%, #0288D1 40%, #4FC3F7 100%)", // Deep ocean blue → bright cyan (fresh, clean water feel)
  },
  {
    id: 3,
    title: "Cassava Farming",
    description:
      "High-yield, organically grown cassava varieties. Supporting food security and delivering top-quality tubers for processing, households, and industrial use.",
    icon: "ph:plant",
    background:
      "linear-gradient(135deg, #1B5E20 0%, #388E3C 40%, #81C784 100%)", // Rich forest green → fresh vibrant green (lush, growing crops)
  },
  {
    id: 4,
    title: "Livestock Farming",
    description:
      "Healthy cattle, pigs, and other livestock raised naturally. Reliable daily supply of live animals and quality meat to families, butchers, and markets across the region.",
    icon: "game-icons:cow",
    background:
      "linear-gradient(135deg, #5D4037 0%, #8D6E63 35%, #BCAAA4 100%)", // Deep earthy brown → warm taupe (soil, strength, tradition)
  },
];

const sideItems = [
  {
    title: "100% Chemical Free",
    description:
      "All our produce is grown without harmful pesticides or synthetic growth agents — safe for your family.",
    icon: "healthicons:plant-outline",
  },
  {
    title: "Direct Farm Delivery",
    description:
      "Cut out the middlemen. Fresh produce reaches you directly from our farm at better prices.",
    icon: "healthicons:truck-outline",
  },
  {
    title: "Expert Farm Team",
    description:
      "Agronomists, vets, and aquaculture specialists with 10+ years of hands-on Nigerian farming experience.",
    icon: "healthicons:people-outline",
  },
];

const pillars = [
  {
    title: "Natural & organic feed practices",
    description:
      "Water recycling, composting, and eco-conscious feed sourcing are built into every part of our operation — not an afterthought.",
    tag: "Environment first",
    lineColor: "#1c3d27",
    tagBg: "rgba(28,61,39,0.08)",
    tagColor: "#1c3d27",
  },
  {
    title: "Free-range & welfare-focused",
    description:
      "Dry season or rainy season — we plan our cycles to ensure households, restaurants, and bulk buyers always have supply.",
    tag: "Zero stockouts",
    lineColor: "#c4a030",
    tagBg: "rgba(196,160,48,0.12)",
    tagColor: "#7a6010",
  },
  {
    title: "Community Rooted",
    description:
      "We hire locally, train young farmers, and reinvest in the communities around us — because farming should lift everyone up.",
    tag: "Local impact",
    lineColor: "#c4704a",
    tagBg: "rgba(196,112,74,0.12)",
    tagColor: "#7a3a20",
  },
];
</script>
