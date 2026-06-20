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
        bg: {
          DEFAULT: '#0a0a0a',
          soft: '#111111',
        },
        line: '#1f1f1f',
        fg: {
          DEFAULT: '#f5f5f5',
          dim: '#8a8a8a',
        },
        accent: {
          DEFAULT: '#ff4d2e',
          dark: '#c93d21',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        sans: ['"Inter"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '500' }],
        'h2': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h3': ['1.25rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '500' }],
        'body': ['0.95rem', { lineHeight: '1.65' }],
        'caption': ['0.78rem', { lineHeight: '1.5' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      spacing: {
        '128': '32rem',
      },
    }
  },
  plugins: []
}
