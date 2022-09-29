const { User } = require("../server/database/db");

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
            password: "pedroelgrande",
            /* isAdmin: false, */
        },
    ]);
};

module.exports = { createUser };
