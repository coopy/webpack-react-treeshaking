# webpack-react-treeshaking
Experiments with shaking a :tree:

## Run

Start Webpack dev server:

```sh
$ npm start
```

## Build

Builde distribution bundle:

```sh
webpack
```

## Current issues

### Building the bundle:

```sh
$ webpack
Hash: 3daa420857d9d3872f66
Version: webpack 2.1.0-beta.4
Time: 931ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  5.62 kB       0  [emitted]  main
bundle.js.map  2.47 kB       0  [emitted]  main
    + 3 hidden modules

ERROR in ./~/react/react.js
Module not found: Error: Can't resolve './lib/React' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/react'
 @ ./~/react/react.js 3:17-39

ERROR in ./~/react-dom/index.js
Module not found: Error: Can't resolve 'react/lib/ReactDOM' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/react-dom'
 @ ./~/react-dom/index.js 3:17-46
```

### Running the dev server:

```sh
$ npm start

> webpack-react-treeshaking@1.0.0 start /Users/per/dev/formidable/victory/react-treeshaking
> webpack-dev-server --watch

http://localhost:8080/
webpack result is served from /build
content is served from /Users/per/dev/formidable/victory/react-treeshaking
Hash: ba6b389ba2b859d78f11
Version: webpack 2.1.0-beta.4
Time: 858ms
        Asset   Size  Chunks             Chunk Names
    bundle.js  51 kB       0  [emitted]  main
bundle.js.map  56 kB       0  [emitted]  main
chunk    {0} bundle.js, bundle.js.map (main) 44.4 kB [rendered]
    [0] ./src/main.jsx 2.21 kB {0} [built]
    [1] (webpack)-dev-server/client?http://localhost:8080 2.94 kB {0} [built] [2 errors]
    [2] ./~/punycode/punycode.js 14.7 kB {0} [built]
    [3] ./~/querystring-es3/index.js 127 bytes {0} [built] [2 errors]
    [4] ./~/react-dom/index.js 63 bytes {0} [built] [1 error]
    [5] ./~/react/react.js 56 bytes {0} [built] [1 error]
    [6] ./~/sockjs-client/lib/entry.js 244 bytes {0} [built] [2 errors]
    [7] ./~/url/url.js 23.3 kB {0} [built] [1 error]
    [8] (webpack)/buildin/module.js 715 bytes {0} [built]
    [9] multi main 40 bytes {0} [built]

ERROR in (webpack)-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve 'strip-ansi' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/webpack-dev-server/client'
 @ (webpack)-dev-server/client?http://localhost:8080 3:16-37

ERROR in (webpack)-dev-server/client?http://localhost:8080
Module not found: Error: Can't resolve 'webpack/hot/emitter' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/webpack-dev-server/client'
 @ (webpack)-dev-server/client?http://localhost:8080 92:19-49

ERROR in ./~/url/url.js
Module not found: Error: Can't resolve './util' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/url'
 @ ./~/url/url.js 25:11-28

ERROR in ./~/sockjs-client/lib/entry.js
Module not found: Error: Can't resolve './transport-list' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/sockjs-client/lib'
 @ ./~/sockjs-client/lib/entry.js 3:20-47

ERROR in ./~/sockjs-client/lib/entry.js
Module not found: Error: Can't resolve './main' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/sockjs-client/lib'
 @ ./~/sockjs-client/lib/entry.js 5:17-34

ERROR in ./~/react/react.js
Module not found: Error: Can't resolve './lib/React' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/react'
 @ ./~/react/react.js 3:17-39

ERROR in ./~/react-dom/index.js
Module not found: Error: Can't resolve 'react/lib/ReactDOM' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/react-dom'
 @ ./~/react-dom/index.js 3:17-46

ERROR in ./~/querystring-es3/index.js
Module not found: Error: Can't resolve './decode' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/querystring-es3'
 @ ./~/querystring-es3/index.js 3:33-52

ERROR in ./~/querystring-es3/index.js
Module not found: Error: Can't resolve './encode' in '/Users/per/dev/formidable/victory/react-treeshaking/node_modules/querystring-es3'
 @ ./~/querystring-es3/index.js 4:37-56
webpack: bundle is now VALID.
```
