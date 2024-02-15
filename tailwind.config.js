/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        transparent: "transparent",
        current: "currentColor",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark1: "#F79489",
        dark2: "#F8AFA6",
        light1: "#FADCD9",
        light2: "#F9F1F0",
        pal1: "#8C1F28",
        pal2: "#591C21",
        pal3: "#044040",
        pal4: "#D92525",
        pal5: "#F2F2F2",
        pal6: "#57375D",
        pal7: "#FF3FA4",
        pal8: "#FF9B82",
        pal9: "#FFC8C8",
        darkGrey: "#121212",
        darkPrimary: "#1F1B24",
        darkError: "#CF6679",
        primaryVar: "#3700B3",
        darkBlue: "#090336",
      },
      scale: {
        110: "110%",
        120: "120%",
      },
      boxShadow: {
        card: "0px 0px 5px 3px rgba(255,255,255, 0.8), 0px 0px 13px 5px rgba(255,255,255, 0.5)",
        lightCard: "0 0 51px 15px rgb(249 64 221 / 59%)",
        darkCard: "0px 0px 56px 13px rgba(0, 0, 0, 0.4)",
        medievalCard: "0px 0px 56px 13px rgba(33, 30, 53, 0.6)",
      },
      screens: {
        xs: "450px",
        xs2: "350px"
      },
      backgroundImage: {
        "hero-pattern1": "url('/src/assets/bg-1.jpg')",
        "hero-pattern2": "url('/src/assets/bg-2.jpg')",
        "hero-pattern3": "url('/src/assets/bgl-1.jpg')",
        "hero-pattern4": "url('/src/assets/bgl-2.jpg')",
        "bg-pattern1": "url('/src/assests/bgSvg.svg')",
        "student1": "url('/src/assets/student1.jpg')",
        "student2": "url('/src/assets/student2.jpg')",
        "student3": "url('/src/assets/student3.jpg')",
        "student4": "url('/src/assets/student4.jpg')",
        "cyberpunk": "url(./src/assets/login/login_bg.jpeg)"
      },
    },
  },
  plugins: [],
};
