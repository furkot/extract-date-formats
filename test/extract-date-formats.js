import test from 'node:test';
import { extract } from '../index.js';

test('extract all date formats', t => {
  const formats = extract();

  t.assert.ok(Object.keys(formats).length > 120);

  t.assert.equal(formats['en-ca'], 'YYYY-MM-DD', 'en-ca');
  t.assert.equal(formats.pl, 'DD.MM.YYYY', 'pl');
});

test('extract specific formats', t => {
  const formats = extract(['fi', 'es']);

  t.assert.equal(Object.keys(formats).length, 2);

  t.assert.equal(formats.es, 'DD/MM/YYYY', 'es');
  t.assert.equal(formats.fi, 'DD.MM.YYYY', 'fi');
});
