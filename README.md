# shell-command

[![CircleCI](https://circleci.com/gh/nivrith/shell-command/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/shell-command/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/shell-command.svg)](https://www.npmjs.com/package/shell-command)
[![node](https://img.shields.io/node/v/shell-command.svg)](https://www.npmjs.com/package/shell-command)
[![License MIT](https://img.shields.io/github/license/nivrith/shell-command.svg)](https://github.com/nivrith/shell-command/blob/master/LICENSE)

Check if Object has Property, super fast

## Highlights

- Returns Promise

- Written in Typescript

## Usage

```js

import shellCommand from 'shell-command';

shellCommand('node -v')
.catch((result) => {
  console.log(result.stdout); // v10.16.0
});


shellCommand('exit 2')
.catch((error) => {
  console.log(error.code); // 2
});


shellCommand('>&2 echo "error"')
.then((result) => {
  console.log(result.stderr); // error
})

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
