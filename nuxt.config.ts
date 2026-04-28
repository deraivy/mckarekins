// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
  ],
  css: ["./styles/main.css"],
  app: {
    head: {
      title: "Mckarekins Farms Nigeria | Sustainable Agriculture in Epe, Lagos",
      meta: [
        {
          name: "description",
          content:
            "Mckarekins Farms is a sustainable agriculture business in Epe, Lagos, Nigeria. We sell and supply goats, catfish, cassava, cattle, and cows, providing fresh, chemical-free farm produce and livestock.",
        },
        {
          name: "keywords",
          content:
            "Mckarekins Farms, goat farming Nigeria, catfish farm Lagos, cassava supply, cattle farming, cow export Nigeria, agriculture Epe Lagos",
        },
      ],
    },
  },
  site: {
    url: "https://mckarekinsfarm.ng",
  },
  sitemap: {
    autoLastmod: true,
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  image: {
    // Generates modern formats (webp, avif) automatically
    format: ["webp", "avif"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },

  vite: {
    build: {
      rollupOptions: {
        external: [/^\/videos\//],
      },
    },
  },
});
