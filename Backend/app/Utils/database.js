// src/utils/database.js
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     logging: false,
//   }
// );

// module.exports = sequelize;


//number 2
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true, // Enable SSL/TLS
//   },
//   logging: false,
// });

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// module.exports = sequelize;


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('api', 'postgres', 'Letsdoit!', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dblegacy', 'dblegacy_user', 'dEDpEQAd8CXO2rPDCeYLgSQSpjbYz8of', {
  host: 'dpg-cit24l5gkuvgs6sei740-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
    dialectOptions: {
    ssl: true, // Enable SSL/TLS
    
  },
});

module.exports = sequelize;

