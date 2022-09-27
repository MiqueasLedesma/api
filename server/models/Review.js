const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "review",
        {
            stars: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            detail: {
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
