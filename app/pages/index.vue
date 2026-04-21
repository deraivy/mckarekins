<template>
  <div class="min-h-screen">
    <!-- ─── Hero ─────────────────────────────────────────────────────────── -->
    <div
      class="bg-gradient-to-br from-primary via-[#234d32] to-secondary overflow-hidden"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
      >
        <div
          class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full py-12 lg:py-0"
        >
          <!-- Left content -->
          <div class="space-y-8 lg:w-1/2 text-center lg:text-left">
            <!-- Eyebrow pill -->
            <div
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/90 border border-[#d4c0a0]/30 text-accent text-sm font-medium tracking-wide"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"
              ></span>
              Sustainable Agriculture Since 2022
            </div>

            <!-- H1 — font-serif, tight leading, tracking-tight -->
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
            >
              Farming for a Better
              <span class="text-accent block mt-1">Tomorrow</span>
            </h1>

            <!-- Body — text-lg, /80 opacity, explicit leading -->
            <p
              class="text-lg text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Premium catfish, livestock, poultry, and cassava cultivated with
              traditional wisdom and modern innovation.
            </p>

            <!-- CTAs -->
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <NuxtLink
                to="/products"
                class="group relative px-8 py-3 bg-accent text-primary rounded-full font-semibold text-base hover:bg-[#d4b88a] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
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
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="px-8 py-3 text-accent rounded-full font-medium border-2 border-accent/40 hover:border-accent hover:bg-white/10 transition-all duration-300 text-base text-center"
              >
                Our Story
              </NuxtLink>
            </div>

            <!-- Stats — font-serif on numbers -->
            <div
              class="flex items-center justify-center lg:justify-start gap-10 pt-12 border-t border-[#d4c0a0]/30"
            >
              <div class="text-center lg:text-left">
                <div class="text-4xl font-bold text-accent">8</div>
                <div class="text-sm text-white/60 mt-1 tracking-wide">
                  Acres of Farm
                </div>
              </div>
              <div class="w-px h-14 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-4xl font-bold text-accent">4</div>
                <div class="text-sm text-white/60 mt-1 tracking-wide">
                  Core Sectors
                </div>
              </div>
              <div class="w-px h-14 bg-[#d4c0a0]/30"></div>
              <div class="text-center lg:text-left">
                <div class="text-4xl font-bold text-accent">3+</div>
                <div class="text-sm text-white/60 mt-1 tracking-wide">
                  Years Growing
                </div>
              </div>
            </div>
          </div>

          <!-- Right — Swiper carousel -->
          <div
            class="lg:w-1/2 w-full flex justify-center lg:justify-end pt-8 lg:pt-0"
          >
            <div class="relative w-full max-w-[480px] lg:max-w-[520px]">
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
                    <NuxtImg
                      :src="slide.image"
                      :alt="slide.alt"
                      sizes="40vw"
                      format="webp"
                      quality="75"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    ></div>
                    <div
                      class="absolute bottom-10 left-0 right-0 text-center px-6"
                    >
                      <p
                        class="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-2"
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

              <!-- Floating badges -->
              <div class="absolute inset-0 pointer-events-none z-20">
                <transition-group name="badge">
                  <div
                    v-for="badge in currentBadges"
                    :key="badge.text"
                    class="absolute pointer-events-auto"
                    :class="[badge.position, badge.animation]"
                  >
                    <div class="mini-tag" :class="badge.style">
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
        class="border-t border-b border-accent/20 bg-[#1c3d27]/90 backdrop-blur-sm py-4 overflow-hidden"
      >
        <div class="flex whitespace-nowrap animate-marquee">
          <div
            v-for="(item, i) in [...marqueeItems, ...marqueeItems]"
            :key="i"
            class="flex items-center gap-8 flex-shrink-0 px-8"
          >
            <span
              class="text-accent text-sm tracking-[0.2em] uppercase font-medium"
              >{{ item }}</span
            >
            <span class="flex-shrink-0 w-2 h-2 rounded-full bg-accent"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- ─── Our Story ─────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div class="relative rounded-2xl overflow-hidden group">
          <NuxtImg
            src="/images/cassavaw.jpg"
            alt="Cassava field at Mckarekins Farms, Owu-Ikosi, Epe, Lagos"
            sizes="sm:100vw md:50vw lg:40vw"
            format="webp"
            quality="75"
            class="w-full aspect-[5/4] md:aspect-[6/5] object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          />
        </div>

        <div
          class="flex flex-col items-center md:items-start text-center md:text-left gap-2"
        >
          <!-- standardised eyebrow -->
          <p
            class="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3"
          >
            Our Story
          </p>

          <h2
            class="text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight mb-6"
          >
            Farming with Purpose,<br class="hidden sm:block" />
            Rooted in Lagos
          </h2>

          <div class="space-y-4 text-secondary">
            <p class="">
              Nestled in the heart of Owu-Ikosi, Epe, Lagos — one of Nigeria's
              most fertile farming belts. Mckarekins Farms was born from a
              simple but powerful conviction: that agriculture, done right,
              doesn't just feed people. It builds communities, restores land,
              and creates lasting prosperity.
            </p>
            <p class="">
              What started as a modest catfish pond has grown into something far
              greater — a fully integrated 8-acre operation where every element
              of the farm is in conversation with the next. We didn't set out to
              build something big. We set out to build something right.
            </p>
          </div>

          <div class="flex items-center gap-4 mt-6">
            <NuxtLink
              to="/about"
              class="bg-[#1c3d27] hover:bg-[#2a4a35] text-accent font-semibold text-sm py-3 px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Our Products ─────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="text-center mb-16">
        <p
          class="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3"
        >
          What we offer
        </p>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
        >
          Our Products
        </h2>
        <p
          class="text-base leading-relaxed text-[#2a4a35]/80 max-w-xl mx-auto mt-4"
        >
          Integrated farming across crops, livestock, and aquaculture —
          recycling resources, increasing yields, and strengthening food
          security.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          :style="{ background: service.background }"
        >
          <div class="p-6 h-full flex flex-col relative min-h-[260px]">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none"
            ></div>
            <div class="relative z-10 flex flex-col h-full">
              <!-- Uniform inline SVG icon box -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/15 border border-white/25 group-hover:bg-white/25 transition-colors duration-300"
              >
                <Icon :name="service.icon" class="text-white w-8 h-8" />
              </div>
              <h3 class="text-xl mb-3 text-white drop-shadow-md">
                {{ service.title }}
              </h3>
              <p class="text-white/75 drop-shadow-sm flex-1">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Why Choose Us ─────────────────────────────────────────────────── -->
    <section class="py-16 sm:py-24 bg-[#faf7f0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <p
            class="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3"
          >
            Why Choose Us
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl max-w-md mx-auto mb-4">
            The Farm That Never Cuts Corners
          </h2>
          <p class="text-[#2a4a35]/80 max-w-xl mx-auto">
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
            <!-- Decorative number — font-serif, reduced opacity -->
            <div
              class="absolute top-3 right-5 text-6xl text-[#1c3d27]/[0.07] leading-none select-none"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div
              class="w-10 h-[3px] rounded-full mb-8"
              :style="{ background: pillar.lineColor }"
            ></div>
            <h4 class="text-xl mb-2">
              {{ pillar.title }}
            </h4>
            <p class="text-[#2a4a35]/70 mb-5">
              {{ pillar.description }}
            </p>
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

    <!-- ─── Testimonials ──────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p
            class="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3"
          >
            Testimonials
          </p>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight"
          >
            What Our Clients Say
          </h2>
        </div>

        <swiper
          :modules="modules"
          :spaceBetween="24"
          :loop="true"
          :speed="600"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }"
          class="w-full"
        >
          <swiper-slide
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="h-auto flex"
          >
            <div
              class="border border-[#d4c0a0]/50 rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full w-full"
            >
              <p class="text-base leading-relaxed text-[#2a4a35]/80">
                {{ testimonial.quote }}
              </p>

              <div
                class="mt-6 pt-5 border-t border-[#d4c0a0]/40 flex items-center gap-3"
              >
                <div
                  class="w-9 h-9 rounded-full bg-[#1c3d27] flex items-center justify-center text-accent text-sm font-bold flex-shrink-0"
                >
                  {{ testimonial.initials }}
                </div>

                <div>
                  <div class="font-semibold text-sm text-[#1c3d27]">
                    {{ testimonial.name }}
                  </div>
                  <div class="text-xs text-[#2a4a35]/60 mt-0.5">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- ─── Banner ────────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <banner />
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";

// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title:
    "Mckarekins Farms | Fresh Catfish, Poultry & Livestock — Owu-Ikosi, Lagos",
  description:
    "Mckarekins Farms is an 8-acre integrated farm in Owu-Ikosi, Epe, Lagos. We supply fresh catfish, broiler chicken, eggs, cattle, goats, and cassava — naturally raised, zero waste.",
  ogTitle: "Mckarekins Farms — Fresh from the Farm to Your Table",
  ogDescription:
    "Premium catfish, poultry, livestock, and cassava from our integrated farm in Owu-Ikosi, Lagos. Community-rooted. Chemical-free. Order today.",
  ogImage: "https://mckarekinfarms.com/images/og-home.jpg",
  ogUrl: "https://mckarekinfarms.com",
  ogType: "website",
  ogSiteName: "Mckarekins Farms",
  ogLocale: "en_NG",
  twitterCard: "summary_large_image",
  twitterTitle: "Mckarekins Farms | Lagos Farm — Catfish, Poultry & Livestock",
  twitterDescription: "Fresh farm produce from Owu-Ikosi, Epe, Lagos.",
  twitterImage: "https://mckarekinfarms.com/images/og-home.jpg",
});

useHead({
  link: [{ rel: "canonical", href: "https://mckarekinfarms.com" }],
  meta: [
    {
      name: "keywords",
      content:
        "catfish farm Lagos, buy fresh chicken Nigeria, livestock farm Epe Lagos, cassava farm Nigeria, fresh eggs Lagos, broiler chicken Owu-Ikosi, goat farm Lagos, Mckarekins Farms, farm fresh food Nigeria",
    },
    { name: "geo.region", content: "NG-LA" },
    { name: "geo.placename", content: "Owu-Ikosi, Epe, Lagos State, Nigeria" },
    { name: "geo.position", content: "6.5833;4.0167" },
    { name: "ICBM", content: "6.5833, 4.0167" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "author", content: "Mckarekins Farms" },
  ],
});

