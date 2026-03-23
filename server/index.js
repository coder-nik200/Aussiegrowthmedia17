const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { enquiryRoutes } = require("./Routes/EnquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/enquiry", enquiryRoutes);

module.exports = app;
