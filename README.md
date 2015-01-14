Reproduce `browserify` bug with bundling a module that contains circular
dependencies as a standalone bundle:

- `test/index.js` requires `test/step1.js`
- `test/step1.js` requires `test/index.js` as `require('./index')` (this fails)

Repro instructions:  run `npm install`, then `node do-browserify.js`

Also, visit `test.html` in a browser.  There will be an error in the console:

```
Uncaught Error: Cannot find module '../index'
```
