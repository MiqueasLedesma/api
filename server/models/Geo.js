const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "geo",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            longitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

        },
        { timestamps: false }
    );
};
