'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.belongsTo(models.Run, { foreignKey: 'run_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
      // define association here
    }
  }
  Location.init({
    run_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'runs',
        key: 'id'
      }
    },
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    terrain_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
  });
  return Location;
};