const dotenv = require("dotenv");

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI || "",
<<<<<<< HEAD
  mongoDbName: process.env.MONGODB_DB_NAME || "dms_aarohi",
  adminEmail: process.env.ADMIN_EMAIL || "sde1rajat@gmail.com",
  adminPassword: process.env.ADMIN_PASSWORD || "createdByRajat",
  adminTokenSecret: process.env.ADMIN_TOKEN_SECRET || process.env.ADMIN_PASSWORD || "changeme-secret",
  adminTokenTtlHours: Number(process.env.ADMIN_TOKEN_TTL_HOURS || 24)
=======
  mongoDbName: process.env.MONGODB_DB_NAME || "dms_aarohi"
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
};

module.exports = { env };
