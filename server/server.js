require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const contactRoutes = require('./routes/contactRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
