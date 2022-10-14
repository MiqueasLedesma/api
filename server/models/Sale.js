const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "sale",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    percentageDiscount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    salePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    disscountPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    }
  )
};
