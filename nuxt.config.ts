// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', 
    '@nuxtjs/tailwindcss'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
    },
  },

  experimental: {
    externalVue: false,
    payloadExtraction: true,
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  content: {
    experimental: { 
      nativeSqlite: true 
    },
    database: {
      type: 'sqlite',
      filename: '/tmp/contents.sqlite'
    },
    build: {
      markdown: {
        highlight: {
          langs: ['javascript', 'vue', 'html'],
          theme: 'monokai'
        }
      }
    }
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    build: {
        target: 'esnext',
    },
    plugins: []
  },

  nitro: {
    preset: 'aws-lambda',
    esbuild: {
        options: {
            target: 'esnext'
        },
    },
    externals: {
      inline: ['entities', 'property-information']
    }
  },
});
