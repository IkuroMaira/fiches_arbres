const test = require('node:test');
const assert = require('node:assert');
const { fizzbuzz } = require('./fizzbuzz.js')

test('fizzbuzz(3)', (t) => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
});

test('fizzbuzz(15)', (t) => {
    assert.strictEqual(fizzbuzz(15), "Fizzbuzz");
});

test('fizzbuzz(1)', (t) => {
    assert.strictEqual(fizzbuzz(1), 1);
});

test('fizzbuzz(20)', (t) => {
    assert.strictEqual(fizzbuzz(20), "Buzz");
});