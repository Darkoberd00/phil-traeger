/** @type {import('tailwindcss').Config} */
export default {
  nuxtIcon: {
    class: 'icon' // default <Icon> class applied
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
