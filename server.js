const express = require("express");
const app = express ();
const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
    console.log(`TaskForge API running on port ${PORT}`);
});