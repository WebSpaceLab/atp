import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        'docs/content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
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

        fontFamily: {
            'sans': ['Arial', 'sans-serif'],
            'serif': ['Georgia', 'serif'],
        },
    },
}
