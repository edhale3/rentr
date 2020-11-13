const tailwind = require('./tailwind.js')
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss(tailwind),
        require('autoprefixer'),
    ],
};