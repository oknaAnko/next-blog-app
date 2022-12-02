// module.exports = {
//   purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'media', // 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         'accent-1': '#333'
//       }
//     }
//   },
//   variants: {
//     extend: {}
//   },
//   plugins: []
// };

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
};

// const { join } = require('path');

// module.exports = {
//   content: [
//     join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
//     join(__dirname, './src/**/*.{js,ts,jsx,tsx}')
//   ],
//   theme: {
//     extend: {}
//   },
//   plugins: []
// };
