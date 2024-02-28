/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      menu: [
        {
          name: "Seared Salmon Fillet",
          description:
            "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
          mobileImg: "url(/src/assets/homepage/salmon-mobile.jpg)",
          desktopImg: "url(/src/assets/homepage/salmon-desktop-tablet.jpg)",
        },
        {
          name: "Rosemary Filet Mignon",
          description:
            "Our prime beef served to your taste with a delicious choice of seasonal sides.",
          mobileImg: "url(/src/assets/homepage/beef-mobile.jpg)",
          desktopImg: "url(/src/assets/homepage/beef-desktop-tablet.jpg)",
        },
        {
          name: "Summer Fruit Chocolate Mousse",
          description:
            "Creamy mousse combined with summer fruits and dark chocolate shavings.",
          mobileImg: "url(/src/assets/homepage/chocolate-mobile.jpg)",
          desktopImg: "url(/src/assets/homepage/chocolate-desktop-tablet.jpg)",
        },
      ],
    },
  },
  plugins: [],
};