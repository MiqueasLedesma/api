const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "brand",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
        },
        { timestamps: false }
    );
};
