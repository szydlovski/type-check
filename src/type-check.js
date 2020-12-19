function isFunction(value) {
	return typeof value === 'function';
}

function isObject(value) {
	return typeof value === 'object' && value !== null;
}

function isPlainObject(value) {
	return Object.prototype.toString.call(value) === '[object Object]' && Object.getPrototypeOf(value).isPrototypeOf(Object);
}

function isArray(value) {
	return Array.isArray(value);
}

// primitives

function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

function isInteger(value) {
	return Number.isInteger(value);
}

function isFloat(value) {
	return isNumber(value) && value % 1 !== 0;
}

function isString(value) {
	return typeof value === 'string';
}

function isBoolean(value) {
	return typeof value === 'boolean';
}

function isUndefined(value) {
	return value === undefined;
}

function isNull(value) {
	return value === null;
}

function isBigInt(value) {
  return typeof value === 'bigint';
}

function isSymbol(value) {
  return typeof value === 'symbol';
}

module.exports = {
	isFunction,
  isObject,
  isPlainObject,
  isArray,
  isNumber,
  isInteger,
  isFloat,
	isString,
	isBoolean,
  isUndefined,
  isNull,
  isBigInt,
  isSymbol,
  map: {
    function: isFunction,
    object: isObject,
    plainObject: isPlainObject,
    array: isArray,
    number: isNumber,
    integer: isInteger,
    float: isFloat,
    string: isString,
    boolean: isBoolean,
    undefined: isUndefined,
    null: isNull,
    bigInt: isBigInt,
    symbol: isSymbol
  }
};
