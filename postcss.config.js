// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// import postcssNested from 'postcss-nested';

// module.exports = {
//   plugins: {
//     "postcss-import": {},
//     "postcss-scss": {},
//     "postcss-nested": {},
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

import postcssNested from "postcss-nested";
// postcss.config.js
export const plugins = {
  "postcss-import": {},
  "tailwindcss/nesting": {},
  tailwindcss: {},
  autoprefixer: {},
};
// postcss.config.js
// export const plugins = {
//   "postcss-import": {},
//   "tailwindcss/nesting": "postcss-nesting",
//   tailwindcss: {},
//   autoprefixer: {},
// };

// // postcss.config.js
// export const plugins = {
//   "postcss-import": {},
//   "tailwindcss/nesting": "postcss-nesting",
//   tailwindcss: {},
//   "postcss-preset-env": {
//     features: { "nesting-rules": false },
//   },
// };
