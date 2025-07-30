/** @type {import('tailwindcss').Config} */
export default {
  // This line tells Tailwind to look for a 'dark' class on a parent element (in our case, the <html> tag)
  // to apply dark mode styles.
  darkMode: 'class',

  // This tells Tailwind where to look for class names in your project files.
  // It's important to include all file types where you use Tailwind classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // In the theme section, you can customize Tailwind's default design system,
  // like colors, fonts, spacing, etc. We are using the defaults for now.
  theme: {
    extend: {},
  },

  // The plugins section allows you to add extra functionality to Tailwind,
  // such as official plugins for typography or forms.
  plugins: [],
}
