const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //HTTP logger
const bodyParser = require("body-parser"); //json communication b-w client
const cors = require("cors"); // handling multiple ports , error
const { readdirSync } = require("fs"); // filesystem

require("dotenv").config(); //separate secrets

//import routes
// const authRoutes = require("./routes/auth"); instead using fs reaadir

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(`DB CONNECTION ERR ${err}`));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//routes-middleware

// app.use("/api", authRoutes); --->> using fs.readdir
readdirSync("./routes").map((r) => {
  //reading all middlewares in routes folder
  app.use("/api", require("./routes/" + r));
  //
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on the port ${port}`));
