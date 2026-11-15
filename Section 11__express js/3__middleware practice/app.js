import express from "express";

const app = express();
const port = 3000;

// Registering route and its middleware stack
app.get(
  "/",

  // 1. Request Handler Middleware (Normal Middleware)
  (req, res, next) => {
    // Passing an error to Express using next(err)
    try {
      throw new Error("got error");
      console.log("hello");
    } catch (err) {
      next(err);
    }

    // Other ways to control middleware execution:

    // next("truthy"); // Passes an error to error-handling middleware
    // next();         // Passes control to the next normal middleware
    // res.end("hello 1 from server\n"); // Ends the response
  },

  // 2. Error-Handling Middleware
  (err, req, res, next) => {
    console.log("second middleware");
    console.log(err);
    res.end(err.message);
  },

  // 3. Request Handler Middleware (Normal Middleware)
  (req, res, next) => {
    console.log("second middleware");
    res.end("hello 2 from server");
  },
);

// Start the Express server
app.listen(port, "0.0.0.0", () => {
  console.log(`listening on port ${port}`);
});
