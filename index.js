const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

let phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(express.json());
app.use(morgan("tiny"));

app.use(cors());

morgan.token("postData", (req, res) => JSON.stringify(req.body));

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postData"
  )
);

app.get("/api/persons", (request, response) => {
  response.json(phonebook);
});

app.get("/info", (request, response) => {
  const info = `Phonebook has info for ${phonebook.length} people</br>
     ${new Date()}`;

  response.send(info);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const entry = phonebook.find((entry) => entry.id === id);

  if (entry) {
    response.json(entry);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phonebook = phonebook.filter((entry) => entry.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number is missing" });
  }

  if (phonebook.find((entry) => entry.name === body.name)) {
    return response.status(400).json({ error: "name must be unique" });
  }

  const newEntry = {
    id: Math.floor(Math.random() * 10000),
    name: body.name,
    number: body.number,
  };

  phonebook = phonebook.concat(newEntry);

  response.json(newEntry);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
