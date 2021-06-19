const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")

const PORT = 3000;

const app = express();

// Concise output colored by response status for development use.
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});


app.use(require("./routes/api.js"));
app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

