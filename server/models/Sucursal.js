const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "sucursal",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    }
  )
};
