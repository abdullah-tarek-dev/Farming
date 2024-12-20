/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        wordSpacing: {
          'extra-wide': '0.5em',
          'super-wide': '1em',
        },
      },
    },
    plugins: [],
  }
  
  // module.exports = {
  //   theme: {
  //     extend: {
  //       wordSpacing: {
  //         'extra-wide': '0.5em',
  //         'super-wide': '1em',
  //       },
  //     },
  //   },
  //   plugins: [],
  // };
  