// Index.js - backend

require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Entry = require('./models/Entry');

app.use(cors());

app.use(express.json());
app.use(morgan('tiny'));

app.use(express.static('dist'));

morgan.token('postData', req => JSON.stringify(req.body));

app.use(
	morgan(
		':method :url :status :res[content-length] - :response-time ms :postData',
	),
);

const errorHandler = (error, request, response, next) => {
	console.error(error.message);

	if (error.name === 'CastError') {
		return response.status(400).send({error: 'Malformatted ID'});
	}

	next(error);
};

app.use(errorHandler);

app.get('/api/persons', (request, response) => {
	Entry.find({}).then(entries => {
		response.json(entries);
	});
});

app.get('/info', (request, response, next) => {
	Entry.countDocuments({})
		.then(count => {
			const info = `Phonebook has info for ${count} people</br>
     ${new Date()}`;
			response.send(info);
		})
		.catch(next);
});

app.get('/api/persons/:id', (request, response, next) => {
	Entry.findById(request.params.id)
		.then(entry => {
			if (entry) {
				response.json(entry);
			} else {
				response.status(404).end();
			}
		})
		.catch(error => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
	const {id} = request.params;
	Entry.findByIdAndDelete(id)
		.then(() => {
			response.status(204).end();
		})
		.catch(error => next(error));
});

app.post('/api/persons', (request, response, next) => {
	const {body} = request;

	if (!body.name || !body.number) {
		return response.status(400).json({error: 'name or number is missing'});
	}

	const entry = new Entry({
		name: body.name,
		number: body.number,
	});

	entry
		.save()
		.then(savedEntry => {
			response.json(savedEntry);
		})
		.catch(error => {
			if (error.name === 'ValidationError') {
				return response.status(400).json({error: error.message});
			}

			next(error);
		});
});

app.put('/api/persons/:id', (request, response, next) => {
	const {body} = request;

	const entry = {
		name: body.name,
		number: body.number,
	};

	Entry.findByIdAndUpdate(request.params.id, entry, {
		new: true,
		runValidators: true,
	})
		.then(updatedEntry => {
			response.json(updatedEntry);
		})
		.catch(error => {
			if (error.name === 'ValidationError') {
				return response.status(400).json({error: error.message});
			}

			next(error);
		});
});

const {PORT} = process.env;
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
