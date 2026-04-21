<template>
  <div class="not-found">
    <!-- Ambient background lines -->
    <div class="grid-lines" aria-hidden="true">
      <span v-for="n in 8" :key="n" class="line" :style="`--i: ${n}`" />
    </div>

    <!-- Floating grain overlay -->
    <div class="grain" aria-hidden="true" />

    <main class="content">
      <!-- Big 404 -->
      <div class="four-oh-four" aria-hidden="true">
        <span class="digit" style="--d: 0">4</span>
        <span class="zero-wrap">
          <span class="zero-ring" />
          <span class="digit zero-digit" style="--d: 1">0</span>
        </span>
        <span class="digit" style="--d: 2">4</span>
      </div>

      <!-- Divider -->
      <div class="divider" style="--d: 3">
        <span class="dot" />
        <span class="dash" />
        <span class="dot" />
      </div>

      <!-- Text -->
      <p class="eyebrow" style="--d: 4">Lost in the fields</p>
      <h1 class="heading text-primary" style="--d: 5">
        This page wandered off
      </h1>
      <p class="body" style="--d: 6">
        Looks like this path leads nowhere on our farm.<br />
        Let's get you back to solid ground.
      </p>

      <!-- Actions -->
      <div class="actions" style="--d: 7">
        <NuxtLink to="/" class="btn-primary">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <path d="M8 2L3 7l5 5" />
          </svg>
          Back to home
        </NuxtLink>
      </div>
    </main>

    <!-- Bottom ambient -->
    <div class="bottom-glow" aria-hidden="true" />
  </div>
</template>

<script setup>
definePageMeta({ layout: false });

useHead({
  title: "404 — Page Not Found",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap");

.not-found {
  min-height: 100vh;
  background: #f0ead6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: "DM Sans", sans-serif;
}

/* Vertical grid lines */
.grid-lines {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
  pointer-events: none;
}
.line {
  display: block;
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  animation: line-fade 2s ease forwards;
  animation-delay: calc(var(--i) * 0.08s);
  opacity: 0;
}

/* Grain texture */
.grain {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  animation: grain-shift 8s steps(10) infinite;
}

/* Bottom warm glow */
.bottom-glow {
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(
    ellipse at center,
    rgba(217, 119, 6, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* Main content */
.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

/* 404 numerals */
.four-oh-four {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  margin-bottom: 2rem;
  line-height: 1;
}

.digit {
  font-family: "Playfair Display", serif;
  font-size: clamp(7rem, 18vw, 14rem);
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px black;
  letter-spacing: -0.02em;
  animation: digit-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
  transform: translateY(30px);
}

.zero-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.zero-ring {
  position: absolute;
  width: clamp(4.5rem, 11vw, 8.5rem);
  height: clamp(4.5rem, 11vw, 8.5rem);
  border: 2px solid rgba(217, 119, 6, 0.35);
  border-radius: 50%;
  animation:
    ring-spin 20s linear infinite,
    digit-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.1s;
  opacity: 0;
}

.zero-digit {
  -webkit-text-stroke: 2px rgba(217, 119, 6, 0.5);
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  animation: fade-up 0.7s ease forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
}
.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #d97706;
}
.dash {
  width: 32px;
  height: 1px;
  background: rgba(217, 119, 6, 0.4);
}

/* Eyebrow */
.eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #d97706;
  font-weight: 500;
  margin: 0 0 1rem;
  animation: fade-up 0.7s ease forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
}

/* Heading */
.heading {
  font-family: "Playfair Display", serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
  color: #1c3d27;
  line-height: 1.2;
  margin: 0 0 1rem;
  animation: fade-up 0.7s ease forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
}

/* Body */
.body {
  font-size: 0.95rem;
  color: gray;
  line-height: 1.75;
  font-weight: 300;
  margin: 0 0 2.5rem;
  animation: fade-up 0.7s ease forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fade-up 0.7s ease forwards;
  animation-delay: calc(var(--d) * 0.1s);
  opacity: 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 1.4rem;
  background: #1c3d27;
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  border-radius: 100px;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
  letter-spacing: 0.01em;
}
.btn-primary:hover {
  background: #f59e0b;
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: scale(0.97);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.4rem;
  color: rgba(245, 240, 232, 0.5);
  font-size: 0.85rem;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
  letter-spacing: 0.01em;
}
.btn-ghost:hover {
  color: #f5f0e8;
  border-color: rgba(255, 255, 255, 0.2);
}

/* Keyframes */
@keyframes digit-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}
@keyframes line-fade {
  to {
    opacity: 1;
  }
}
@keyframes ring-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes grain-shift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-2%, -3%);
  }
  20% {
    transform: translate(3%, 1%);
  }
  30% {
    transform: translate(-1%, 4%);
  }
  40% {
    transform: translate(2%, -2%);
  }
  50% {
    transform: translate(-3%, 2%);
  }
  60% {
    transform: translate(1%, -4%);
  }
  70% {
    transform: translate(-2%, 3%);
  }
  80% {
    transform: translate(4%, 1%);
  }
  90% {
    transform: translate(-1%, -2%);
  }
}
</style>
