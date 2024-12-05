const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('../routes/user');
const armyRoutes = require('../routes/army');
const uploadRoutes = require('../routes/upload');
const pictureRoutes = require('../routes/picture');
const miniatureRoutes = require('../routes/miniature');

const app = express();

app.use(cors({
	origin: 'https://wharmyy.vercel.app/',
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Connect to MongoDB
mongoose
	.connect(
		`mongodb+srv://devb0x:${process.env.MONGO_ATLAS_PW}@cluster0.uhohovv.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0`
	)
	.then(() => {
		console.log('Connected to database.');
	})
	.catch((err) => {
		console.error('Connection failed!', err);
	});

// Middleware
app.use(bodyParser.json());

// Debugging Middleware (Logs all incoming requests)
app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
});

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/army', armyRoutes);
app.use('/api/army', miniatureRoutes);
app.use('/api', uploadRoutes);
app.use('/api', pictureRoutes);

// Catch-All Route for Undefined Paths
app.use((req, res) => {
	res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
