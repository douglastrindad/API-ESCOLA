"use strict";
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
      'users',
      [
        {
          nome: "Douglas",
          email: "douglastrindad@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Douglas 2",
          email: "douglastrindad2@hotmail.com",
          password_hash: await bcryptjs.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Douglas 3",
          email: "douglastrindad3@hotmail.com",
          password_hash: await bcryptjs.hash("111111", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

down: () => {},
};
