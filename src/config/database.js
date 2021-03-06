require('dotenv').config();

module.exports = {
    development: {
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: "postgres",
      logging: false,
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      }
    }
  };
