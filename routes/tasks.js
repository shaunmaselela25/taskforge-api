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

router.get("/:id", (req, res) => {
    const task = tasks.find((task) => task.id === req.params.id);

    if(!task) {
        return res.status(404).json({
            error: "Task not found",
        });
    }

    res.status(200).json(task);
});

router.post("/", (req, res) => {
    const { title } = req.body;

    if(!title) {
        return res.status(400).json({
            error: "Title is required",
        });

    }

    const task = {
        id: nanoid(),
        title,
        complete: false,
        createdAt: new Date().toISOString(),
    };

    tasks.push(task);

    res.status(201).json(task);
});

module.exports = router;