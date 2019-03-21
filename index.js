#!/usr/bin/env node
const fs = require('fs');
const ini = require('ini');
const [ , , path, command, key, value] = process.argv;

if (!path || !command || !key) {
  printUsageAndExit();
}

const input = fs.readFileSync(path, 'utf8');
if (!input) {
  printUsageAndExit();
}

const config = ini.parse(input);
switch (command) {
  case 'get':
    process.stdout.write(config[key] + '\n');
    break;
  case 'set':
    config[key] = value;
    fs.writeFileSync(path, ini.stringify(config), 'utf8');
    break;
  default:
    printUsageAndExit();
    break;
}

function printUsageAndExit() {
  console.log(`
    usage:
      $  mini <input> get <key>
      $  mini <input> set <key> <value>
  `);
  process.exit(1);
}

