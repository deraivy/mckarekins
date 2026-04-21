<template>
  <div>
    <div
      class="relative h-48 md:h-64 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary via-[#234d32] to-secondary"
      ></div>

      <div
        class="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"
      ></div>

      <div class="relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl text-accent tracking-tight">
          About Us
        </h2>
        <div class="mt-2 flex items-center justify-center gap-2">
          <div class="h-px w-8 bg-accent/40"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
          <div class="h-px w-8 bg-accent/40"></div>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-8">
      <div class="grid lg:grid-cols-12 gap-16 items-center">
        <!-- Image Grid -->
        <div class="lg:col-span-5 relative">
          <div
            class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            <NuxtImg
              src="/images/about.jpg"
              alt="about us"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:50vw"
              format="webp"
              quality="75"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <!-- Content -->
        <div
          class="lg:col-span-7 space-y-8 scroll-reveal"
          style="transition-delay: 100ms"
        >
          <div class="flex flex-col gap-5">
            <p class="text-xs tracking-widest uppercase text-amber-600">
              Our Story
            </p>

            <h1
              class="text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight max-w-lg"
            >
              <span class="block">
                Rooted in
                <em class="font-normal italic text-amber-600"> purpose.</em>
              </span>
              <span class="block"> Growing with intention </span>
            </h1>
            <div class="space-y-4 text-secondary">
              <p>
                Nestled in the heart of Owu-Ikosi, Epe, Lagos one of Nigeria's
                most fertile farming belts. Mckarekins Farms was born from a
                simple but powerful conviction: that agriculture, done right,
                doesn't just feed people. It builds communities, restores land,
                and creates lasting prosperity.
              </p>
              <p>
                What started as a modest catfish pond has grown into something
                far greater a fully integrated 8-acre operation where every
                element of the farm is in conversation with the next. We didn't
                set out to build something big. We set out to build something
                right.
              </p>
              <p>
                Today, Mckarekins Farms runs active catfish ponds, a thriving
                poultry unit with both broilers and layers, a cassava plantation
                in full growth, and a livestock herd of cattle and goats all
                managed with the same care and deliberateness that marked our
                very first day.
              </p>
              <p>
                Every part of the farm feeds another. Poultry provides organic
                manure for our cassava fields. Fish ponds supply water for
                irrigation in dry seasons. Nothing goes to waste, and nothing is
                done halfway.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <!-- <div class="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-primary rounded-3xl p-10 text-white">
          <div
            class="bg-accent/15 border border-accent/30 w-fit p-4 rounded-2xl mb-8"
          >
            <NuxtImg src="/icons/dat.svg" alt="Mission" class="w-9 h-9" />
          </div>
          <p
            class="uppercase tracking-[1.5px] text-accent/70 text-sm font-semibold mb-4"
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
          <p class="text-lg leading-relaxed text-secondary">
            We envision a future where Mckarekins Farms becomes the benchmark
            for sustainable, profitable agriculture in Nigeria — a model that
            other farmers, investors, and communities can look to and replicate
            across the region.
          </p>
        </div>
      </div> -->

      <section class="mt-32">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Mission -->
          <div
            class="relative overflow-hidden rounded-2xl bg-primary p-8 flex flex-col"
          >
            <div
              class="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#97C459]/5 translate-x-8 translate-y-8"
            ></div>

            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0"
              >
                <!-- pin icon -->
                <NuxtImg
                  src="/icons/dat.svg"
                  alt="Mission"
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </div>
              <span class="text-sm font-medium uppercase text-accent/70"
                >Our mission</span
              >
            </div>

            <h3 class="text-2xl text-[#f5f0e8] mb-4">
              Feed families.<br />Build communities.
            </h3>
            <p class="text-[#f5f0e8]/60 mb-6 flex-1">
              To produce clean, natural food through integrated, zero-waste
              farming — while creating sustainable economic opportunities for
              local communities across Nigeria.
            </p>

            <div
              class="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#97C459]/10 border border-[#97C459]/20"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#97C459]"></span>
              <span class="text-xs font-medium text-[#97C459]"
                >Owu-Ikosi, Lagos</span
              >
            </div>
          </div>

          <!-- Vision -->
          <div
            class="relative overflow-hidden rounded-2xl bg-[#d4c0a0]/60 border border-[#d4c0a0] p-8 flex flex-col"
          >
            <div
              class="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/5 translate-x-8 translate-y-8"
            ></div>

            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0"
              >
                <NuxtImg
                  src="/icons/eyee.svg"
                  alt="Vision"
                  width="36"
                  height="36"
                />
              </div>
              <span class="text-sm font-medium uppercase text-primary"
                >Our vision</span
              >
            </div>

            <h3 class="text-2xl text-primary mb-4">
              A model for<br />African agriculture.
            </h3>
            <p class="text-primary/80 mb-6 flex-1">
              To become West Africa's most trusted model of integrated,
              community-rooted agriculture — where every farm decision restores
              land, empowers people, and nourishes families for generations to
              come.
            </p>

            <div
              class="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-primary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#97C459]"></span>
              <span class="text-xs font-medium text-[#97C459]"
                >Est. 2022 · Growing forward</span
              >
            </div>
          </div>
        </div>
      </section>

      <section class="py-32">
        <!--  Header -->
        <div class="text-center mb-12 px-4">
          <p class="text-xs tracking-widest uppercase text-amber-600">
            Our Operations
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl text-primary mb-6">
            Life on the Farm
          </h2>
          <p class="mx-auto">
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
              <source :src="'/videos/cattle.mp4'" type="video/mp4" />
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
                >Featured</span
              >
              <h3 class="text-[26px] font-semibold text-white">
                Free-Range Chickens
              </h3>
              <p class="text-[13px] text-white/70 mt-1.5 leading-relaxed">
                Follow our flock from morning feeding to evening roost
              </p>
            </div>
          </div>

          <!-- Small 1 -->
          <div
            class="col-span-1 group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#2e3a20]"
            @click="openVideo('/videos/chicken.MP4')"
          >
            <video
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              muted
              playsinline
              preload="metadata"
            >
              <source :src="'/videos/chicken.MP4'" type="video/mp4" />
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
                >Kitchen</span
              >
              <h4 class="text-[18px] font-semibold text-white">
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
              playsinline
            >
              <source :src="'/videos/traffic.mp4'" type="video/mp4" />
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
                >Innovation</span
              >
              <h4 class="text-[18px] font-semibold text-white">
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
              playsinline
              preload="metadata"
            >
              <source :src="'/videos/catfish.mp4'" type="video/mp4" />
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
                >Aquaculture</span
              >
              <h4 class="text-[20px] font-semibold text-white">
                Catfish Ponds
              </h4>
              <p class="text-[13px] text-white/70 mt-1.5 leading-relaxed">
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
                  class="absolute -top-14 right-0 text-white text-4xl hover:text-accent transition-colors"
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
      <banner class="" />
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
