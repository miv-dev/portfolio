/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "jet": "#383838",
                "eerie-black-1": "#202022",
            },


        },
    },
    plugins: [],
}

