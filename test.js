const test = require('tape')
const main = require('.')
const json = main.json
const isEOL = main.isEOL

test('all releases in schedule.json contains required properties', t => {
  Object.keys(json).forEach(version => {
    const release = json[version]
    t.equal(typeof release.start, 'string', '.start exists')
    t.equal(typeof release.end, 'string', '.end exists')
  })
  t.end()
})

test('isEOL - throws', t => {
  t.throws(isEOL.bind(null, false), /invalid version type/)
  t.throws(isEOL.bind(null, true), /invalid version type/)
  t.throws(isEOL.bind(null, undefined), /invalid version type/)
  t.throws(isEOL.bind(null, 'v0.11'), /unknown version v0.11/)
  t.end()
})

test('isEOL accepts numbers and strings', t => {
  t.equal(isEOL('0.10'), true)
  t.equal(isEOL('v0.10'), true)
  t.equal(isEOL('v0.10.48'), true)
  t.equal(isEOL(5), true)
  t.equal(isEOL('5'), true)
  t.equal(isEOL('v5'), true)
  t.equal(isEOL('v5.12.0'), true)
  t.equal(isEOL('v6'), true)
  t.equal(isEOL('v7'), true)
  t.equal(isEOL('v8'), true)
  t.equal(isEOL('v9'), true)
  t.end()
})
