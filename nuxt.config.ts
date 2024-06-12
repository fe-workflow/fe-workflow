export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
  },

  modules: [
    '@nuxt/eslint',
    "@nuxt/content",
    "@unocss/nuxt"
  ],

  eslint: {
    config: {
      stylistic: true,
      standalone: false
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-dark-dimmed',
      },
      langs: [
        'js',
        'ts',
        'vue',
        'css',
        'scss',
        'sass',
        'html',
        'bash',
        'md',
        'mdc',
        'json'
      ]
    }
  },
})
