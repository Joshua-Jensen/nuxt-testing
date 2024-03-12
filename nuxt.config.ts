// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-aos',
    '@vueform/nuxt',
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
