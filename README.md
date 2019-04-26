# string-salt


string-salt is a npm package that will help developers when creating passwords with salt mechanism.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install string-salt
```

## API

```js
var salt = require('string-salt')
```

### salt(string, times, salt)

This function needs three main arguments.
1. string - the string or password that you want to salt
2. times - the places that you will add salt string. The value of the times must be a integer. So,
    *  1 = add salt string only to the front of the string
    *  2 = add the salt string to front and back
    *  3 = add salt string to front and back with twice
    *  0 = return the salt string
    *  "" = will return the original password
3. salt - the string or integer or whatever that you wish to have it as the salt string.


## License

  [MIT](LICENSE)

