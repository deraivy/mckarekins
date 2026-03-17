<template>
  <div
    ref="banner"
    class="bg-gradient-to-br from-primary via-[#234d32] to-secondary relative overflow-hidden rounded-2xl px-12 py-10 flex flex-col items-center text-center min-h-[200px]"
  >
    <!-- Badge -->

    <!-- Title -->
    <h2
      class="text-white text-3xl md:text-4xl lg:text-5xl max-w-xl font-semibold mb-2"
    >
      Come See Where Your Food Grows
    </h2>

    <!-- Subtitle -->
    <p class="text-white/85 text-base max-w-lg mb-6">
      Tour our crop fields, chicken pens, and catfish ponds. Experience real,
      fresh farming firsthand.
    </p>

    <!-- Button -->
    <button
      class="btn-book bg-white text-[#0F6E56] font-medium text-base px-8 py-3 rounded-full cursor-pointer transition-all duration-200 hover:bg-[#e1f5ee] hover:scale-105"
    >
      Book a Visit Today
    </button>

    <!-- Leaves -->
    <span
      v-for="leaf in leavesData"
      :key="leaf.id"
      class="leaf"
      :style="leaf.style"
    >
      {{ leaf.char }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const banner = ref(null);

const address = "Your Farm Address";
const phone = "+234 XXX XXX XXXX";

const leavesChars = ["🌿", "🌱"];
const leavesData = ref([]);

onMounted(() => {
  const temp = [];

  for (let i = 0; i < 12; i++) {
    const left = Math.random() * 92;
    const dur = 4 + Math.random() * 5;
    const delay = -(Math.random() * dur);
    const swayDur = 2 + Math.random() * 2;

    temp.push({
      id: i,
      char: leavesChars[i % leavesChars.length],
      style: {
        left: `${left}%`,
        fontSize: `${14 + Math.random() * 10}px`,
        animationDuration: `${dur}s, ${swayDur}s`,
        animationDelay: `${delay}s, ${delay}s`,
      },
    });
  }

  leavesData.value = temp;
});
</script>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-40px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(160px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sway {
  0%,
  100% {
    margin-left: 0px;
  }
  50% {
    margin-left: 18px;
  }
}

.leaf {
  position: absolute;
  top: 0;
  pointer-events: none;
  user-select: none;
  animation:
    fall linear infinite,
    sway ease-in-out infinite;
}
</style>
