/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        drBackground: '#282a36',
        drCurrentLine: '#44475a',
        drForeground: '#f8f8f2',
        drComment: '#6272a4',
        drCyan: '#8be9fd',
        drGreen: '#50fa7b',
        drOrange: '#ffb86c',
        drPink: '#ff79c6',
        drPurple: '#bd93f9',
        drRed: '#ff5555',
        drYellow: '#f1fa8c',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
