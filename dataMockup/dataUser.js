const { User } = require("../server/database/db");
const bcrypt = require("bcrypt");


const hasPassword = (password) => {
    pass = bcrypt.hashSync(password,11)
    return pass
}

const createUser = async () => {
    await User.bulkCreate([
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
            /* isAdmin: false, */
        },
        {
            name: "admin",
            lastName: "admin",
            username: "admin",
            typeIdentification: "DNI",
            identification: "123456",
            contact: 302,
            email: "admin@admin.com",
            address: "calle ",
            password: hasPassword("admin"),
            isAdmin: true,
        },
    ]);
};

module.exports = { createUser };
