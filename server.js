const express = require("express");

const logger = require("./middleware/logger");

const app = express ();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(logger);

app.listen(PORT, () => {
    console.log(`TaskForge API running on port ${PORT}`);
});