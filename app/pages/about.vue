<template>
  <div>
    <div
      class="relative h-48 md:h-64 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#1c3d27] via-[#234d32] to-[#2a4a35]"
      ></div>

      <div
        class="absolute inset-0 bg-gradient-to-tr from-[#e8cfa0]/5 via-transparent to-transparent"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"
      ></div>

      <div class="relative z-10 text-center">
        <h2
          class="text-3xl md:text-4xl font-serif font-bold text-[#f6efdf] tracking-tight"
        >
          About <span class="text-[#e8cfa0]">Us</span>
        </h2>
        <div class="mt-2 flex items-center justify-center gap-2">
          <div class="h-px w-8 bg-[#e8cfa0]/40"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-[#e8cfa0]"></div>
          <div class="h-px w-8 bg-[#e8cfa0]/40"></div>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8cfa0]/30 to-transparent"
      ></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-8">
      <div class="grid lg:grid-cols-12 gap-16 items-center">
        <!-- Image Grid -->
        <div class="lg:col-span-5 relative">
          <div
            class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <img
              src="/images/about.jpg"
              alt="Young plant in hands"
              class="w-full h-full object-cover image-hover border rounded-3xl"
            />

            <!-- <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-moss-900/90 via-moss-900/50 to-transparent p-8"
            >
              <p class="text-white font-serif text-xl italic">
                "The beginning of everything"
              </p>
              <p class="text-moss-200 text-sm mt-2">2018</p>
            </div> -->
          </div>
        </div>

        <!-- Content -->
        <div
          class="lg:col-span-7 space-y-8 scroll-reveal"
          style="transition-delay: 100ms"
        >
          <div class="flex flex-col gap-5">
            <p
              class="text-xs font-bold tracking-widest uppercase text-amber-600"
            >
              Our Story
            </p>
            <h1
              class="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg font-bold text-[#1c3d27] leading-tight"
            >
              Built from the Soil Up, Grown with Purpose
            </h1>
            <p class="text-base md:text-lg text-primary leading-relaxed">
              Mckarekins Farms is nestled in the heart of Owu-Ikosi, Lagos one
              of Nigeria's most fertile farming belts. Founded in 2022, we were
              established with one clear mission: to build a self-sustaining
              agricultural enterprise that creates real economic opportunities
              for local communities while producing clean, natural food for
              Nigerian families.
            </p>
            <p class="text-base md:text-lg text-primary leading-relaxed">
              What began as a modest catfish pond has grown into a fully
              integrated 8-acre operation. Today we run active catfish and
              tilapia ponds, a thriving poultry unit with broilers and layers, a
              cassava plantation, and a growing livestock herd of cattle and
              goats all managed with care and intention.
            </p>
            <p class="text-base md:text-lg text-primary leading-relaxed">
              Our philosophy is simple: every part of the farm feeds another.
              Poultry provides organic manure for our cassava fields. Fish ponds
              supply water for irrigation in dry seasons. Nothing goes to waste,
              and nothing is done halfway. Farming done right doesn't just feed
              people it builds communities, restores land, and creates lasting
              prosperity.
            </p>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="mt-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <!-- Mission -->
          <div class="bg-[#1c3d27] rounded-2xl p-7">
            <div
              class="bg-[#e8cfa0]/15 border border-[#e8cfa0]/20 w-fit p-2.5 rounded-xl mb-4"
            >
              <NuxtImg src="/icons/dat.svg" class="w-8 h-8" />
            </div>
            <p
              class="text-lg font-bold tracking-widest uppercase text-[#e8cfa0]/55 mb-2"
            >
              Our Mission
            </p>

            <p class="text-base md:text-lg text-[#ede3ce]/70 leading-relaxed">
              We are committed to producing safe, chemical-free food through
              integrated, sustainable farming while creating jobs, building
              skills, and strengthening the communities around us. Every harvest
              is a step toward a more food-secure Nigeria.
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-[#f5ede0] border border-[#d4c0a0]/60 rounded-2xl p-7">
            <div
              class="bg-[#d4c0a0]/60 border border-[#d4c0a0] w-fit p-2.5 rounded-xl mb-4"
            >
              <NuxtImg src="/icons/eye.svg" class="w-8 h-8" />
            </div>
            <p
              class="text-lg font-bold tracking-widest uppercase text-[#c4704a] mb-2"
            >
              Our Vision
            </p>

            <p class="text-base md:text-lg text-[#2a4a35]/75 leading-relaxed">
              We envision a future where Kinse Farms is the benchmark for
              sustainable, profitable agriculture in Nigeria a model that other
              farmers, investors, and communities can look to and replicate
              across the region.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white border border-[#d4c0a0]/50 rounded-2xl p-5"
            :style="{ borderTop: `3px solid ${value.color}` }"
          >
            <div class="text-xl mb-3">{{ value.icon }}</div>
            <h4 class="text-sm font-bold text-[#1c3d27] mb-1">
              {{ value.title }}
            </h4>
            <p class="text-xs text-[#2a4a35]/68 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>

      <section class="py-16 font-sans">
        <!-- Header -->
        <div class="text-center mb-12 px-4">
          <p
            class="text-[10px] font-medium tracking-[0.18em] uppercase text-amber-600 mb-3"
          >
            Our Operations
          </p>
          <h2
            class="font-serif text-4xl md:text-5xl font-bold text-[#1c3d27] leading-tight max-w-md mx-auto mb-3"
          >
            Life on the Farm
          </h2>
          <p
            class="text-sm text-neutral-400 font-light max-w-xs mx-auto leading-relaxed"
          >
            A glimpse into our daily operations and how we raise our animals.
          </p>
        </div>

        <!-- Bento Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 grid-rows-[300px_220px] gap-3.5"
        >
          <!-- Featured 2x2 -->
          <div
            class="col-span-2 row-span-2 group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#1c2b1e]"
            @click="openVideo('/images/cattle.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
            >
              <source src="/images/cattle.mp4" type="video/mp4" />
            </video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-55 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-[68px] h-[68px] bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="#1c3d27" class="w-7 h-7 ml-1">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <span
                class="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/60 mb-1.5"
              >
                Featured
              </span>
              <h3
                class="font-serif text-[26px] font-semibold text-white leading-tight"
              >
                Free-Range Chickens
              </h3>
              <p
                class="text-[13px] text-white/70 font-light mt-1.5 leading-relaxed"
              >
                Follow our flock from morning feeding to evening roost
              </p>
            </div>
          </div>

          <!-- Small 1 -->
          <div
            class="col-span-1 group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#2e3a20]"
            @click="openVideo('/images/chicken.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
            >
              <source src="/images/chicken.mp4" type="video/mp4" />
            </video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-45 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-[52px] h-[52px] bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="#1c3d27" class="w-5 h-5 ml-0.5">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <span
                class="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/60 mb-1.5"
              >
                Kitchen
              </span>
              <h4
                class="font-serif text-[18px] font-semibold text-white leading-tight"
              >
                Culinary Delights
              </h4>
            </div>
          </div>

          <!-- Small 2 -->
          <div
            class="col-span-1 group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#1e2d35]"
            @click="openVideo('/images/traffic.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
            >
              <source src="/images/traffic.mp4" type="video/mp4" />
            </video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-45 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-[52px] h-[52px] bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="#1c3d27" class="w-5 h-5 ml-0.5">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <span
                class="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/60 mb-1.5"
              >
                Innovation
              </span>
              <h4
                class="font-serif text-[18px] font-semibold text-white leading-tight"
              >
                Tech on the Farm
              </h4>
            </div>
          </div>

          <!-- Wide 2x1 -->
          <div
            class="col-span-2 group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#1a2e38]"
            @click="openVideo('/images/catfish.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
            >
              <source src="/images/catfish.mp4" type="video/mp4" />
            </video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-45 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-[52px] h-[52px] bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="#1c3d27" class="w-5 h-5 ml-0.5">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <span
                class="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/60 mb-1.5"
              >
                Aquaculture
              </span>
              <h4
                class="font-serif text-[20px] font-semibold text-white leading-tight"
              >
                Catfish Ponds
              </h4>
              <p
                class="text-[13px] text-white/70 font-light mt-1.5 leading-relaxed"
              >
                Sustainable fish farming from fingerling to harvest
              </p>
            </div>
          </div>
        </div>

        <!-- Video Modal -->
        <Teleport to="body">
          <Transition
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-200 ease-in"
            leave-to-class="opacity-0"
          >
            <div
              v-if="activeVideo"
              class="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
              @click.self="closeVideo"
            >
              <div class="relative w-full max-w-4xl">
                <button
                  @click="closeVideo"
                  class="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl leading-none transition-colors"
                >
                  ✕
                </button>
                <video
                  :src="activeVideo"
                  controls
                  autoplay
                  muted
                  class="w-full aspect-video rounded-2xl"
                />
              </div>
            </div>
          </Transition>
        </Teleport>
      </section>

      <banner class="mt-24" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeVideo = ref(null);

function openVideo(src) {
  activeVideo.value = src;
}

function closeVideo() {
  activeVideo.value = null;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
