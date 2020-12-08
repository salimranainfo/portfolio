// tailwind.config.js
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        40: '10rem',
        70: '13rem',
      },
      height: {
        40: '10rem',
        70: '13rem',
      },
      animation: {
        'bounce-custom': 'bounce-tailwind 0.8s ease-in-out infinite',
      },
      keyframes: {
        'bounce-tailwind': {
          '50%': {
            transform: 'translateY(-20%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
