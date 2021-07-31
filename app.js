// IMPORTING PACKAGES
const express = require("express");
const path = require("path");

// DEFINING PORT
const PORT = process.env.PORT || 3000;

// CREATING INSTANCE OF EXPRESS
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css"))
);

// LISTENING ON LOCALHOST
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

// RENDERING INDEX.HTML FOR ALL PATHS
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
