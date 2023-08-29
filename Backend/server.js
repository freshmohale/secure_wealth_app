const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authRouter } = require('./app/Routes/authRoutes');
const sequelize = require('./app/Utils/database');
const User = require('./app/Models/userModel');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Recommender API',
      version: '1.0.0',
      description: 'API for recommending products with kid-friendly explanations',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [
    path.join(__dirname, './app/Controllers/gpt.js'),
    path.join(__dirname, './app/GPTServices/openai.js'),
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve API documentation JSON
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());
app.use(cors());

// Import the recommendations controller
const { getRecommendations, getProducts, getMeaningOfWord } = require('./app/Controllers/gpt');
app.post('/api/products', getProducts);
// API route for recommendations
app.post('/api/recommendations', getRecommendations);
// API Route For Meanings
app.post('/api/meaning', getMeaningOfWord);

// Routes
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ 'Project Name:': 'Secure Legacy' });
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();
