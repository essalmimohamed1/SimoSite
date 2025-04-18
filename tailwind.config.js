/** @type {import(tailwindcss).Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            alt: ['Montserrat', 'sans-serif'],
            creative: ['Raleway', 'sans-serif'],  
          },
          animation: {
            'bounce-slow': 'bounce 2s infinite',
            'rotate-slow': 'rotate 0.7s ease-in-out',
          },
          keyframes: {
            bounce: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            rotate: {
              '0%, 100%': { transform: 'rotate(0deg)' },
              '50%': { transform: 'rotate(15deg)' },
            },
          },
        },
      },
    plugins: [],
}
  