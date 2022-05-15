# cli-init
This is the GET plugin for [CLI project](https://github.com/Amir-61/cli).

- **NPM:** [@amir-cli/cli-init](https://www.npmjs.com/package/@amir-cli/cli-init), **GITHUB:** [cli-init](https://github.com/Amir-61/cli-init)

# Usages:
 - #### `INIT --object={myStringifiedObjectHere}` :
    will reset the datastore with provided object. For example `INIT --object="{'name':'foo'}"` will set/initialize the datasource with {'name':'foo'}
 - #### `INIT --file=sourceFilePath` :
    will reset the datastore the JSON file you provide. For example: `INIT --file="test.json"`

# Connector structore:
- `test` Folder: Each usage is unit tested using mocha
- `init.js` file: It's like Data Access Object (DAO) of the connector where it exposes the newly implemented commands
- `initHandlers.js` file: It's the handler for each exposed usages

# Unit tests:
- This connector comes with it's own unit tests written in [mocha](https://mochajs.org/), you can run unit tests for each module sperataly using `npm test` command.