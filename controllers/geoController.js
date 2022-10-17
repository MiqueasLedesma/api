const { Geo } = require('../server/database/db');

const getAllGeolocation = async (req, res) => {
    try {
        await Geo.findAll()
            .then(r => res.send(r));
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

const createSucursal = async (req, res) => {
    try {
        const { name, address, longitude, latitude } = req.body
        const sucursal = await Geo.findOrCreate({
            where: { name: name },
            defaults: {
                address,
                longitude,
                latitude
            }
        });
        return res.send(sucursal[0])
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

const updateSucursal = async (req, res) => {
    try {
        const { id, name, address, longitude, latitude } = req.body
        const sucursal = await Geo.update({
                name,
                address,
                longitude,
                latitude
        },
        {
            where: { id }});
        return res.send(sucursal)
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

const deleteSucursal = async (req, res) => {
    try {
        const { id } = req.body
        console.log(id,"id")
        const sucursal = await Geo.destroy({
            where: {
              id:id
            }
          })
        return res.send({message: "Sucursal deleted"})
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

module.exports = {
    getAllGeolocation,
    createSucursal,
    updateSucursal,
    deleteSucursal
};