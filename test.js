var assert = require('assert')
var interleave = require('./index.js')

assert.strictEqual(interleave(0b111, 0), 0b010101)

assert.strictEqual(
  interleave(
    0b11111111111111111111111111,
    0b11111111111111111111111111
  ),
  (((Number.MAX_SAFE_INTEGER + 1) / 2) - 1)
)

assert.throws(function () {
  interleave(-1, 1)
})

assert.throws(function () {
  interleave(1, -1)
})

assert.throws(function () {
  interleave(67108864, 1)
})

assert.throws(function () {
  interleave(1, 67108864)
})

assert.strictEqual(interleave(1, 1), 3)
assert.strictEqual(interleave(1, 1), 3)
