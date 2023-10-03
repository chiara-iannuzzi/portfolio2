module.exports = {
    mode: 'jit',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
    theme: {
        extend: {
            colors: {
                'purple-200': '#cab9f7',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            },
            screens: {
                xs: "450px"
            }
        },
    },
    darkMode: 'media', // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [],
}