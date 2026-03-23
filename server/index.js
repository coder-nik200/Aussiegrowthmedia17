const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { enquiryRoutes } = require("./Routes/EnquiryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Server is running 🚀"));

app.use("/web/api/enquiry", enquiryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
