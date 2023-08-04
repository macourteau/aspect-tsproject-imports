## aspect-tsproject

An attempt at building Typescript apps and libraries with the aspect build rules.

This works:
```
bazel build //demo/web/apps/my-web-app
```

However, this does not work:
```
bazel run //demo/web/apps/my-web-app
```

Trying to run gives an error: 
```
node:internal/modules/cjs/loader:1042
  throw err;
  ^

Error: Cannot find module 'body-parser'
Require stack:
- <snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/express/lib/express.js
- <snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/express/index.js
- <snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/@demo/my-lib-b/my-lib-b.js
- <snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/demo/web/apps/my-web-app/src/app.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1039:15)
    at Module._load (node:internal/modules/cjs/loader:885:27)
    at Module.require (node:internal/modules/cjs/loader:1105:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (<snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/express/lib/express.js:15:18)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Module.require (node:internal/modules/cjs/loader:1105:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '<snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/express/lib/express.js',
    '<snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/express/index.js',
    '<snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/node_modules/@demo/my-lib-b/my-lib-b.js',
    '<snip>/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/demo/web/apps/my-web-app/my-web-app.sh.runfiles/__main__/demo/web/apps/my-web-app/src/app.js'
  ]
}

Node.js v18.13.0
```
