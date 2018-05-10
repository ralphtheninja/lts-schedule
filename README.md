# lts-schedule

> The node.js LTS schedule in JSON for programmatic usage

[![npm](https://img.shields.io/npm/v/lts-schedule.svg)](https://www.npmjs.com/package/lts-schedule)
![Node version](https://img.shields.io/node/v/lts-schedule.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/lts-schedule.svg?branch=master)](https://travis-ci.org/ralphtheninja/lts-schedule)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm i lts-schedule -S
```

## Usage

```js
const isEOL = require('lts-schedule').isEOL
console.log(isEOL('v0.10')) // true
console.log(isEOL('v0.12')) // true
console.log(isEOL('v10')) // false
```

```js
const json = require('lts-schedule').json
console.log(JSON.stringify(json.v8, null, 2))
```

Yields:

```json
{
  "start": "2017-05-30",
  "lts": "2017-10-31",
  "maintenance": "2019-04-01",
  "end": "2019-12-31",
  "codename": "Carbon"
}
```

## Api

### `const schedule = require('lts-schedule')`

Returns an object with the properties listed below.

### `schedule.isEOL(version)`

A function that returns `true` if `version` has reached End of Life (EOL), otherwise `false`.

`version` can be a string or a `Number`.

The following calls are equivalent:

```js
isEOL(4)
isEOL('4')
isEOL('v4')
isEOL('v4.8.7')
```

### `schedule.json`

An object with node.js versions as keys. Each release object has the following properties:

* `start` (required) release start date
* `end` (required) release end date
* `codename` (optional) code name for the release
* `lts` (optional) date when lts release begins, required for lts releases
* `maintenance` (optional) date when the maintenance period begins

## License
MIT
