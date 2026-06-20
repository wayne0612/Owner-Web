/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          card: '#141414',
          soft: '#1c1c1e',
        },
        line: '#262626',
        accent: {
          DEFAULT: '#ff4d2e',
          amber: '#eab308',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        sans: ['"Inter"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem',
        },
      },
    }
  },
  plugins: []
}
