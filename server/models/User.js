const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo

    sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fullName: {
                type: DataTypes.VIRTUAL,
                get() {
                    return `${this.name} ${this.lastName}`;
                },
            },
            typeIdentification: {
                type: DataTypes.STRING, //validar
                allowNull: true,
            },
            identification: {
                type: DataTypes.STRING,

                allowNull: true,
            },
            contact: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,

                validate: {
                    isEmail: true, //==>> contains: '@.'
                },
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                defaultValue: "client",
                get() {
                    const rawValue = this.getDataValue("username");
                    return rawValue ? rawValue.toUpperCase() : null;
                },
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: true,
                /* set(value) {
                    this.setDataValue(isAdmin, value);
                }, */
            },
        },
        {
            timestamps: false,
        }
    );
};