// ── Swiper ───────────────────────────────────────────────────────────────────
const modules = [EffectFade, Autoplay, FreeMode];

const slides = [
  {
    image: "/images/chicken.jpg",
    alt: "Free-range chickens grazing on lush green pasture at Mckarekins Farms",
    sector: "Poultry",
    title: "Chicken",
  },
  {
    image: "/images/catfish.jpg",
    alt: "Fresh catfish in sustainable aquaculture ponds at Mckarekins Farms",
    sector: "Aquaculture",
    title: "Catfish",
  },
  {
    image: "/images/ram.jpg",
    alt: "Healthy ram raised on open pasture at Mckarekins Farms, Owu-Ikosi Lagos",
    sector: "Livestock",
    title: "Ram",
  },
  {
    image: "/images/cassava.jpg",
    alt: "High-yield cassava roots harvested from fertile farmland at Mckarekins Farms",
    sector: "Crops",
    title: " Cassava",
  },
];

// ── Badge configs ─────────────────────────────────────────────────────────────
const badgeConfigs = {
  0: [
    {
      text: "Free-range",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "No Antibiotics",
      position: "top-[20%] left-[-5%]",
      style: "!bg-accent !text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Ethically Raised",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Pasture-fed",
      position: "bottom-[5%] left-[0%]",
      style: "!bg-[#2a4a35] text-white",
      animation: "animate-float-delayed",
    },
  ],
  1: [
    {
      text: "Fresh Daily",
      position: "top-[8%] right-[0%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Sustainable",
      position: "top-[15%] left-[-5%]",
      style: "!bg-accent !text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Hormone-free",
      position: "bottom-[20%] right-[-5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Freshwater",
      position: "bottom-[5%] left-[5%]",
      style: "!bg-[#2a4a35] text-white",
      animation: "animate-float-delayed",
    },
  ],
  2: [
    {
      text: "Grass-fed",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Ethically Raised",
      position: "top-[25%] left-[-5%]",
      style: "!bg-accent !text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "No Hormones",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Farm-bred",
      position: "bottom-[10%] left-[0%]",
      style: "!bg-[#2a4a35] text-white",
      animation: "animate-float-delayed",
    },
  ],
  3: [
    {
      text: "High Yield",
      position: "top-[5%] right-[5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Non-GMO",
      position: "top-[25%] left-[-5%]",
      style: "!bg-accent !text-[#1c3d27]",
      animation: "animate-float-delayed",
    },
    {
      text: "Food Security",
      position: "bottom-[25%] right-[-5%]",
      style: "bg-white/95 !text-[#1c3d27]",
      animation: "animate-float",
    },
    {
      text: "Sustainably Grown",
      position: "bottom-[10%] left-[0%]",
      style: "!bg-[#2a4a35] text-white",
      animation: "animate-float-delayed",
    },
  ],
};

