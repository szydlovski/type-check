const { expect } = require('chai');
const typeMap = require('../src/index.js').map;

const testValues = {
	function: [function () {}],
	object: [new (class Foo{})()],
	plainObject: [{}],
	array: [[], [1, '', true, undefined]],
	integer: [0, 1],
	float: [1.5],
	string: ['string', '1'],
	boolean: [true, false],
	undefined: [undefined],
	null: [null],
	bigInt: [0n, BigInt(1)],
	symbol: [Symbol('')],
};

const valueConfig = {
	object: ['object', 'plainObject', 'array'],
	number: ['integer', 'float']
}

function excludeValues(exclusion) {
	return Object.entries(testValues)
		.filter(([type]) => !exclusion.includes(type))
		.reduce((allValues, [, values]) => [...allValues, ...values], []);
}

function includeValues(inclusion) {
	return Object.entries(testValues)
		.filter(([type]) => inclusion.includes(type))
		.reduce((allValues, [, values]) => [...allValues, ...values], []);
}

for (const [type, typeCheck] of Object.entries(typeMap)) {
  const functionName = 'is' + type.charAt(0).toUpperCase() + type.slice(1);
  const validTypes = valueConfig[type] || [type];
  describe(functionName, function() {
    it(`returns true for ${type}s`, function() {
      for (const validValue of includeValues(validTypes)) {
        expect(typeCheck(validValue)).to.be.true;
      }
    })
    it(`returns false for all other values`, function() {
      for (const invalidValue of excludeValues(validTypes)) {
        expect(typeCheck(invalidValue)).to.be.false;
      }
    })
  })
}

