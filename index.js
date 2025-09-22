#!/usr/bin/env node

import { globSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import moment from 'moment';

const cwd = new URL('./locale', import.meta.resolve('moment')).pathname;
const locales = globSync('*.js', { cwd }).map(name => basename(name, '.js'));

function stringify(data) {
  return JSON.stringify(data, null, 2);
}

function getLongDateFormat(ld) {
  return ld.longDateFormat('L');
}

export function extract(ll = locales, fn = getLongDateFormat) {
  return Object.fromEntries(ll.map(l => [l, fn(moment.localeData(l))]));
}

if (import.meta.main) {
  const ex = extract();
  const str = stringify(ex);
  const filename = process.argv[2];
  if (filename) {
    writeFileSync(filename, str);
  } else {
    console.log(str);
  }
}
