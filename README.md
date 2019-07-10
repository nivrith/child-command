# child-command

[![CircleCI](https://circleci.com/gh/nivrith/child-command/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/child-command/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/child-command.svg)](https://www.npmjs.com/package/child-command)
[![node](https://img.shields.io/node/v/child-command.svg)](https://www.npmjs.com/package/child-command)
[![License MIT](https://img.shields.io/github/license/nivrith/child-command.svg)](https://github.com/nivrith/child-command/blob/master/LICENSE)

Check if Object has Property, super fast

## Highlights

- Returns Promise

- Written in Typescript

## Usage

```js

import childCommand from 'child-command';

childCommand('node -v')
.then((result) => {
  console.log(result.stdout); // v10.16.0
});


childCommand('exit 2')
.catch((error) => {
  console.log(error.code); // 2
});


childCommand('>&2 echo "error"')
.then((result) => {
  console.log(result.stderr); // error
})

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
