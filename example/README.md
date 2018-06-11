```
> @miyucy/ises5-webpack-plugin-example@1.0.0 start ~/github.com/miyucy/ises5-webpack-plugin/example
> webpack --mode development --config webpack.config.js --verbose

Hash: 924d27e8f10ef88dc99f
Version: webpack 4.8.3
Time: 1946ms
Built at: 2018-06-11 19:04:59
     Asset      Size  Chunks             Chunk Names
    app.js  3.38 KiB    main  [emitted]  main
app.js.map  2.87 KiB    main  [emitted]  main
Entrypoint main = app.js app.js.map
chunk {main} app.js, app.js.map (main) 177 bytes [entry] [rendered]
    > ~/github.com/miyucy/ises5-webpack-plugin/example/src/app.js main
 [./es6/hello.js] 62 bytes {main} [depth 1] [built]
     [exports: hello]
     cjs require ../es6/hello [./src/app.js] 3:13-36
 [./src/app.js] 115 bytes {main} [depth 0] [built]
     single entry ~/github.com/miyucy/ises5-webpack-plugin/example/src/app.js  main

ERROR in app.js: Unexpected character '`' (85:9)
function hello(args) {
  return `${args.join(",")}`;
         ^
}
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! @miyucy/ises5-webpack-plugin-example@1.0.0 start: `webpack --mode development --config webpack.config.js --verbose`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the @miyucy/ises5-webpack-plugin-example@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
