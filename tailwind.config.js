/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            fontFamily: {
                pop: ["Poppins", "sans-serif"],
            }
        },
    },
    plugins: [],
}
