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
            class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            <img
              src="/images/about.jpg"
              alt="about us"
              loading="lazy"
              format="webp"
              quality="80"
              class="w-full h-full object-cover rounded-2xl"
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
            <div class="space-y-8 text-[17px] leading-relaxed text-[#2a4a35]">
              <p>
                Mckarekins Farms is nestled in the heart of Owu-Ikosi, Lagos one
                of Nigeria's most fertile farming belts. Founded in 2022, we
                were established with one clear mission: to build a
                self-sustaining agricultural enterprise that creates real
                economic opportunities for local communities while producing
                clean, natural food for Nigerian families.
              </p>
              <p>
                What began as a modest catfish pond has grown into a fully
                integrated 8-acre operation. Today we run active catfish and
                tilapia ponds, a thriving poultry unit with broilers and layers,
                a cassava plantation, and a growing livestock herd of cattle and
                goats all managed with care and intention.
              </p>
              <p>
                Our philosophy is simple: every part of the farm feeds another.
                Poultry provides organic manure for our cassava fields. Fish
                ponds supply water for irrigation in dry seasons. Nothing goes
                to waste, and nothing is done halfway. Farming done right
                doesn't just feed people it builds communities, restores land,
                and creates lasting prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-[#1c3d27] rounded-3xl p-10 text-white">
          <div
            class="bg-[#e8cfa0]/15 border border-[#e8cfa0]/30 w-fit p-4 rounded-2xl mb-8"
          >
            <NuxtImg src="/icons/dat.svg" alt="Mission" class="w-9 h-9" />
          </div>
          <p
            class="uppercase tracking-[1.5px] text-[#e8cfa0]/70 text-sm font-semibold mb-4"
          >
            Our Mission
          </p>
          <p class="text-lg leading-relaxed text-[#ede3ce]">
            We are committed to producing safe, chemical-free food through
            integrated, sustainable farming while creating jobs, building
            skills, and strengthening the communities around us. Every harvest
            is a step toward a more food-secure Nigeria.
          </p>
        </div>

        <!-- Vision -->
        <div class="bg-[#f5ede0] border border-[#d4c0a0]/70 rounded-3xl p-10">
          <div
            class="bg-[#d4c0a0]/60 border border-[#d4c0a0] w-fit p-4 rounded-2xl mb-8"
          >
            <NuxtImg src="/icons/eye.svg" alt="Vision" class="w-9 h-9" />
          </div>
          <p
            class="uppercase tracking-[1.5px] text-[#c4704a] text-sm font-semibold mb-4"
          >
            Our Vision
          </p>
          <p class="text-lg leading-relaxed text-[#2a4a35]">
            We envision a future where Mckarekins Farms becomes the benchmark
            for sustainable, profitable agriculture in Nigeria — a model that
            other farmers, investors, and communities can look to and replicate
            across the region.
          </p>
        </div>
      </div>

      <section class="py-32">
        <!--  Header -->
        <div class="text-center mb-12 px-4">
          <p class="text-xs font-bold tracking-widest uppercase text-amber-600">
            Our Operations
          </p>
          <h2
            class="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight mb-6"
          >
            Life on the Farm
          </h2>
          <p class="text-base text-gray-600 mx-auto leading-relaxed">
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
            @click="openVideo('/videos/cattle.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
            >
              <source src="/videos/cattle.mp4" type="video/mp4" />
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
            @click="openVideo('/videos/chicken.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              loading="lazy"
              playsinline
              preload="metadata"
            >
              <source src="/videos/chicken.mp4" type="video/mp4" />
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
            @click="openVideo('/videos/traffic.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              preload="metadata"
              loading="lazy"
              playsinline
            >
              <source src="/videos/traffic.mp4" type="video/mp4" />
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
            @click="openVideo('/videos/catfish.mp4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              loading="lazy"
              playsinline
              preload="metadata"
            >
              <source src="/videos/catfish.mp4" type="video/mp4" />
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
          <Transition name="fade">
            <div
              v-if="activeVideo"
              class="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4"
              @click.self="closeVideo"
            >
              <div class="relative w-full max-w-5xl">
                <button
                  @click="closeVideo"
                  class="absolute -top-14 right-0 text-white text-4xl hover:text-[#e8cfa0] transition-colors"
                >
                  ✕
                </button>
                <video
                  :src="activeVideo"
                  controls
                  autoplay
                  playsinline
                  class="w-full rounded-2xl shadow-2xl"
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
