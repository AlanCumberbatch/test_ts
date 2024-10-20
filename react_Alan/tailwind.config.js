/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  // purge: ['./src/**/*.{tsx}'], // 修改为你的路径
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray-20': '#F8F4EB',
    'gray-25': '#EFE6E6',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-25': '#EFE6E6',
      },
      backgroundImage: (theme)=> ({
        "gradient-yellowed": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home":"url(./assets/HomePageGraphic.png)"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {// for ::before, ::after,
        evolvetext: "url(./assets/Evolvetext.png)",
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-bg': 'gradient 6s ease infinite', // 动态渐变动画
      },
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  plugins: [],
}