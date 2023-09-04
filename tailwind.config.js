/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: { //폰트 추가
        sanserif: ["var(--archivo)"], // :앞에 있는 글자대로 class 추가해주면 적용됨
        serif: ["var(--archivo)"],
      },
      minHeight: {
        vh30: '30vh',
        vh40: '40vh',
        vh50: '50vh',
        vh70: '70vh',
      },
      maxHeight: {
        vh30: '30vh',
        vh40: '40vh',
        vh50: '50vh',
      },
      Height: {
        vh30: '30vh',
        vh50: '50vh',
      },
      screens: {
        'phone': '450px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        'accent' : '#E8361E'
      }
    },
  },
  plugins: [],
}
