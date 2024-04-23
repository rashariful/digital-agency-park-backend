//app.ts
const  express = require ("express");
const app = express();
const cors = require ("cors");
// import router from "./app/routes";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1", router)

app.get("/", (req, res) => {
  res.send("Digital Agency Park Home!");
});

module.exports = app;