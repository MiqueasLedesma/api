const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dataShipping",
    {
      receptionName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      DNI:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: false
      },
      collectType:{
        type: DataTypes.STRING,
        defaultValue: 'Tienda',
        allowNull: false
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      },
      city:{
        type: DataTypes.STRING,
        allowNull: false
      },
      province:{
        type: DataTypes.STRING,
        allowNull: false
      },
      cp:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shippingCost:{
        type: DataTypes.FLOAT,
        defaultValue: 0
      },
    }
  )
};
