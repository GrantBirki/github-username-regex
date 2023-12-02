'use strict';

const githubUsernameRegex = require('.');
const {strictEqual} = require('assert');

for (const validName of [
  'a',
  'abc',
  'DEF',
  'Ghi',
  'a-z',
  'a-b-c',
  '0',
  '10',
  '1-2',
  'abc123',
  'abc-123',
  'name_enterprise',
  'cool-name_enterprise',
  'AvalidName123-456',
  'x'.repeat(39)
]) {
  strictEqual(
    githubUsernameRegex.test(validName),
    true,
    `Expected "${validName}" to be considered as a valid Github username, but it wasn't.`
  );
}

for (const invalidName of [
  '',
  ' ',
  'a b',
  'a ',
  ' b',
  '-',
  'a-',
  '-b',
  'a--b',
  'a\nb',
  'Ａ',
  '１',
  'あ',
  '🍣',
  'wild*card',
  'mona1--#@!lisa',
  String.fromCharCode(15),
  'x'.repeat(40)
]) {
  strictEqual(
    githubUsernameRegex.test(invalidName),
    false,
    `Expected ${JSON.stringify(invalidName)} to be considered as an invalid Github username, but it wasn't.`
  );
}

console.log('✅ All tests passed');
