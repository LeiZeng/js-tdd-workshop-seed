var assert = require('assert')
var add = require('../src/add')

suite('Add', function () {
  test('should return summary', function () {
    assert.equal(3, add(1, 2))
    assert.equal(-1, add(1, -2))
  })
})
