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
                type: DataTypes.STRING,
                allowNull: false,
            },
            identification: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true, //==>> contains: '@.'
                },
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                get() {
                    const rawValue = this.getDataValue("username");
                    return rawValue
                        ? rawValue.toUpperCase().contact("@TECHSTORE")
                        : null;
                },
            },
            /* isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
                set(value) {
                    this.setDataValue(isAdmin, value);
                },
            }, */
        },
        {
            timestamps: false,
        }
    );
};