const activeIndex = ref(0);
const currentBadges = computed(
  () => badgeConfigs[activeIndex.value] || badgeConfigs[0],
);
const onSwiper = () => {};
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};

// ── Marquee ───────────────────────────────────────────────────────────────────
const marqueeItems = [
  "Layer Hens",
  "Cattle",
  "Catfish",
  "Cow",
  "Broiler Chickens",
  "Goat",
  "Cassava Farming",
  "Fresh Eggs Daily",
];

// ── Services — inline SVG paths (uniform stroke style, no Iconify) ────────────
const services = [
  {
    id: 1,
    title: "Poultry Farming",
    description:
      "Premium free-range chickens raised on natural, high-quality feed. Daily supply of live birds, freshly dressed chicken, and farm-fresh eggs to households, restaurants, and markets.",
    icon: "emojione-monotone:chicken",
    background:
      "linear-gradient(135deg, #8B4513 0%, #D2691E 35%, #FFB74D 100%)",
  },
  {
    id: 2,
    title: "Catfish Farming",
    description:
      "Premium freshwater catfish raised in clean ponds with organic feed. Consistently fresh, tender, and flavorful — perfect for homes, hotels, and local markets.",
    icon: "famicons:fish-outline",
    background:
      "linear-gradient(135deg, #01579B 0%, #0288D1 40%, #4FC3F7 100%)",
  },
  {
    id: 3,
    title: "Cassava Farming",
    description:
      "High-yield, organically grown cassava varieties. Supporting food security and delivering top-quality tubers for processing, households, and industrial use.",
    icon: "ph:plant",
    background:
      "linear-gradient(135deg, #1B5E20 0%, #388E3C 40%, #81C784 100%)",
  },
  {
    id: 4,
    title: "Livestock Farming",
    description:
      "Healthy cattle, goats, and other livestock raised naturally. Reliable supply of live animals and quality meat to families, butchers, and markets across the region.",
    icon: "fluent-emoji-high-contrast:goat",
    background:
      "linear-gradient(135deg, #5D4037 0%, #8D6E63 35%, #BCAAA4 100%)",
  },
];

// ── Pillars ───────────────────────────────────────────────────────────────────
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
    title: "Community rooted",
    description:
      "We hire locally, train young farmers, and reinvest in the communities around us — because farming should lift everyone up.",
    tag: "Local impact",
    lineColor: "#c4704a",
    tagBg: "rgba(196,112,74,0.12)",
    tagColor: "#7a3a20",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "Mckarekins Farms supplied our restaurant with fresh catfish every week for two years. The quality is unmatched and delivery is always on time. Highly recommend!",
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
      "We source all our cassava tubers and garri from Mckarekins Farms. Their bulk pricing is fair and the produce is always clean and fresh. Great partnership!",
    name: "Babatunde A.",
    role: "Food Distributor, Ibadan",
    initials: "BA",
  },
  {
    quote:
      "I started my own poultry farm after their advisory workshop. The support and training I received was practical and life-changing. My farm is thriving!",
    name: "Aisha M.",
    role: "New Farmer, Kaduna",
    initials: "AM",
  },
];
</script>
