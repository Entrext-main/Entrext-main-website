// Tailwind v4 uses a single PostCSS plugin — no autoprefixer/preset-env needed.
// Without this file, Next would pass globals.css through unprocessed, leaving
// @theme / @apply / @layer directives in the output and producing zero utility
// classes (the page would render unstyled).
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
