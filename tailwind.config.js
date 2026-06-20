/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          soft: '#121212',
          softest: '#181818',
        },
        line: {
          DEFAULT: '#1f1f1f',
          strong: '#2a2a2a',
        },
        fg: {
          DEFAULT: '#f5f5f5',
          dim: '#8a8a8a',
          muted: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#ff4d2e',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        sans: ['"Inter"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '500' }],
        'h2': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h3': ['clamp(1.25rem, 1.6vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '500' }],
        'body': ['15px', { lineHeight: '1.75' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          md: '2rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
}
