/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepageBgMobile': 'url(/src/assets/homepage/hero-bg-mobile.jpg)',
        'homepageBgTablet': 'url(/src/assets/homepage/hero-bg-tablet.jpg)',
        'homepageBgDesktop': 'url(/src/assets/homepage/hero-bg-desktop.jpg)'
      },
      
    },
  },
  plugins: [],
}

