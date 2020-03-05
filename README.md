# Webpack three.js starter

Simple boilerplate for [Webpack](https://webpack.js.org/guides/getting-started) powered [three.js](https://threejs.org/) projects.

ES6+ without any babeling/transpilers/polyfills. Only for [modern browsers](https://kangax.github.io/compat-table/es6/).

## Quick start

Source code files are in the `src/` folder and webpack generates the bundle into `dist/` folder.
Contents of `src/assets/` are copied to `dist/assets/` without any modifications when bundling.

```sh
# Install dependencies (package.json)
npm install

# Start the dev server (http://localhost:8080/ by default)
# (Config: webpack.common.js + webpack.dev.js)
npm start

# Create a production build to dist/ folder
# (Config: webpack.common.js + webpack.prod.js)
npm run build
```

Check webpack conf files & `package.json` for more info.
