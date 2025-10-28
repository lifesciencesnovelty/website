/** @type {import('tailwindcss').Config} */

module.exports = {
    content : [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist : [
        'animate-zoomLoop'
    ],
    theme : {
        extend : {
            fontFamily : {
                poppins : ['Poppins','sans-serif'],
            },
            keyframes : {
                zoomLoop : {
                    '0%,100%' : {transform:'scale(1)'},
                    '50%' : {transform : 'scale(1.9)'},
                },
            },
            animation : {
                zoomLoop : 'zoomLoop 10s ease-in-out infinite'
            }
        }
    },
    plugins : [],
}