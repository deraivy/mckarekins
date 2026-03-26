<template>
  <div
    ref="banner"
    class="bg-[#1c3d27] relative overflow-hidden rounded-2xl px-8 py-14 flex flex-col items-center text-center min-h-[280px]"
  >
    <div
      class="absolute -top-14 -right-14 w-44 h-44 rounded-full border border-[#e8cfa0]/15"
    ></div>
    <div
      class="absolute top-3 right-3 w-20 h-20 rounded-full border border-[#e8cfa0]/10"
    ></div>
    <div
      class="absolute -bottom-14 -left-14 w-44 h-44 rounded-full border border-[#e8cfa0]/15"
    ></div>
    <div
      class="absolute bottom-3 left-3 w-20 h-20 rounded-full border border-[#e8cfa0]/10"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#e8cfa0]/10"
    ></div>

    <div class="relative z-10 flex flex-col items-center">
      <h2
        class="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-snug mb-4 max-w-xl"
      >
        Come See Where <span class="text-[#e8cfa0]">Your Food Grows.</span>
      </h2>

      <p
        class="text-[#ede3ce]/70 text-base lg:text-lg leading-relaxed max-w-xl mb-7"
      >
        Tour our crop fields, chicken pens, and catfish ponds. Experience real,
        fresh farming firsthand — no filters, no packaging.
      </p>

      <div class="flex gap-3 flex-wrap justify-center">
        <NuxtLink
          to="/contact"
          class="bg-[#e8cfa0] text-[#1c3d27] font-bold text-base px-8 py-3 rounded-full hover:bg-[#f5e8c8] hover:-translate-y-0.5 transition-all duration-200"
        >
          Contact Us
        </NuxtLink>
        <!-- <button
          class="text-[#e8cfa0]/85 font-semibold text-base px-8 py-3 rounded-full border border-[#e8cfa0]/30 hover:border-[#e8cfa0]/70 hover:text-[#e8cfa0] transition-all duration-200"
        >
          Call Us Instead
        </button> -->
      </div>

      <div class="w-10 h-0.5 bg-[#e8cfa0]/25 rounded my-6"></div>

      <!-- <div class="flex gap-6 flex-wrap justify-center">
        <span class="text-xs text-[#ede3ce]/50">Mon – Sat, 7am – 5pm</span>
        <span class="text-xs text-[#ede3ce]/30">•</span>
        <span class="text-xs text-[#ede3ce]/50"
          >Lagos-Ibadan Expressway, Ogun State</span
        >
        <span class="text-xs text-[#ede3ce]/30">•</span>
        <span class="text-xs text-[#ede3ce]/50">+234 801 234 5678</span>
      </div> -->
    </div>

    <span
      v-for="leaf in leavesData"
      :key="leaf.id"
      class="leaf absolute top-0 pointer-events-none select-none"
      :style="leaf.style"
    >
      {{ leaf.char }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const banner = ref(null);
const leavesData = ref([]);

onMounted(() => {
  const chars = ["🌿", "🌱"];
  leavesData.value = Array.from({ length: 14 }, (_, i) => {
    const dur = 4 + Math.random() * 5;
    const delay = -(Math.random() * dur);
    const sway = 2 + Math.random() * 2;
    return {
      id: i,
      char: chars[i % chars.length],
      style: {
        left: `${Math.random() * 92}%`,
        fontSize: `${13 + Math.random() * 9}px`,
        animationDuration: `${dur}s, ${sway}s`,
        animationDelay: `${delay}s, ${delay}s`,
      },
    };
  });
});
</script>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-30px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(400px) rotate(360deg);
    opacity: 0;
  }
}
@keyframes sway {
  0%,
  100% {
    margin-left: 0;
  }
  50% {
    margin-left: 16px;
  }
}
.leaf {
  animation:
    fall linear infinite,
    sway ease-in-out infinite;
}
</style>
