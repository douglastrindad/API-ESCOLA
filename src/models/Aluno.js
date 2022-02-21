const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize, ){
        super.init({
            nome: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len:{
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    }
                }
              },
              sobrenome: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len:{
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    }
                }
              },
              email: {
                  type: DataTypes.STRING,
                  defaultValue: '',
                  unique:{
                      msg: 'Email já existe '
                  },
                  validate: {
                      isEmail:{
                          args: [3, 255],
                          msg: 'Email inválido',
                      }
                  }
                },
            idade:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            peso: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            altura: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize,
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
      }
}
module.exports = Aluno;