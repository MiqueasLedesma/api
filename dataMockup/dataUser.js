const { User } = require("../server/database/db");
const bcrypt = require("bcrypt");


const hasPassword = (password) => {
    pass = bcrypt.hashSync(password, 11)
    return pass
}

const arr = [
    {
        name: "Pedrito",
        lastName: "Fernandez",
        username: "cliente",
        typeIdentification: "DNI",
        identification: "12345",
        contact: 301,
        email: "pedritofernandez@mail.com",
        address: "calle 1 con carrea 3",
        password: hasPassword("pedroelgrande"),
        isAdmin: false,
    },
    {
        name: "admin",
        lastName: "admin",
        username: "admin",
        typeIdentification: "DNI",
        identification: "123456",
        contact: 301,
        email: "admin@admin.com",
        address: "calle 1 con carrea 3",
        password: hasPassword("admin"),
        isAdmin: true,
    },
];


const createUser = async () => {
    try {
        await arr.map(e => User.findOrCreate({
            where: {
                name: e.name,
                lastName: e.lastName,
                username: e.username,
                typeIdentification: e.username,
                identification: e.password,
                contact: e.contact,
                email: e.email,
                address: e.address,
                password: e.password,
                isAdmin: e.isAdmin,
            }
        }))
    } catch (error) {

    }
};

module.exports = { createUser };
