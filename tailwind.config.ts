import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'var(--color-primary-dark)',
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary)',
        },

        secondary: {
          dark: 'var(--color-secondary-dark)',
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary)',
        },

        focus: {
          dark: 'var(--color-focus-dark)',
          DEFAULT: 'var(--color-focus)',
          light: 'var(--color-focus)',
        },
      },
      textColor: {
        basic: {
          dark: 'var(--color-text-basic-dark)',
          DEFAULT: 'var(--color-text-basic)',
          light: 'var(--color-text-basic)',
        },

        prime: {
          dark: 'var(--color-text-prime-dark)',
          DEFAULT: 'var(--color-text-prime)',
          light: 'var(--color-text-prime)',
        },

        second: {
          dark: 'var(--color-text-second-dark)',
          DEFAULT: 'var(--color-text-second)',
          light: 'var(--color-text-second)',
        },

        hover: {
          dark: 'var(--color-hover-dark)',
          DEFAULT: 'var(--color-hover)',
          light: 'var(--color-hover)',
        },

        active: {
          dark: 'var(--color-active-dark)',
          DEFAULT: 'var(--color-active)',
          light: 'var(--color-active)',
        },
      },
      backgroundColor: {
        background: {
          dark: 'var(--color-background-dark)',
          DEFAULT: 'var(--color-background)',
          light: 'var(--color-background)',
        },

        hover: {
          dark: 'var(--color-hover-bg-dark)',
          DEFAULT: 'var(--color-hover-bg)',
          light: 'var(--color-hover-bg)',
        },
      },
      borderColor: {
        prime: {
          dark: 'var(--color-border-dark)',
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border)',
        },
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

