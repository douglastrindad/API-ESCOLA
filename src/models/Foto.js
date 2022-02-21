
const { Model, DataTypes } = require('sequelize');
const appConfig = require('../config/appConfig');



class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        filename: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        aluno_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        url: {
          type: DataTypes.VIRTUAL,
          get(){
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          }
        },
      },{
        sequelize,
        tableName: 'fotos',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
module.exports = Foto;
