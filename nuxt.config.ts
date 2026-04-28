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
      title: "Mckarekins Farms | Epe, Lagos",
      meta: [
        {
          name: "description",
          content:
            "Mckarekins Farms is a sustainable agriculture business located in Epe, Lagos, Nigeria. We are committed to producing safe, chemical-free food through integrated, sustainable farming while creating jobs, building skills, and strengthening the communities around us.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
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
