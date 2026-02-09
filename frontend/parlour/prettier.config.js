module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js', // optional if your tailwind config is in root
    semi: true,
    singleQuote: true,
    printWidth: 80,
};
