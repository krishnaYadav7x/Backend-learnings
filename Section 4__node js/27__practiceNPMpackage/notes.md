## 📦 Node.js Module Resolution

```text
require("student-details")
          ↓
     Node searches
          ↓
current/node_modules
          ↓
parent/node_modules
          ↓
grandparent/node_modules
          ↓
C:\node_modules
          ↓
user-level locations
          ↓
other Node paths
          ↓
   package found