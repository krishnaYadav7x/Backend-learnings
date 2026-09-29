# 📦 CommonJS vs ES Modules

JavaScript has two major module systems:

- 🟨 **CommonJS (CJS)** — Traditional Node.js module system
- 🟦 **ES Modules (ESM)** — Standard JavaScript module system

---

## ⚡ CommonJS vs ES Modules

| Feature | 🟨 CommonJS | 🟦 ES Modules |
|---|---|---|
| 🔒 Strict Mode | Not enabled by default | Enabled by default |
| 📦 Syntax | `require()` / `module.exports` | `import` / `export` |
| ⏳ Module Loading | Synchronous | Asynchronous |
| 📝 File Extension | Usually optional | Generally required |
| ⚡ Import Execution | Executes where `require()` is called | Imports are processed before code execution |
| ⏸️ Top-level `await` | ❌ Not supported | ✅ Supported |
| 🧩 Top-level `this` | `module.exports` | `undefined` |
| ⚙️ `package.json` | `"type": "commonjs"` is optional | `"type": "module"` required for `.js` |
| 📤 Exporting | `module.exports` | Named + default exports |

---

## 🟨 CommonJS (CJS)

### 🔹 Basic Syntax

```js
const fs = require("fs");

module.exports = {
  name: "Ansh",
};