import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import vue from '@astrojs/vue'
import netlify from '@astrojs/netlify'
import yaml from '@rollup/plugin-yaml'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    })
  ],
  vite: {
    plugins: [yaml()]
  },
  output: 'server',
  adapter: netlify(),
})
