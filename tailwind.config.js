/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // এখানে colors ব্যবহার করতে হবে
        primary: "#5F6FFF", // bg-primary না লিখে শুধু primary নাম দিতে হবে
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
        footer: "2fr 1fr 1fr",
        auto2: "1fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
