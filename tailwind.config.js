/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Удаляет все свойства кроме написанных
  theme: {
    colors: {
      background: "#d6e0e6",
      green: "#2e8a57",
      orange: "#ec6807",
      yellow: "#ffd04e",
      blue: "#73aadd",
      darkBlue: "#304f6c",
      darkGreen: "#015f4f",
      white: "#ffffff",
    },
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1025px",
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      inter: "Inter",
      shantell: "Shantell Sans",
    },

    // Расширяет уже имеющиеся стили добавляя новые стили
    extend: {
      backgroundImage: {
        "background-home": "url('/src/assets/background/background_home.png')",
        "background-partners":
          "url('/src/assets/background/background-partners.png')",
        "background-partners-mobile":
          "url('/src/assets/background/background-partners-mobile.png')",
        "background-news": "url('/src/assets/background/background_news.png')",
        "background-news-ivent":
          "url('/src/assets/background/background_news_ivent.png')",
        "background-zoo": "url('/src/assets/background/background_zoo.png')",
      },
    },
  },
  plugins: [],
};
