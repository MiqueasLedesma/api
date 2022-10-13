const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "orderDetail",
    {
      quantity:{
        type: DataTypes.INTEGER ,
        allowNull: false,
      },
      subTotal:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      total:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    }
  )
};
