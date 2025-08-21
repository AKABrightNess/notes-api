# Notes API

A simple REST API for managing notes using Node.js and Express.js.

**Note:** The code comes with 2 notes pre added to the array.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server in development mode (with Nodemon):

```bash
npm run devStart
```

3. Test endpoints with Postman or your preferred tool.

## Base URL

```
http://localhost:3000/notes
```

## Endpoints

### Get all notes

**GET** `/notes`

**Response:**

```json
[
  {
    "id": 1,
    "title": "First note",
    "content": "This is the first note."
  },
  {
    "id": 2,
    "title": "Second note",
    "content": "This is the second note, for testing purposes."
  }
]
```

---

### Get a note by ID

**GET** `/notes/:id`

**Example:** `/notes/1`

**Response:**

```json
{
  "id": 1,
  "title": "First note",
  "content": "This is the first note."
}
```

---

### Create a note

**POST** `/notes`

**Body parameters (JSON):**

* `title` (string) — optional
* `content` (string) — optional

**Example request body:**

```json
{
  "title": "My new note",
  "content": "This is some content for the note."
}
```
**Response:**

```json
{
  "id": 3,
  "title": "My new note",
  "content": "This is some content for the note."
}
```

**Note:** If neither `title` nor `content` is provided, the server may return an error depending on your validation.

---

### Update a note

**PUT** `/notes/:id`

**Body parameters (JSON):**

* `title` (string) — optional
* `content` (string) — optional

**Example:** `/notes/3`

**Example request body:**

```json
{
  "title": "Updated title",
  "content": "Updated content."
}
```

**Response:**

```json
{
  "id": 3,
  "title": "Updated title",
  "content": "Updated content."
}
```

---

### Delete a note

**DELETE** `/notes/:id`

**Example:** `/notes/3`

**Response:**

```json
{
  "message": "Note deleted"
}
```

---

## Scripts in `package.json`

```json
"scripts": {
  "devStart": "nodemon index.js",
  "start": "node index.js"
}
```

* `npm run devStart` → runs with Nodemon (auto-reload)
* `npm start` → normal Node.js run