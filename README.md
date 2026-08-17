# TaskForge API

TaskForge is a RESTful task management API built with **Node.js** and **Express**. It provides CRUD operations for managing tasks using an in-memory task collection.

## Features

* Create tasks
* Retrieve all tasks
* Retrieve a task by ID
* Update tasks
* Delete tasks
* Request logging middleware
* RESTful API design

> **Note:** Tasks are stored in memory, so all task data is reset when the server restarts.

## Requirements

* Node.js
* npm

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd taskforge-api
npm install
```

## Running the Application

Start the server with:

```bash
npm start
```

The API will run on:

```text
http://localhost:3000
```

You should see:

```text
TaskForge API running on port 3000
```

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Retrieve all tasks      |
| GET    | `/tasks/:id` | Retrieve a task by ID   |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task           |

## Project Structure

```text
taskforge-api/
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── tasks.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Key Files

* **server.js** — Express application entry point and server configuration.
* **middleware/logger.js** — Global request logging middleware.
* **routes/tasks.js** — Task routes, in-memory task collection, and CRUD operations.
* **package.json** — Project metadata, dependencies, and npm scripts.
* **README.md** — Project documentation.

## Development

To run the application locally:

```bash
npm start
```

Once the server is running, API requests can be made using tools such as **Postman**, **cURL**, or any HTTP client.

## License

This project is intended for educational and development purposes.
