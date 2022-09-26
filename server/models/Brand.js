const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define(
        'brand',
        {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
        },
    { timestamps: false }
    )
};