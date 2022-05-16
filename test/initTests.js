import assert from 'assert'
import mock from 'mock-fs';
import { readFileSync } from 'fs';
import init from '../initHandlers.js'

describe('INIT', function () {
  beforeEach(() => {
      mock({
        'data.json': "",
        'test': {
          'sampleFileToImport.json': "\"{'name': 'foo'}\"",
        }
      });
  });
  it('should work with object as an option', async () => {
    const file = `${process.cwd()}/data.json`
    await init({"object": "{'foo':'bar'}"})
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), { foo: 'bar' });

  });
  it('should work with filepath as an option', async () => {
    const importFile = `${process.cwd()}/test/sampleFileToImport.json`
    const mockupFile = `${process.cwd()}/data.json`
    await init({"file": importFile})
    const result = readFileSync(mockupFile, 'utf8');
    assert.notDeepEqual(JSON.parse(result), { name: 'foo' });
  });

  after(() => {
      mock.restore();
  }); 
});