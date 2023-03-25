'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Run extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Run.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
      // define association here
    }
  }
  Run.init({
    user_id:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    distance: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Run',
    tableName: 'runs',
  });
  return Run;
};