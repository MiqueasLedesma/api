const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "image",
        {
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pathImage: {
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
