import pluginTailwindCSS from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    plugins: { tailwindcss: pluginTailwindCSS },
    rules: pluginTailwindCSS.configs.recommended.rules,
  },
])
