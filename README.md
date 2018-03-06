# lowercase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Lowercase the keys of an object. Use for node.js and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).


## Installation

`$ npm install --save lowercase-keys-object`

or

`$ yarn add lowercase-keys-object`


## Usage

#### Node.JS

```js
const lowerKeys = require('lowercase-keys-object');

const employee = {
	ID: 127,
	FIRST_Name: 'huynh',
	last_NAME: 'ha',
	salary: 1500
};

const res = lowerKeys(employee);

console.log(res);

// { id: 127, first_name: 'huynh', last_name: 'ha', salary: 1500 }

console.log(lowerKeys(null)); // null
console.log(lowerKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/lowercase-keys-object/dist/lowercase-keys-object.js"></script>
<!-- Or use minified -->
<script src="./node_modules/lowercase-keys-object/dist/lowercase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/lowercase-keys-object"></script>
```
##### Usage
```html
<script>
	const employee = {
		ID: 127,
		FIRST_Name: 'Huynh',
		last_NAME: 'Ha',
		salary: 1500
	};

	const res = lowerKeys(employee);

	console.log(res);
	console.log(lowerKeys(null)); // null
	console.log(lowerKeys(undefined)); // null
</script>
```

## API

### lowerKeys(object)

Returns a new object which keys is/are lowercased.


## Related
+ [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
+ [camelcase-keys-object](https://github.com/huynhsamha/camelcase-keys-object)


[npm-image]: https://img.shields.io/npm/v/lowercase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/lowercase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/lowercase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/lowercase-keys-object
