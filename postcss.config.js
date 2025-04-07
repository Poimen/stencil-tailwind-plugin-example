
const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('./src/postcss/property-to-variable'),
  ],
};

module.exports = config;
