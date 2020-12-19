# type-checks

A collection of type checking functions.

# Usage

```
npm install @szydlovski/type-checks
```

```javascript
const typeChecks = require('@szydlovski/type-checks');

typeChecks.isFunction(function(){}) // true
typeChecks.isObject(undefined) // false
typeChecks.isPlainObject(new Map()) // false
typeChecks.isArray([]) // true
typeChecks.isNumber('1.23') // false
typeChecks.isInteger(1.55) // false
typeChecks.isFloat(1) // false
typeChecks.isString('hello') // true
typeChecks.isBoolean(false) // true
typeChecks.isUndefined(null) // false
typeChecks.isNull(undefined) // false
typeChecks.isBigInt(10n) // true
typeChecks.isSymbol(Symbol('')) // true

// alternatively

const typeMap = require('@szydlovski/type-checks').map;

// contains all the "isType" functions as "type" properties in camelCase

typeMap.string(1) // false
typeMap.plainObject({}) // true
```