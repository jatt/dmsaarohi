const cors = require("cors");
const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
<<<<<<< HEAD
const adminRoutes = require("./routes/adminRoutes");
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", submissionRoutes);
<<<<<<< HEAD
app.use("/api", adminRoutes);
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
