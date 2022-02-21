'use strict';

module.exports = {
   up : (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allownull: false,
      unique: true,
     },
   ),



  down : () => {},
};
