const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewires
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AceToDo server is now running");
});
app.listen(port, () => {
  console.log(`AceToDo server running on ${port}`);
});
