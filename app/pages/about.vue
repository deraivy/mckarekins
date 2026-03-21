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
            <!-- <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=1000&fit=crop"
              alt="Young plant in hands"
              class="w-full h-full object-cover image-hover border rounded-3xl"
            /> -->

            <video
              src="/images/cattle.MP4"
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            ></video>

            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-moss-900/90 via-moss-900/50 to-transparent p-8"
            >
              <p class="text-white font-serif text-xl italic">
                "The beginning of everything"
              </p>
              <p class="text-moss-200 text-sm mt-2">2018</p>
            </div>
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
              McKariens Farms is nestled in the heart of Epe, Lagos one of
              Nigeria's most fertile farming belts. Founded in 2022, we were
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

      <section class="py-20 md:py-28">
        <!-- Header -->
        <div class="text-center mb-12 md:mb-16 px-4">
          <p
            class="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3"
          >
            Our Operations
          </p>
          <h2
            class="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg mx-auto font-bold text-[#1c3d27] leading-tight"
          >
            Life on the Farm
          </h2>
        </div>

        <!-- Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        >
          <!-- Cassava – tall featured video -->
          <div
            class="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-xl cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-green-600/50"
            tabindex="0"
            @keydown.enter="togglePlay(1)"
            @keydown.space.prevent="togglePlay(1)"
          >
            <!-- Poster -->
            <img
              :src="videos[0].poster"
              class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
              :class="
                videos[0].isPlaying
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100'
              "
              loading="lazy"
            />
            <!-- Video -->
            <video
              :ref="(el) => setVideoRef(el, 1)"
              muted
              playsinline
              class="w-full h-[530px] object-cover transition-transform duration-700 group-hover:scale-105"
              :poster="videos[0].poster"
              @ended="handleVideoEnd(1)"
              @click="togglePlay(1)"
            >
              <source :src="videos[0].src" type="video/mp4" />
            </video>

            <!-- Overlay -->
            <div
              class="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-opacity duration-400 opacity-80 group-hover:opacity-100"
            />

            <!-- Label -->
            <div
              class="absolute bottom-0 left-0 right-0 z-30 p-5 md:p-7 pointer-events-none"
            >
              <span
                class="text-white font-semibold text-lg md:text-2xl drop-shadow-md"
              >
                {{ videos[0].label }}
              </span>
            </div>

            <!-- Play / Pause button -->
            <button
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white/35 hover:scale-110 active:scale-95 focus:outline-none"
              :class="
                videos[0].isPlaying
                  ? 'opacity-0 group-hover:opacity-80'
                  : 'opacity-90'
              "
              @click.stop="togglePlay(1)"
              :aria-label="videos[0].isPlaying ? 'Pause video' : 'Play video'"
            >
              <svg
                v-if="!videos[0].isPlaying"
                class="w-6 h-6 translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>

            <!-- Playing badge -->
            <div
              class="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm pointer-events-none transition-all duration-300"
              :class="
                videos[0].isPlaying
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-1'
              "
            >
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                class="text-white/90 text-[10px] font-semibold tracking-widest uppercase"
                >Playing</span
              >
            </div>
          </div>

          <!-- Aquaculture -->
          <div
            class="rounded-3xl overflow-hidden relative group shadow-lg aspect-[4/3]"
          >
            <video
              src="/images/catfish.MP4"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            ></video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-400"
            />
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <span
                class="text-white font-semibold text-base md:text-lg drop-shadow"
                >Aquaculture</span
              >
            </div>
          </div>

          <!-- Poultry -->
          <div
            class="rounded-3xl overflow-hidden relative group shadow-lg aspect-[4/3]"
          >
            <video
              src="/images/traffic.MP4"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            ></video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-400"
            />
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <span
                class="text-white font-semibold text-base md:text-lg drop-shadow"
                >Free-Range Poultry</span
              >
            </div>
          </div>

          <!-- Integrated Farm Life – wide featured video -->
          <div
            class="col-span-2 rounded-3xl overflow-hidden relative group shadow-xl cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-green-600/50 aspect-video"
            tabindex="0"
            @keydown.enter="togglePlay(2)"
            @keydown.space.prevent="togglePlay(2)"
          >
            <!-- Poster -->
            <img
              :src="videos[1].poster"
              alt="Integrated farming layout"
              class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
              :class="
                videos[1].isPlaying
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100'
              "
              loading="lazy"
            />
            <!-- Video -->
            <video
              :ref="(el) => setVideoRef(el, 2)"
              muted
              loop
              playsinline
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              :poster="videos[1].poster"
              @ended="handleVideoEnd(2)"
              @click="togglePlay(2)"
            >
              <source :src="videos[1].src" type="video/mp4" />
            </video>

            <!-- Overlay -->
            <div
              class="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-opacity duration-400 opacity-80 group-hover:opacity-100"
            />

            <!-- Label -->
            <div
              class="absolute bottom-0 left-0 right-0 z-30 p-5 md:p-7 pointer-events-none"
            >
              <span
                class="text-white font-semibold text-lg md:text-2xl drop-shadow-md"
              >
                {{ videos[1].label }}
              </span>
            </div>

            <!-- Play / Pause button -->
            <button
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white/35 hover:scale-110 active:scale-95 focus:outline-none"
              :class="
                videos[1].isPlaying
                  ? 'opacity-0 group-hover:opacity-80'
                  : 'opacity-90'
              "
              @click.stop="togglePlay(2)"
              :aria-label="videos[1].isPlaying ? 'Pause video' : 'Play video'"
            >
              <svg
                v-if="!videos[1].isPlaying"
                class="w-6 h-6 translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>

            <!-- Playing badge -->
            <div
              class="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm pointer-events-none transition-all duration-300"
              :class="
                videos[1].isPlaying
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-1'
              "
            >
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                class="text-white/90 text-[10px] font-semibold tracking-widest uppercase"
                >Playing</span
              >
            </div>
          </div>
        </div>
      </section>

      <!--  -->
      <banner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videos = ref([
  {
    id: 1,
    isPlaying: false,
    label: "Cassava Cultivation",
    poster: "/images/nchicken.jpg",
    src: "/images/chicken.MP4",
  },
  {
    id: 2,
    isPlaying: false,

    poster: "/images/cassavaw.jpg",
    src: "/images/catfish.MP4",
  },
]);

const videoRefs = ref({});

const setVideoRef = (el, id) => {
  if (el) videoRefs.value[id] = el;
};

const togglePlay = (id) => {
  const video = videos.value.find((v) => v.id === id);
  const el = videoRefs.value[id];
  if (!video || !el) return;
  if (el.paused) {
    el.play();
    video.isPlaying = true;
  } else {
    el.pause();
    video.isPlaying = false;
  }
};

const handleVideoEnd = (id) => {
  const video = videos.value.find((v) => v.id === id);
  if (video) video.isPlaying = false;
};

const handleVisibilityChange = () => {
  if (document.hidden) {
    videos.value.forEach((v) => {
      const el = videoRefs.value[v.id];
      if (el && !el.paused) {
        el.pause();
        v.isPlaying = false;
      }
    });
  }
};

onMounted(() =>
  document.addEventListener("visibilitychange", handleVisibilityChange),
);
onUnmounted(() =>
  document.removeEventListener("visibilitychange", handleVisibilityChange),
);
</script>

<style lang="scss" scoped></style>
