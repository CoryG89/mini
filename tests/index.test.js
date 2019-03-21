const fs = require('fs');
const assert = require('assert');
const { execSync } = require('child_process');
const path = require('path');
const dir = path.resolve(path.dirname(require.main.filename), '..');

const testInput = `${dir}/tests/test.ini`;
const testWorkingConfig = `${dir}/tests/test-copy.ini`;

fs.copyFileSync(testInput, testWorkingConfig);

// Test reading keys from ini configuration file
const command1 = `node ${dir}/index.js ${testWorkingConfig} get foo`;
const output1 = execSync(command1, { encoding: 'utf8' }).trim();
assert.strictEqual(output1, 'bar');

// Test writing keys to ini configuration file
const command2 = `node ${dir}/index.js ${testWorkingConfig} set foo baz`;
execSync(command2);
const output2 = execSync(command1, { encoding: 'utf8' }).trim();
assert.strictEqual(output2, 'baz');

console.log('Tests completed');
