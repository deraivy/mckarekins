// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss"],
  css: ["./styles/main.css"],
  app: {
    head: {
      title: "Mckarekins",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
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
