<template>
  <div class="min-h-screen">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div
        class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full"
      >
        <!-- Left Text -->
        <div class="space-y-8">
          <div class="slide-up max-w-2xl" style="animation-delay: 0s">
            <h1
              class="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-balance text-secondary"
            >
              Farming for a Better
              <span class="text-soil">Future</span>
            </h1>
          </div>

          <p
            class="slide-up text-lg text-accent leading-relaxed max-w-lg text-balance"
            style="animation-delay: 0.1s"
          >
            We cultivate excellence across three domains: premium catfish and
            tilapia, healthy poultry, and high-yield cassava production. Rooted
            in tradition, grown with innovation.
          </p>

          <div
            class="slide-up flex flex-wrap gap-4"
            style="animation-delay: 0.2s"
          >
            <button
              @click="scrollTo('sectors')"
              class="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-[#e8a020 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Our Farm
            </button>
            <button
              @click="scrollTo('about')"
              class="bg-[#e8a020] text-[#2c1a08] px-8 py-4 rounded-full font-medium border border-[#d4c0a0] hover:border-[#4a7a3a] transition-all duration-300 hover:-translate-y-1"
            >
              Our Story
            </button>
          </div>

          <div
            class="slide-up flex items-center gap-8 pt-8 border-t border-[#d4c0a0]"
            style="animation-delay: 0.3s"
          >
            <div>
              <div class="text-3xl font-serif font-semibold text-[#3d5e30]">
                50+
              </div>
              <div class="text-sm text-[#7a6048]">Acres Cultivated</div>
            </div>
            <div class="w-px h-12 bg-[#d4c0a0]"></div>
            <div>
              <div class="text-3xl font-serif font-semibold text-[#3d5e30]">
                3
              </div>
              <div class="text-sm text-[#7a6048]">Core Sectors</div>
            </div>
            <div class="w-px h-12 bg-[#d4c0a0]"></div>
            <div>
              <div class="text-3xl font-serif font-semibold text-[#3d5e30]">
                6
              </div>
              <div class="text-sm text-[#7a6048]">Years Experience</div>
            </div>
          </div>
        </div>

        <div class="lg:w-3/5 flex flex-col md:flex-row gap-4 h-[500px]">
          <div class="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
            <NuxtImg
              src="/images/chicken.jpg"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
            >
              <div
                class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
              >
                Poultry
              </div>
              <h2 class="text-white text-2xl font-semibold">
                Free-Range Chicken
              </h2>
            </div>
          </div>

          <div class="flex flex-col flex-1 gap-4">
            <div class="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
              <video
                autoplay
                muted
                loop
                playsinline
                class="w-full h-full object-cover"
                src="/images/catfish.MP4"
              ></video>
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <div
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
                >
                  Aquaculture
                </div>
                <h2 class="text-white text-2xl font-semibold">Fresh Catfish</h2>
              </div>
            </div>

            <div class="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
              <NuxtImg
                class="w-full h-full object-cover"
                src="/images/cassava.jpg"
              />
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <div
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
                >
                  Poultry
                </div>
                <h2 class="text-white text-2xl font-semibold">Fresh Catfish</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center py-16"
    >
      <NuxtImg
        src="/images/f.jpg"
        alt="Organic farming leaf"
        class="w-full md:w-1/2 h-[400px] object-cover rounded-2xl shadow-lg"
      />

      <div class="flex flex-col gap-4 md:w-1/2">
        <h2
          class="font-serif text-4xl md:text-5xl font-semibold text-[#201509]"
        >
          Organic Farming
        </h2>

        <p class="text-lg text-[#7a6048] leading-relaxed">
          GreenRoot Farms was founded with a single mission: to produce
          high-quality food sustainably, using responsible farming practices
          that respect both animals and the land.
        </p>

        <p class="text-lg text-[#7a6048] leading-relaxed">
          From cattle and goats to poultry, catfish ponds, and extensive cassava
          and maize fields, every corner of our farm is carefully managed.
        </p>

        <div class="flex flex-wrap gap-3">
          <div
            class="border border-[#7a6048] bg-[#FAF5E8]/30 w-fit py-0.5 px-3.5 rounded-full"
          >
            Non-GMO Crops
          </div>

          <div
            class="border border-[#7a6048] bg-[#FAF5E8]/30 w-fit py-0.5 px-3.5 rounded-full"
          >
            Sustainable Farming
          </div>
        </div>

        <NuxtLink
          to="/about"
          class="mt-4 bg-[#201509] w-40 text-white rounded-full p-3 text-center hover:bg-[#3a2814] transition"
        >
          Learn More
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <NuxtImg
        src="/images/leaf.jpg"
        alt="Organic farming leaf"
        class="w-full md:w-1/2 h-[400px] object-cover rounded-2xl shadow-lg"
      />

      <div>
        <h2
          class="font-serif text-4xl md:text-5xl font-semibold text-[#201509]"
        >
          Organic Farming
        </h2>

        <p class="text-lg text-[#7a6048] leading-relaxed">
          GreenRoot Farms was founded with a single mission: to produce
          high-quality food sustainably, using responsible farming practices
          that respect both animals and the land.
        </p>

        <p class="text-lg text-[#7a6048] leading-relaxed">
          From cattle and goats to poultry, catfish ponds, and extensive cassava
          and maize fields, every corner of our farm is carefully managed.
        </p>
      </div>
    </div>
    <section class="bg-[#ede3ce] py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        <div class="flex items-center space-x-2 mb-2">
          <div class="border border-amber-700 w-12" />
          <h2 class="uppercase text-amber-700">What We Offer</h2>
        </div>

        <h2 class="text-4xl md:text-5xl mb-8 font-semibold">
          Full-Cycle Farm Operations
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
                  class="w-10 h-10 text-amber-700"
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
                  class="w-10 h-10 text-amber-700"
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
                <Icon name="ph:plant" class="w-10 h-10 text-amber-700" />
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

    <section
      class="clip-top bg-gradient-to-br from-moss to-leaf py-32 px-6 md:px-16 relative overflow-hidden"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none"
      ></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="section-badge">💬 Testimonials</div>
          <h2
            class="font-display text-cream text-4xl md:text-5xl font-bold mt-3"
          >
            What Our <em class="text-sun not-italic">Clients</em> Say
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl p-8 shadow-lg card-lift"
          >
            <div class="quote-mark">"</div>
            <p class="text-cream/85 text-sm leading-relaxed -mt-6">
              GreenRoot supplied our restaurant with fresh catfish every week
              for two years. The quality is unmatched and delivery is always on
              time. Highly recommend!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-harvest to-sun flex items-center justify-center text-lg"
              >
                👨
              </div>
              <div>
                <div class="font-display text-cream font-bold text-sm">
                  Chukwuemeka O.
                </div>
                <div class="text-cream/50 text-xs">Restaurant Owner, Lagos</div>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl p-8 shadow-lg card-lift"
          >
            <div class="quote-mark">"</div>
            <p class="text-cream/85 text-sm leading-relaxed -mt-6">
              I started my own poultry farm after their advisory workshop. The
              support and training I received was practical and life-changing.
              My farm is thriving!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-leaf to-sprout flex items-center justify-center text-lg"
              >
                👩
              </div>
              <div>
                <div class="font-display text-cream font-bold text-sm">
                  Aisha M.
                </div>
                <div class="text-cream/50 text-xs">New Farmer, Kaduna</div>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-gray-500 rounded-2xl p-8 shadow-lg card-lift"
          >
            <div class="quote-mark">"</div>
            <p class="text-cream/85 text-sm leading-relaxed -mt-6">
              We source all our cassava tubers and garri from GreenRoot. Their
              bulk pricing is fair and the produce is always clean and fresh.
              Great partnership!
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-clay to-harvest flex items-center justify-center text-lg"
              >
                👨
              </div>
              <div>
                <div class="font-display text-cream font-bold text-sm">
                  Babatunde A.
                </div>
                <div class="text-cream/50 text-xs">
                  Food Distributor, Ibadan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const heroStats = [
  { value: "500+", label: "Livestock Head", color: "text-sun" },
  { value: "10k+", label: "Poultry Birds", color: "text-sprout" },
  { value: "50ha", label: "Crop Land", color: "text-harvest" },
];

// ── Marquee ──
const marqueeItems = [
  "🐄 Beef Cattle •",
  "🐔 Layer Hens •",
  "🐟 Catfish & Tilapia •",
  "🌿 Cassava Farming •",
  "🌽 Maize & Sorghum •",
  "🐖 Pig Rearing •",
  "🥚 Fresh Eggs Daily •",
];
</script>

<style lang="scss" scoped></style>
