# react-ssr-boilerplate
This is simplest react boilerplate for [plate-cli](https://github.com/haegul/plate-cli).

## Installation
```
$ sudo npm install plate -g && plate react-ssr 
```

## Stack
- React
    - react@15.5.4
    - react-dom@15.5.4
- Server
    - express@4.15.2
- Build
    - webpack@3.0.0
    - webpack-dev-middleware@1.11.0
    - babel-preset-env@1.4.0
    - babel-preset-react@6.24.1
    - babel-preset-stage-0@6.24.1

## Default Commands
```
$ npm run dev    // lunch express
$ npm run build  // build bundle files
```

## Structure
```
Root
|-client
|   |- components
|   |     |- app.js
|   |- index.js
|-server
|   |- Html.js
|   |- index.js
|   |- WDM.js
|- .babel.rc
|- package.json
|- webpack.config.js
```