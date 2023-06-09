'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointment.init({
    date: DataTypes.STRING,
    hour: DataTypes.STRING,
    price: DataTypes.FLOAT,
    about: DataTypes.STRING,
    doctor_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
    timestamps: true
  });
  return Appointment;
};