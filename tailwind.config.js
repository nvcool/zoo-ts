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
    },
    screens: {
      sm: "391px",
      md: "634px",
      lg: "1024px",
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
        "future-mobile": "url('/src/assets/future/bg-mobile.png')",
        "text-card": "url(/src/assets/creating/txt-card.png)",
        "text-card-mobile": "url(/src/assets/creating/txt-card-mobile.png)",
      },
    },
  },
  plugins: [],
};
