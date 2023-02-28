/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "border-color": "var(--border-color)",
        "color-Main": "var(--color-Main)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
