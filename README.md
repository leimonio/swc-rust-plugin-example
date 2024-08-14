# SWC Plugin

An example SWC plugin workflow.

* Rust + SWC compiles plugin tranformer to WASM.
* NPM package for providing the plugin transformer.
* Example SWC project using the plugin transformer.

# Build Plugin
```sh
cd packages/swc-plugin-transformer
npm run prepack
```

# Use Plugin
```sh
cd example
npm run build
cat output.js
```