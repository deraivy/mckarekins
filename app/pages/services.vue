<template>
  <section style="background: #f0ead6">
    <!-- Hero Banner -->
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
        <h2 class="text-3xl md:text-4xl font-bold text-accent tracking-tight">
          Our Products
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

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Product grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="product in filtered"
          :key="product.name"
          class="rounded-2xl overflow-hidden border border-[#d4c0a0]/50 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <!-- Gradient card header with Iconify icon -->
          <div
            class="h-[150px] flex items-center justify-between px-5 pb-4 pt-4 relative"
            :style="{ background: product.gradient }"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
            ></div>

            <!-- Icon box -->
            <div
              class="relative z-10 w-14 h-14 rounded-[14px] bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm"
            >
              <Icon
                :name="product.icon"
                class="w-8 h-8 text-white drop-shadow-md"
              />
            </div>

            <!-- Badge -->
            <span
              class="relative z-10 self-start text-xs font-semibold px-3.5 py-1.5 rounded-full"
              :style="{ background: product.badgeBg, color: product.badgeTxt }"
            >
              {{ product.badge }}
            </span>
          </div>

          <!-- Card body -->
          <div class="p-5 flex flex-col flex-1 gap-2">
            <h2 class="text-lg font-bold text-[#1c3d27]">
              {{ product.name }}
            </h2>
            <p class="text-[#2a4a35]/75 leading-relaxed flex-1">
              {{ product.desc }}
            </p>

            <div class="flex flex-wrap gap-1.5 mt-2">
              <span
                v-for="tag in product.tags"
                :key="tag"
                class="text-[11.5px] font-medium px-3 py-1 rounded-full bg-[#1c3d27]/[0.07] text-[#1c3d27]"
              >
                {{ tag }}
              </span>
            </div>

            <button
              class="mt-4 w-full py-2.5 bg-[#1c3d27] hover:bg-[#2a4a35] text-[#e8cfa0] text-sm font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Enquire →
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="mt-14 relative overflow-hidden rounded-2xl px-8 py-10 flex flex-wrap items-center justify-between gap-6"
        style="
          background: linear-gradient(
            135deg,
            #1c3d27 0%,
            #234d32 55%,
            #2a5c3a 100%
          );
        "
      >
        <div
          class="absolute -top-8 -right-8 w-44 h-44 rounded-full bg-[#e8cfa0]/5 pointer-events-none"
        ></div>
        <div
          class="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-[#e8cfa0]/4 pointer-events-none translate-y-10"
        ></div>
        <div class="relative z-10">
          <p class="text-2xl font-bold text-[#f5f0e8] mb-1">
            Ready to order from the farm?
          </p>
          <p class="text-sm font-light text-[#ede3ce]/60">
            Contact us for bulk pricing, fresh availability & delivery options.
          </p>
        </div>
        <NuxtLink
          to="/contact"
          class="relative z-10 px-8 py-3.5 bg-[#e8cfa0] hover:bg-[#d4b88a] text-[#1c3d27] font-semibold text-sm rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
        >
          Enquire now →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// ✅ SEO
useHead({
  title:
    "Our Products | Mckarekins Farms — Fresh Catfish, Poultry, Livestock & Cassava",
  meta: [
    {
      name: "description",
      content:
        "Shop fresh farm products from Mckarekins Farms in Owu-Ikosi, Epe, Lagos. We supply live catfish, tilapia, broiler chicken, fresh eggs, beef cattle, goats, cassava, and organic manure, all naturally raised with zero waste.",
    },
    {
      name: "keywords",
      content:
        "catfish farm Lagos, buy fresh chicken Nigeria, livestock farm Epe, cassava farm Lagos, organic eggs Nigeria, Mckarekins Farms products, broiler chicken Owu-Ikosi, goats for sale Lagos",
    },
    { property: "og:title", content: "Our Products | Mckarekins Farms" },
    {
      property: "og:description",
      content:
        "Fresh catfish, poultry, livestock and cassava from our 8-acre integrated farm in Owu-Ikosi, Lagos. Naturally raised, zero waste, community-rooted.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mckarekinfarms.com/products" },
    {
      property: "og:image",
      content: "https://mckarekinfarms.com/images/og-products.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Our Products | Mckarekins Farms" },
    {
      name: "twitter:description",
      content:
        "Fresh catfish, poultry, livestock and cassava from Owu-Ikosi, Lagos.",
    },
  ],
  link: [{ rel: "canonical", href: "https://mckarekinfarms.com/products" }],
});

const active = ref("all");

const categories = [
  { label: "All products", value: "all" },
  { label: "Aquaculture", value: "aquaculture" },
  { label: "Poultry", value: "poultry" },
  { label: "Livestock", value: "livestock" },
  { label: "Crops", value: "crops" },
];

const products = [
  {
    cat: "aquaculture",
    gradient: "linear-gradient(135deg,#01579B,#0288D1,#4FC3F7)",
    icon: "ion:fish-outline",
    name: "Live catfish",
    badge: "Best seller",
    badgeBg: "#e8cfa0",
    badgeTxt: "#1c3d27",
    desc: "Farm-raised in clean freshwater ponds. Available live or freshly dressed to order.",
    tags: ["Freshwater", "Hormone-free", "Daily harvest"],
  },

  {
    cat: "poultry",
    gradient: "linear-gradient(135deg,#8B4513,#D2691E,#FFB74D)",
    icon: "icon-park-outline:chicken-leg",
    name: "Broiler chicken",
    badge: "No antibiotics",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeTxt: "#fff",
    desc: "Free range raised broilers tender, clean, never treated with growth hormones.",
    tags: ["Free-range", "Pasture-fed", "Natural"],
  },
  {
    cat: "poultry",
    gradient: "linear-gradient(135deg,#e65100,#f57c00,#ffb300)",
    icon: "material-symbols:egg-outline",
    name: "Fresh eggs",
    badge: "Daily harvest",
    badgeBg: "#e8cfa0",
    badgeTxt: "#1c3d27",
    desc: "Collected daily from our layer hens. Rich golden yolk and full nutrition.",
    tags: ["Layer hens", "Rich yolk", "Daily"],
  },
  {
    cat: "livestock",
    gradient: "linear-gradient(135deg,#5D4037,#8D6E63,#BCAAA4)",
    icon: "ph:cow-duotone",
    name: "Beef cattle",
    badge: "Bulk orders",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeTxt: "#fff",
    desc: "Grass fed cattle raised on open pasture. Available for bulk and festive orders.",
    tags: ["Grass-fed", "Open pasture", "Bulk"],
  },
  {
    cat: "livestock",
    gradient: "linear-gradient(135deg,#4a3728,#7a5c42,#b08060)",
    icon: "fluent-emoji-high-contrast:goat",
    name: "Goats",
    badge: "Available now",
    badgeBg: "#e8cfa0",
    badgeTxt: "#1c3d27",
    desc: "Healthy well fed goats. Ideal for festive seasons, ceremonies, and market supply.",
    tags: ["Farm-bred", "No hormones", "Festive"],
  },
  {
    cat: "crops",
    gradient: "linear-gradient(135deg,#1B5E20,#388E3C,#81C784)",
    icon: "ph:plant-bold",
    name: "Cassava",
    badge: "Organic",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeTxt: "#fff",
    desc: "High yield cassava grown with organic poultry manure. Pesticide free.",
    tags: ["Non-GMO", "Organic", "High yield"],
  },
];

const filtered = computed(() =>
  active.value === "all"
    ? products
    : products.filter((p) => p.cat === active.value),
);
</script>
