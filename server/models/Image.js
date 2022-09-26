const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('image',{
        
        name:{
                type:DataTypes.STRING,
                allowNull: false
        },

        // url:{
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }
    },
    { timestamps: false }
    )
}