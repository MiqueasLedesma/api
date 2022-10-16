const { DataTypes } = require("sequelize");
module.exports = function(sequelize) {
    sequelize.define (
        "cart",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            salePrice: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            discount: {
                type: DataTypes.FLOAT,
                defaultValue: 0,
            },
            subTotal: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
        }
    )
}
