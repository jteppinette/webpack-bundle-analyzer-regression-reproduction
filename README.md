# Webpack Bundle Analyzer - Regression Reproduction

**Setup**

This project was tested using Node v18.20.4.

```sh
$ npm install
$ npx webpack
```

**Analysis**

The webpack bundle analyzer fails when the webpack version is greater than or equal to 5.96, and the following configuration items are set:
- output.module: true
- experiments.outputModule: true
- optimization.runtimeChunk: "single"
