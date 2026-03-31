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
  vite: {
    build: {
      rollupOptions: {
        external: [/^\/videos\//],
      },
    },
  },
});
