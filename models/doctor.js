'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Doctor.belongsTo(models.User,{
        foreignKey: 'user_id'
      });

      Doctor.belongsToMany(models.Client, { through: 'Appointments', foreignKey: 'doctor_id'});
    }
  }
  Doctor.init({
    speciality: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
    timestamps: false
  });
  return Doctor;
};