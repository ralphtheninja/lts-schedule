# lts-schedule

> The node.js LTS schedule in JSON for programmatic usage

## Install

```
$ npm i lts-schedule -S
```

## Usage

```js
const schedule = require('lts-schedule')
console.log(JSON.stringify(schedule.v8, null, 2))
```

Yields:

```
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

Returns an object with node.js versions as keys. Each release object has the following properties:

* `start` (required) release start date
* `end` (required) release end date
* `codename` (optional) code name for the release
* `lts` (optional) date when lts release begins, required for lts releases
* `maintenance` (optional) date when the maintenance period begins

## License
MIT
