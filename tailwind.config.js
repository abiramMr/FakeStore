/** @type {import('tailwindcss').Config} */

const colors = {
  primary: 'var(--fake-primary)',
  secondary: 'var(--fake-secondary)',
  black: 'var(--fake-black)',
  black_100: 'var(--fake-black-100)',
  white: 'var(--fake-white)',
  error: 'var(--fake-error)',
  warning: 'var(--fake-warning)',
  success: 'var(--fake-success)',
  shadow_sm: 'var(--fake-shadow_sm)',
  shadow_md: 'var(--fake-shadow_md)',
  transparent: 'var(--fake-transparent)',
}

const spacing = {
  4.5: 'var(--fake-spacing-4pt5)',
  5.5: 'var(--fake-spacing-5pt5)',
  6.5: 'var(--fake-spacing-6pt5)',
  7.5: 'var(--fake-spacing-7pt5)',
}

const fontWeight = {
  light: 'var(--fake-font-light)',
  regular: 'var(--fake-font-regular)',
  medium: 'var(--fake-font-medium)',
  semibold: 'var(--fake-font-semibold)',
  bold: 'var(--fake-font-bold)',
}

const fontSize = {
  h1: 'var(--fake-text-h1)',
  h2: 'var(--fake-text-h2)',
  h3: 'var(--fake-text-h3)',
  h4: 'var(--fake-text-h4)',
  h5: 'var(--fake-text-h5)',
  h6: 'var(--fake-text-h6)',
  p: 'var(--fake-text-p)',
}

const boxShadow = {
  sm: 'var(--fake-shadow-sm)',
  md: 'var(--fake-shadow-md)',
  lg: 'var(--fake-shadow-lg)',
}

const container = {
  center: true,
  padding: 'calc(var(--gutter-x) / 2)',
}

const screens = {
  xs: { max: '576px' },
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1420px',
  xxxl: '1600px',
  laptop: { min: '1200px', max: '1450px' },
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontWeight,
    boxShadow,
    container,
    screens,
    extend: {
      spacing,
      fontSize,
    },
  },
  plugins: [],
}
