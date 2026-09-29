📦 CommonJS vs ES Modules
🟨 CommonJS (CJS)
🔓 Strict mode: Not enabled by default.
⏳ Module loading: Synchronous.
📂 File loading: Uses synchronous file loading.
📝 File extension: Extension is generally optional when importing modules.
📁 Any file: If you provide a full file path, CommonJS can load files other than JavaScript modules as well.
⚙️ package.json: "type": "commonjs" is optional because CommonJS is Node.js's default module system.
🧩 this: At the top level of a CommonJS module, this refers to module.exports.
🚫 Imports are not hoisted: require() is a normal function call, so it executes where it appears in the code.
⏸️ Top-level await: Cannot normally use await directly at the top level of a CommonJS module.
📤 Exports: CommonJS uses a single module.exports value, but that value can itself be an object containing multiple functions/values.
🟦 ES Modules (ESM)
🔒 Strict mode: Enabled by default.
⏳ Module loading: Module dependencies are handled asynchronously.
📂 File loading: Module loading is asynchronous.
📝 File extension: The file extension is generally required for relative imports.
📁 File types: ES module imports are designed for JavaScript modules (.js, .mjs); they don't work like CJS's general require() file loading.

⚙️ package.json: To treat .js files as ES modules, use:

{
  "type": "module"
}

Alternatively, use the .mjs extension.

❌ this: At the top level of an ES module, this is undefined.
⚡ Imports are hoisted: ES module imports are processed during the module's linking/instantiation phase, before normal code execution.
✅ Top-level await: Supported.
📤 Exports: ES modules can have multiple named exports and also a default export.