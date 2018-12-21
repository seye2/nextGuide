const env = require('./config.ts');

module.exports={
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
  "plugins":[
    "transform-decorators-legacy",
    "transform-class-properties",
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
      ['transform-define', env]
  ]
}
