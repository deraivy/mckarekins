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
      title:
        "Mckarekins Farms Nigeria | Sustainable Agriculture in Owu-Ikosi, Epe, Lagos",

      meta: [
        {
          name: "description",
          content:
            "Mckarekins Farms is an integrated agricultural farm in Owu-Ikosi, Epe, Lagos. We produce and supply fresh catfish, broiler chicken, eggs, goats, cattle, and cassava — chemical-free and sustainably raised.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "google-site-verification",
          content: "YOUR_CODE_HERE",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://mckarekinsfarm.ng" },
      ],
    },
  },

  // IMPORTANT: ensures correct base URL for SEO + sitemap
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
