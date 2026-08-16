const express = require("express");
const { nanoid } = require("nanoid");

const router = express.Router();

const tasks = [
    {
        id: nanoid(),
        title: "Learn Node.js",
        complete: false,
        createdAt: new Date().toISOString(),
    },

    {
        id: nanoid(),
        title: "Learn Express",
        complete: false,
        createdAt: new Date().toISOString(),
    },

    {
        id: nanoid(),
        title: "Build taskforge API",
        complete: false,
        createdAt: new Date().toISOString(),
    },
];

router.get("/", (req, res) => {
    res.status(200).json(tasks);
});

module.exports = router;